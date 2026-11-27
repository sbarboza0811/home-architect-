(function(){
const EPS=1e-7;
function points(r){return r.points||[[0,0],[r.w,0],[r.w,r.d],[0,r.d]]}
function sides(r){return r.points?r.points.map((_,i)=>'P'+(i+1)):['N','E','S','W']}
function segment(r,s){if(!r.points)return s==='N'?[r.x,r.y,1,0,r.w]:s==='S'?[r.x,r.y+r.d,1,0,r.w]:s==='W'?[r.x,r.y,0,1,r.d]:[r.x+r.w,r.y,0,1,r.d];let i=sides(r).indexOf(s);if(i<0)throw Error('Parede inexistente');let a=r.points[i],b=r.points[(i+1)%r.points.length],dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy);return [r.x+a[0],r.y+a[1],dx/len,dy/len,len]}
function signed(q){return q.reduce((n,a,i)=>{let b=q[(i+1)%q.length];return n+a[0]*b[1]-a[1]*b[0]},0)/2}
function area(r){return Math.abs(signed(points(r)))}
function normal(r,s){if(!r.points)return s==='N'?[0,-1]:s==='S'?[0,1]:s==='E'?[1,0]:[-1,0];let [,,dx,dy]=segment(r,s),sign=Math.sign(signed(r.points));return [dy*sign,-dx*sign]}
function wall(r,s){return {h:r.wallSpecs?.[s]?.h??r.h,t:r.wallSpecs?.[s]?.t??r.t}}
function cross(a,b,c){return (b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0])}
function on(a,b,p){return Math.abs(cross(a,b,p))<EPS&&p[0]>=Math.min(a[0],b[0])-EPS&&p[0]<=Math.max(a[0],b[0])+EPS&&p[1]>=Math.min(a[1],b[1])-EPS&&p[1]<=Math.max(a[1],b[1])+EPS}
function proper(a,b,c,d){return cross(a,b,c)*cross(a,b,d)<-EPS&&cross(c,d,a)*cross(c,d,b)<-EPS}
function touches(a,b,c,d){return proper(a,b,c,d)||on(a,b,c)||on(a,b,d)||on(c,d,a)||on(c,d,b)}
function contains(q,p,edge=true){let inside=false;for(let i=0,j=q.length-1;i<q.length;j=i++){let a=q[i],b=q[j];if(on(a,b,p))return edge;if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])inside=!inside}return inside}
function validPoints(q,w,d){if(!Array.isArray(q)||q.length<3||q.length>100||q.some(a=>!Array.isArray(a)||a.length!==2||!a.every(Number.isFinite)||a[0]<-EPS||a[1]<-EPS||a[0]>w+EPS||a[1]>d+EPS))throw Error('Vértices inválidos');if(Math.min(...q.map(a=>a[0]))>EPS||Math.min(...q.map(a=>a[1]))>EPS||Math.abs(Math.max(...q.map(a=>a[0]))-w)>EPS||Math.abs(Math.max(...q.map(a=>a[1]))-d)>EPS)throw Error('Contorno e dimensões incompatíveis');if(Math.abs(signed(q))<.1)throw Error('Área insuficiente');for(let i=0;i<q.length;i++){let a=q[i],b=q[(i+1)%q.length];if(Math.hypot(a[0]-b[0],a[1]-b[1])<.05)throw Error('Parede menor que 5 cm');for(let j=i+1;j<q.length;j++){if(j===i+1||(i===0&&j===q.length-1))continue;if(touches(a,b,q[j],q[(j+1)%q.length]))throw Error('Contorno cruza ou toca a si mesmo')}}return true}
function furnitureFits(r,f){let q=points(r),corners=[[f.x,f.y],[f.x+f.w,f.y],[f.x+f.w,f.y+f.d],[f.x,f.y+f.d]];if(!corners.every(a=>contains(q,a)))return false;for(let i=0;i<4;i++)for(let j=0;j<q.length;j++)if(proper(corners[i],corners[(i+1)%4],q[j],q[(j+1)%q.length]))return false;return true}
function overlaps(a,b){let A=points(a).map(([x,y])=>[x+a.x,y+a.y]),B=points(b).map(([x,y])=>[x+b.x,y+b.y]);if(A.some(p=>contains(B,p,false))||B.some(p=>contains(A,p,false)))return true;for(let i=0;i<A.length;i++)for(let j=0;j<B.length;j++){let u=A[i],v=A[(i+1)%A.length],c=B[j],d=B[(j+1)%B.length];if(proper(u,v,c,d))return true}function probes(q){let sign=Math.sign(signed(q));return q.map((a,i)=>{let b=q[(i+1)%q.length],x=b[0]-a[0],y=b[1]-a[1],l=Math.hypot(x,y);return [(a[0]+b[0])/2-y/l*.00001*sign,(a[1]+b[1])/2+x/l*.00001*sign]})}return probes(A).some(p=>contains(B,p,false))||probes(B).some(p=>contains(A,p,false))}
window.PlanGeometry={points,sides,segment,area,normal,wall,validPoints,furnitureFits,overlaps,contains};
})();