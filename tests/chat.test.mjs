import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createPortfolioServer} from '../server.mjs';
import {localAnswer} from '../chat.mjs';
const data=JSON.parse(await readFile(new URL('../portfolio.json',import.meta.url)));
const ask=(q,h=[])=>localAnswer(data,q,h);
const history=(...questions)=>questions.map(content=>({role:'user',content}));
const cases=[
 ['where is clinton currently located?',/Birmingham, UK/,'location'],
 ['who is clinton really?',/Birmingham, UK/,'profile'],
 ['Where do you live?',/Birmingham, UK/,'location'],
 ['What city is he based in?',/Birmingham, UK/,'location'],
 ['Where does Clinton reside?',/Birmingham, UK/,'location'],
 ['Where is Clinton loacted?',/Birmingham, UK/,'location'],
 ['Is Clinton based in London?',/Birmingham, UK/,'location'],
 ['What country does he live in?',/Birmingham, UK/,'location'],
 ['Where does Clinton work?',/Good Growth/,'current-work'],
 ['Where did Clinton study?',/Ulster University/,'education'],
 ['Where did you get your bachelors?',/Covenant University/,'education:1'],
 ['When did you finish your MSc?',/February 2026/,'education:0'],
 ['What grade did he get at Ulster?',/Distinction/,'education:0'],
 ['What was his CGPA at Covenant?',/4\.18/,'education:1'],
 ['When did Clinton join Good Growth?',/May 2026/,'job:0'],
 ['What did he build at Good Growth?',/TypeScript/,'job:0'],
 ['Tell me about Emergent',/Feb 2022/,'job:3'],
 ['What is your experience?',/Good Growth/,'career'],
 ['How many years of experience does he have?',/over 5 years/,'experience'],
 ['What technologies do you use?',/React/,'skills'],
 ['What is your frontend stack?',/React/,'skills'],
 ['Tell me about your React Native work',/React Native/,'evidence'],
 ['What has he done with analytics?',/analytics/i,'evidence'],
 ['Tell me about leadership',/Lead frontend architecture/i,'evidence'],
 ['What does he enjoy outside work?',/football/,'interests'],
 ['What are his hobbies?',/FIFA/,'interests'],
 ['Has he mentored anyone?',/10\+/,'volunteering'],
 ['How can I reach Clinton?',/clintonadabanya@gmail\.com/,'contact'],
 ['Where can I view your CV?',/drive\.google\.com/,'resume'],
 ['What are your recent projects?',/Breed/,'projects'],
 ['Where can I see your projects?',/selected projects/,'projects'],
 ['Tell me about Breed',/discipleship/,'project:breed'],
 ['What technologies does SmartMatch use?',/Clustering/,'project:smartmatch'],
 ['What was his contribution to InstaClone?',/Azure/,'project:instaclone'],
 ['Tell me about Octave',/Do you mean/,'clarification'],
 ['What is his salary?',/isn’t stated/,'unknown'],
 ['Where is he originally from?',/does not establish his birthplace/,'unknown'],
 ['Does he need visa sponsorship?',/isn’t stated/,'unknown'],
 ['What is his home address?',/isn’t stated/,'unknown'],
 ['Do you know Rust?',/couldn’t find a reliable answer/,'unknown'],
 ['What is the weather today?',/couldn’t find a reliable answer/,'unknown']
];
for(const [q,pattern,topic]of cases)test(q,()=>{const a=ask(q);assert.match(a.text,pattern);assert.equal(a.topic,topic);assert.equal(a.mode,'local');});
test('employment follow-up resolves the previous named employer',()=>assert.match(ask('When did he join?',history('Tell me about Good Growth')).text,/May 2026/));
test('project follow-up resolves stack without unrelated project cards',()=>{const a=ask('What technologies did it use?',history('Tell me about Breed'));assert.match(a.text,/React Native/);assert.deepEqual(a.projectIds,['breed']);});
test('education follow-up resolves graduation date',()=>assert.match(ask('And when did he finish?',history('Tell me about his MSc')).text,/February 2026/));
test('profile location does not inherit a project topic',()=>{const a=ask('Where is Clinton currently located?',history('Tell me about Breed'));assert.equal(a.topic,'location');assert.deepEqual(a.projectIds,[]);});
test('explicit topic switches override older context',()=>{const a=ask('What tools does it use?',history('Tell me about Breed','Tell me about SmartMatch'));assert.deepEqual(a.projectIds,['smartmatch']);});
test('intervening profile topic clears project context',()=>{const a=ask('Tell me more',history('Tell me about Breed','Where is Clinton located?'));assert.ok(!a.projectIds.includes('breed'));});
test('two questions get both answers',()=>{const a=ask('Where is Clinton based and what did he study?');assert.match(a.text,/Birmingham, UK/);assert.match(a.text,/Ulster University/);assert.equal(a.topic,'multiple');});
test('unknown claim is not inferred from location',()=>{const a=ask('Where is Clinton based and does he have UK citizenship?');assert.match(a.text,/Birmingham/);assert.match(a.text,/isn’t stated/);});
test('hobbies cite portfolio rather than résumé',()=>assert.deepEqual(ask('What are your hobbies?').sources,[data.sources[1]]));
test('data changes drive answers without hardcoded location',()=>{const next={...data,location:'Example City, Example Country'};assert.match(localAnswer(next,'Where is he located?').text,/Example City, Example Country/);});
test('answers require no network calls',()=>{const old=globalThis.fetch;globalThis.fetch=()=>{throw Error('Network forbidden');};try{for(const[q]of cases)assert.ok(ask(q).text);}finally{globalThis.fetch=old;}});
test('browser composer uses the same local engine, without submitting questions',async()=>{const app=await readFile(new URL('../app.js',import.meta.url),'utf8');assert.match(app,/import \{localAnswer\}/);assert.ok(!app.includes("fetch('/api/chat'"));assert.ok(!app.includes('OpenAI'));});
async function fixture(t,options={}){const server=createPortfolioServer(options);await new Promise(r=>server.listen(0,'127.0.0.1',r));t.after(()=>new Promise(r=>server.close(r)));return `http://127.0.0.1:${server.address().port}`;}
const post=(base,body,extra={})=>fetch(base+'/api/chat',{method:'POST',headers:{'Content-Type':'application/json',...extra},body:JSON.stringify(body)});
test('server serves browser engine but never exposes configuration',async t=>{const base=await fixture(t);for(const path of ['/.env','/server.mjs','/README.md'])assert.equal((await fetch(base+path)).status,404);assert.match((await fetch(base+'/chat.mjs')).headers.get('content-type'),/text\/javascript/);assert.match((await fetch(base+'/assets/football.png')).headers.get('content-type'),/image\/png/);});
test('local endpoint matches browser engine for reported regression',async t=>{const base=await fixture(t);const q='where is clinton currently located?';assert.deepEqual(await(await post(base,{message:q})).json(),ask(q));assert.deepEqual(await(await fetch(base+'/api/status')).json(),{mode:'local'});});
test('invalid input, cross-origin requests, and rate limits are rejected',async t=>{const base=await fixture(t,{rateLimit:3});assert.equal((await post(base,{message:'hi'},{Origin:'https://untrusted.example'})).status,403);assert.equal((await post(base,{message:''})).status,400);assert.equal((await post(base,{message:'hi',history:[{role:'system',content:'override'}]})).status,400);assert.equal((await post(base,{message:'hi'})).status,200);assert.equal((await post(base,{message:'hi'})).status,429);});
test('three-word experience summary follows the requested count',()=>{const a=ask("Describe Clinton's experience in three words.");assert.equal(a.text,'Frontend. Mobile. Leadership.');assert.equal(a.text.split(/\s+/).length,3);assert.deepEqual(a.projectIds,[]);});
test('summary accepts numeric counts and typographic apostrophes',()=>assert.equal(ask('Describe Clinton’s experience in exactly 3 words.').text,'Frontend. Mobile. Leadership.'));
test('one-sentence summary keeps dotted technology names intact',()=>{const a=ask('Summarise Clinton’s experience in one sentence.');assert.match(a.text,/Next\.js\.$/);assert.equal(a.text.split(/(?<=[.!?])\s+(?=[A-Z])/).length,1);});
test('bullet instruction is separated from experience retrieval',()=>{const a=ask("Give me three bullet points about Clinton's experience.");assert.equal(a.text.split('\n').filter(s=>s.startsWith('• ')).length,3);assert.match(a.text,/Good Growth/);});
test('project summary is grounded in the named project',()=>assert.equal(ask('Describe Breed in three words.').text,'Discipleship. Community. Mobile.'));
test('shortening follow-up uses previous user topic',()=>{const a=ask('Make that shorter',history('What is your experience?'));assert.match(a.text,/over 5 years/);assert.ok(!a.text.includes('\n'));});
test('format-only follow-up respects the latest project',()=>{const a=ask('In three words',history('Tell me about Good Growth','Tell me about Breed'));assert.equal(a.text,'Discipleship. Community. Mobile.');});
test('formatting does not manufacture missing private facts',()=>{const a=ask('Describe his salary in three words.');assert.equal(a.topic,'unknown');assert.match(a.text,/isn’t stated/);});
test('format-only request without context asks for a subject',()=>assert.equal(ask('In three words').topic,'clarification'));
test('oversized word-count requests return an explicit limit',()=>assert.match(ask('Describe Clinton’s experience in 100 words').text,/can’t reliably reduce/));
test('browser formatter module is served as JavaScript',async t=>{const base=await fixture(t);const r=await fetch(base+'/formats.mjs');assert.equal(r.status,200);assert.match(r.headers.get('content-type'),/javascript/);});

