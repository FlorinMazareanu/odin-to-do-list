(()=>{"use strict";let e=document.getElementById("planning-add-button"),t=document.getElementById("add-dialog-open"),n=document.getElementById("add-dialog-close"),d=document.getElementById("add-modal-task"),a=document.getElementById("add-modal-project"),i=document.getElementById("modal-content-form"),l=document.getElementById("all-tasks"),o=document.getElementById("planning-projects-list");function c(e){e.innerHTML=""}function r(e){let t="";return t=JSON.parse(e[1]).hasOwnProperty("name")?"project":"task",t}function p(e,t){0==e?Object.entries(localStorage).forEach((e=>{if("task"==r(e)){console.log("incarca tot:"),console.log(e);let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),r=document.createElement("div"),p=document.createElement("div"),m=document.createElement("input"),s=document.createElement("p"),u=document.createElement("button"),h=document.createElement("p"),E=document.createElement("i"),g=document.createElement("i");l.appendChild(t),t.appendChild(n),t.appendChild(d),n.appendChild(a),n.appendChild(i),d.appendChild(o),d.appendChild(c),d.appendChild(r),d.appendChild(p),a.appendChild(m),a.appendChild(s),a.appendChild(u),a.appendChild(h),a.appendChild(E),a.appendChild(g),s.innerHTML=JSON.parse(e[1]).title,u.innerHTML="DETAILS",h.innerHTML=JSON.parse(e[1]).dueDate,m.id=`checkbox-${JSON.parse(e[1]).id}`,s.id=`title-${JSON.parse(e[1]).id}`,u.id=`details-${JSON.parse(e[1]).id}`,h.id=`duedate-${JSON.parse(e[1]).id}`,E.id=`edit-${JSON.parse(e[1]).id}`,g.id=`delete-${JSON.parse(e[1]).id}`,m.type="checkbox",E.classList.add("fa-regular"),E.classList.add("fa-pen-to-square"),g.classList.add("fa-solid"),g.classList.add("fa-trash-can")}})):(console.log("only tasks from the project will be loaded..."),console.log(t),console.log("looping..."),Object.entries(localStorage).forEach((e=>{"task"==r(e)&&JSON.parse(e[1]).inProject==t&&(console.log("item:"),console.log(e))})))}let m=function(e,t){let n=new function(e,t){this.id=0,this.name=t}(0,"Not in a project");return n}();var s,u;s=m.id,u=m,localStorage.setItem(s,JSON.stringify(u)),Object.entries(localStorage).forEach((e=>{r(e)})),p(0),Object.entries(localStorage).forEach((e=>{if("project"==r(e)){let t=document.createElement("div"),n=document.createElement("h3");o.appendChild(t),t.appendChild(n),n.innerHTML=JSON.parse(e[1]).name,n.id=`project-${JSON.parse(e[1]).id}`,n.addEventListener("pointerdown",(()=>{p(1,JSON.parse(e[1]).name)}))}})),e.addEventListener("pointerdown",(()=>{t.showModal()})),n.addEventListener("pointerdown",(()=>{t.close()})),d.addEventListener("pointerdown",(()=>{c(i),function(e){let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("p"),o=document.createElement("input"),c=document.createElement("p"),r=document.createElement("input"),p=document.createElement("p"),m=document.createElement("input"),s=document.createElement("p"),u=document.createElement("select"),h=document.createElement("button");e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(a),e.appendChild(i),t.appendChild(l),t.appendChild(o),n.appendChild(c),n.appendChild(r),d.appendChild(p),d.appendChild(m),a.appendChild(s),a.appendChild(u),i.appendChild(h),l.innerHTML="Title:",c.innerHTML="Description:",p.innerHTML="Due date:",s.innerHTML="In project:",h.innerHTML="ADD TASK",o.type="text",r.type="text",m.type="date",o.placeholder="Task name...",r.placeholder="Describe the task...",h.addEventListener("pointerdown",(()=>{let e=function(){let e=0,t=[];return Object.entries(localStorage).forEach((e=>{t.push(JSON.parse(e[1]).id)})),e=Math.max(...t),e}()+1;var t,n;t=e,n=function(e,t,n,d,a,i){let l=new function(e,t,n,d,a,i){this.id=e,this.title=t,this.description=n,this.dueDate=d,this.inProject=a,this.isDone=i}(e,t,n,d,"projecttest","no");return console.log(l),l}(e,o.value,r.value,m.value),localStorage.setItem(t,JSON.stringify(n))}))}(i)})),a.addEventListener("pointerdown",(()=>{c(i)}))})();