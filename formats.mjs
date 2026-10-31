// Bounded local presentation instructions, applied after factual retrieval.
const numbers={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10};
const countToken='(one|two|three|four|five|six|seven|eight|nine|ten|\\d+)';
export function presentationRequest(message){
 const counted=new RegExp(`\\b(?:in\\s+|using\\s+|use\\s+|give\\s+me\\s+|as\\s+)?(?:just\\s+|only\\s+|exactly\\s+)?${countToken}[ -]+(words?|sentences?|bullet(?:[ -]+points?)?|points?)\\b`,'i');
 const match=message.match(counted);let format=null,subject=message;
 if(match){const count=numbers[match[1].toLowerCase()]||Number(match[1]);format={kind:match[2].toLowerCase().startsWith('word')?'words':match[2].toLowerCase().startsWith('sentence')?'sentences':'bullets',count};subject=subject.replace(match[0],' ');}
 else if(/\b(shorter|briefly|concise|concisely|summari[sz]e|summary|sum up|bullet points|bullets)\b/i.test(message))format={kind:/\bbullet/.test(message)?'bullets':'sentences',count:/\bbullet/.test(message)?3:1};
 if(!format)return null;
 subject=subject.replace(/\b(describe|summari[sz]e|summary|sum up|briefly|concisely|concise|shorter|make|rewrite|rephrase|give me|please|just|only|exactly)\b/gi,' ').replace(/\bclinton[’']s\b/gi,'Clinton').replace(/\s+/g,' ').replace(/^[\s,.:;-]+|[\s,.:;-]+$/g,'').trim();
 return {format,subject};
}
export function formattingSubject(message,history){const req=presentationRequest(message);if(!req)return null;
 if(!req.subject||/^(that|it|this|the above|the answer|your answer|his experience|his background)$/i.test(req.subject)){
  for(const h of history.filter(h=>h.role==='user').slice().reverse()){
   const previous=presentationRequest(h.content);const subject=previous?previous.subject:h.content;
   if(subject&&!/^(that|it|this|the above|the answer|your answer)$/i.test(subject)){req.subject=subject;break;}
  }
 }
 return req;
}
const sentences=text=>text.split(/(?<=[.!?])\s+(?=[A-Z])|\n\n+/).map(s=>s.trim()).filter(Boolean);
function facts(data,answer){
 if(answer.strengthPoints)return answer.strengthPoints;
 if(['career','profile','experience','current-work'].includes(answer.topic))return data.experience.map(j=>`${j.role} at ${j.company} (${j.dates}).`);
 if(answer.topic==='projects')return answer.projectIds.map(id=>`${data.projects[id].title}: ${data.projects[id].description}`);
 if(answer.topic.startsWith('project:')){const p=data.projects[answer.topic.slice(8)];return [p.description,p.contribution,p.focus];}
 if(answer.topic.startsWith('job:'))return data.experience[Number(answer.topic.slice(4))].bullets;
 if(answer.topic==='education')return data.education.map(e=>`${e.degree} at ${e.school}, ${e.date} — ${e.result}.`);
 return sentences(answer.text);
}
function keywords(data,answer){const text=answer.text.toLowerCase();const topic=answer.topic;
 if(['career','profile','experience','current-work'].includes(topic)){
  const evidence=JSON.stringify({summary:data.summary,experience:data.experience}).toLowerCase();
  return [['Frontend',/frontend/],['Mobile',/mobile/],['Leadership',/lead|co-founder/],['Experimentation',/experiment/],['Products',/products/],['Collaboration',/team|collaborat/]].filter(([,pattern])=>pattern.test(evidence)).map(([word])=>word);
 }
 if(topic==='skills')return data.skills.filter(s=>!/[\s]/.test(s));
 const candidates=[['Discipleship',/discipleship/],['Relocation',/relocat/],['Gaming',/game|gaming/],['Community',/community/],['Mobile',/mobile/],['Frontend',/frontend/],['React',/\breact\b/],['Research',/research|clustering|unsupervised/],['Recommendations',/recommendation/],['Learning',/learning/],['Cloud',/cloud|azure/],['Media',/media/],['Strategy',/strategy/],['Design',/design/],['Development',/development|developed/],['Experimentation',/experiment/],['Analytics',/analytics/],['Performance',/performance/],['Football',/football/],['Music',/music/],['Theology',/theology/],['Education',/degree|university/],['Distinction',/distinction/]];
 const evidence=topic.startsWith('project:')?JSON.stringify(data.projects[topic.slice(8)]).toLowerCase():text;
 return candidates.filter(([,pattern])=>pattern.test(evidence)).map(([word])=>word);
}
export function formatAnswer(data,answer,format){
 // Formatting must never turn a missing fact or a clarification into an assertion.
 if(['unknown','clarification','greeting'].includes(answer.topic))return answer;
 let text;const base={...answer,projectIds:[],suggestions:[],presentation:format};
 if(format.kind==='words'){
  const words=keywords(data,answer);
  if(format.count<1||format.count>6||words.length<format.count)return {...base,text:`I can’t reliably reduce this answer to exactly ${format.count} meaningful words. Here’s a concise answer instead:\n\n${sentences(answer.text)[0]}`,presentation:null};
  text=words.slice(0,format.count).join('. ')+'.';
 }else if(format.kind==='bullets'){
  const items=[...new Set(facts(data,answer))];const count=Math.min(Math.max(format.count,1),6);
  text=items.slice(0,count).map(s=>'• '+s).join('\n');
  if(items.length<format.count)text+=`\n\nThe local sources support ${items.length} distinct point${items.length===1?'':'s'} here.`;
 }else{
  const source=['career','profile','experience','current-work'].includes(answer.topic)?data.summary:answer.text;
  const items=sentences(source);text=items.slice(0,Math.min(Math.max(format.count,1),3)).join(' ');
  if(!/[.!?]$/.test(text))text+='.';
 }
 return {...base,text};
}