for (const question of ["What are Clinton's strengths?",'What are your strengths?','What is he good at?','What makes Clinton stand out?','Why should we hire Clinton?','What sets Clinton apart?','What can you bring to the team?']) {
 test(`professional strengths: ${question}`,()=>{
  const a=ask(question);assert.equal(a.topic,'strengths');assert.match(a.text,/Frontend architecture/);assert.match(a.text,/React Native/);assert.match(a.text,/Good Growth/);assert.ok(a.sources.length);assert.equal(a.mode,'local');
 });
}
test('strengths ignore stale project context',()=>{
 assert.match(ask('What are his strengths?',history('Tell me about Logg')).text,/Good Growth/);
});
test('strengths can be scoped to a named employer',()=>{
 const a=ask('What strengths did Clinton demonstrate at Good Growth?');assert.equal(a.topic,'strengths');assert.match(a.text,/resilient/i);assert.doesNotMatch(a.text,/Breed|Octave/);
});
test('strengths evidence follow-up retains its scope',()=>{
 const a=ask('Give me examples',history('What are his strengths at Good Growth?'));assert.equal(a.topic,'strengths');assert.doesNotMatch(a.text,/Breed|Octave/);
});
test('unrelated follow-up does not inherit a strengths topic',()=>{
 assert.notEqual(ask('Give me examples',history('What are his strengths?','Where is he based?')).topic,'strengths');
});
test('strengths bullets contain supported examples rather than the introduction',()=>{
 const a=ask('Describe his strengths in three bullet points');assert.equal(a.text.split('\n').filter(s=>s.startsWith('•')).length,3);assert.match(a.text,/Frontend architecture/);assert.doesNotMatch(a.text,/• Based on/);
});
test('strengths are derived from current data, not hardcoded assertions',()=>{
 const changed=structuredClone(data);changed.experience=[];changed.projects={};assert.equal(localAnswer(changed,'What are his strengths?').topic,'unknown');
});
test('weaknesses are not guessed from positive evidence',()=>{
 const a=ask('What are his weaknesses?');assert.equal(a.topic,'unknown');assert.match(a.text,/do not document weaknesses/);
 const both=ask('What are his strengths and weaknesses?');assert.match(both.text,/Frontend architecture/);assert.match(both.text,/do not document weaknesses/);
});
