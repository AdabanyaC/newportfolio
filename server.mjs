import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {localAnswer} from './chat.mjs';
const root=fileURLToPath(new URL('.',import.meta.url));
// Node's native parser reads local configuration without exposing it to the client.
try{process.loadEnvFile(path.join(root,'.env'));}catch(e){if(e.code!=='ENOENT')throw e;}
const data=JSON.parse(await readFile(path.join(root,'portfolio.json'),'utf8'));
const types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',mjs:'text/javascript; charset=utf-8',json:'application/json; charset=utf-8',svg:'image/svg+xml',png:'image/png',jpg:'image/jpeg',webp:'image/webp'};
const publicFiles=new Set(['index.html','style.css','app.js','chat.mjs','formats.mjs','portfolio.json']);
export function createPortfolioServer({rateLimit=12}={}){
 const buckets=new Map();
 return http.createServer(async(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
  const json=(status,body)=>{if(!res.destroyed){res.writeHead(status,{'Content-Type':types.json,'Cache-Control':'no-store'});res.end(JSON.stringify(body));}};
  try{
   const url=new URL(req.url,'http://localhost');
   if(url.pathname==='/api/status'&&req.method==='GET')return json(200,{mode:'local'});
   if(url.pathname==='/api/chat'){
    if(req.method!=='POST')return json(405,{error:'Use POST for questions.'});
    if(req.headers.origin&&new URL(req.headers.origin).host!==req.headers.host)return json(403,{error:'Request origin is not allowed.'});
    if(!req.headers['content-type']?.startsWith('application/json'))return json(415,{error:'Expected a JSON request.'});
    const now=Date.now();for(const [key,b]of buckets)if(b.expires<=now)buckets.delete(key);
    const ip=req.socket.remoteAddress;let bucket=buckets.get(ip)||{count:0,expires:now+60_000};bucket.count++;buckets.set(ip,bucket);
    if(bucket.count>rateLimit){res.setHeader('Retry-After','60');return json(429,{error:'Please wait a minute before sending another question.'});}
    let bytes=0;const chunks=[];for await(const chunk of req){bytes+=chunk.length;if(bytes>20_000)return json(413,{error:'The conversation is too long. Please start a new conversation.'});chunks.push(chunk);}
    let body;try{body=JSON.parse(Buffer.concat(chunks).toString());}catch{return json(400,{error:'Invalid request.'});}
    if(typeof body.message!=='string'||!body.message.trim()||body.message.length>1500)return json(400,{error:'Please enter a question of 1–1,500 characters.'});
    if(body.history!==undefined&&(!Array.isArray(body.history)||body.history.length>12||body.history.some(m=>!m||!['user','assistant'].includes(m.role)||typeof m.content!=='string'||m.content.length>6000)))return json(400,{error:'Invalid conversation history. Please start a new conversation.'});
    return json(200,localAnswer(data,body.message.trim(),body.history||[]));
   }
   if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);return res.end();}
   const file=decodeURIComponent(url.pathname==='/'?'index.html':url.pathname.slice(1));
   const asset=/^assets\/[a-z0-9-]+\.(png|jpg|webp|svg)$/.test(file);
   if(!publicFiles.has(file)&&!asset){res.writeHead(404);return res.end('Not found');}
   const content=await readFile(path.join(root,file));res.writeHead(200,{'Content-Type':types[file.split('.').pop()]||'application/octet-stream','Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:content);
  }catch{if(!res.headersSent)json(400,{error:'Unable to process that request.'});else res.end();}
 });
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const port=Number(process.env.PORT||5173);const server=createPortfolioServer();server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port} — guide: local answers only`));
}
