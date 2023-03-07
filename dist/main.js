(()=>{"use strict";let e=document.getElementById("planning-add-button"),t=document.getElementById("add-dialog-open"),n=document.getElementById("add-dialog-close"),d=document.getElementById("add-modal-task"),a=document.getElementById("add-modal-project"),i=document.getElementById("modal-content-form"),c=document.getElementById("all-tasks"),l=document.getElementById("planning-projects-list"),r=document.getElementById("planning-home-h3");function o(e,t){let n=new function(e,t){this.id=e,this.name=t}(e,t);return n}function p(e,t){localStorage.setItem(e,JSON.stringify(t))}function s(e){e.close()}function m(e){e.innerHTML=""}function u(e,t){localStorage.setItem(e,JSON.stringify(t))}function h(e,t,n,d,a,i){let c=new function(e,t,n,d,a,i){this.id=e,this.title=t,this.description=n,this.dueDate=d,this.inProject=a,this.isDone=i}(e,t,n,d,a,i);return c}function E(){let e=0,t=[];return Object.entries(localStorage).forEach((e=>{t.push(JSON.parse(e[1]).id)})),e=Math.max(...t),e}function L(e){let t="";return t=JSON.parse(e[1]).hasOwnProperty("name")?"project":"task",t}function C(){Object.entries(localStorage).forEach((e=>{if("project"==L(e)){let t=document.createElement("div"),n=document.createElement("h3"),d=document.createElement("i");1!=JSON.parse(e[0])&&(l.appendChild(t),t.appendChild(n)),JSON.parse(e[1]).id>1&&t.appendChild(d),n.innerHTML=JSON.parse(e[1]).name,t.classList.add("project-container"),n.id=`project-${JSON.parse(e[1]).id}`,d.id=`project-delete-${JSON.parse(e[1]).id}`,d.classList.add("fa-solid"),d.classList.add("fa-trash-can"),n.addEventListener("pointerdown",(()=>{localStorage.setItem(1,e[1]),O(1,JSON.parse(e[1]).name)})),d.addEventListener("pointerdown",(()=>{!function(e){"project"==L(e)&&(localStorage.removeItem(JSON.parse(e[1]).id),l.innerHTML="",C())}(e)}))}}))}function v(e){let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),p=document.createElement("input"),s=document.createElement("p"),m=document.createElement("button"),E=document.createElement("p"),C=document.createElement("i"),v=document.createElement("dialog"),S=document.createElement("dialog");c.appendChild(t),t.appendChild(n),t.appendChild(d),n.appendChild(a),n.appendChild(i),d.appendChild(l),d.appendChild(r),d.appendChild(o),a.appendChild(p),i.appendChild(s),l.appendChild(m),l.appendChild(v),r.appendChild(E),o.appendChild(C),s.innerHTML=JSON.parse(e[1]).title,m.innerHTML="DETAILS",E.innerHTML=JSON.parse(e[1]).dueDate,p.id=`checkbox-${JSON.parse(e[1]).id}`,s.id=`title-${JSON.parse(e[1]).id}`,m.id=`details-${JSON.parse(e[1]).id}`,E.id=`duedate-${JSON.parse(e[1]).id}`,C.id=`delete-${JSON.parse(e[1]).id}`,v.id=`details-dialog-${JSON.parse(e[1]).id}`,S.id=`delete-dialog-${JSON.parse(e[1]).id}`,p.type="checkbox",C.classList.add("fa-solid"),C.classList.add("fa-trash-can"),t.classList.add("item-container"),n.classList.add("left-container"),d.classList.add("right-container"),a.classList.add("checkbox-container"),i.classList.add("title-container"),l.classList.add("details-container"),r.classList.add("duedate-container"),o.classList.add("delete-container"),p.classList.add("item-element"),s.classList.add("item-element"),m.classList.add("item-element"),E.classList.add("item-element"),C.classList.add("item-element"),"yes"==JSON.parse(e[1]).isDone?p.checked=!0:p.checked=!1,p.addEventListener("change",(()=>{let t="";t=p.checked?"checked":"unchecked",function(e,t){let n=JSON.parse(e[1]).id,d="";d="checked"==t?"yes":"no",u(n,h(n,JSON.parse(e[1]).title,JSON.parse(e[1]).description,JSON.parse(e[1]).dueDate,JSON.parse(e[1]).inProject,d))}(e,t)})),m.addEventListener("pointerdown",(()=>{!function(e){let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),p=document.createElement("div"),s=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div"),h=document.createElement("div"),E=document.getElementById(`details-dialog-${JSON.parse(e[1]).id}`);E.innerHTML="";let L=document.createElement("p"),C=document.createElement("p"),v=document.createElement("p"),S=document.createElement("p"),O=document.createElement("p"),g=document.createElement("p"),f=document.createElement("p"),N=document.createElement("p"),J=document.createElement("p");E.appendChild(t),t.appendChild(n),t.appendChild(d),E.appendChild(a),a.appendChild(i),a.appendChild(c),i.appendChild(r),i.appendChild(o),i.appendChild(p),c.appendChild(s),c.appendChild(m),c.appendChild(u),c.appendChild(h),n.appendChild(s),d.appendChild(J),l.appendChild(L),r.appendChild(C),o.appendChild(v),p.appendChild(S),s.appendChild(O),m.appendChild(g),u.appendChild(f),h.appendChild(N),O.innerHTML="Title:",J.innerHTML="X",C.innerHTML="Description:",v.innerHTML="In project:",S.innerHTML="Due date:",O.innerHTML=`${JSON.parse(e[1]).title}`,g.innerHTML=`${JSON.parse(e[1]).description}`,f.innerHTML=`${JSON.parse(e[1]).inProject}`,N.innerHTML=`${JSON.parse(e[1]).dueDate}`,J.addEventListener("pointerdown",(()=>{E.close()})),t.classList.add("details-dialog-header-container"),a.classList.add("details-dialog-info-container"),i.classList.add("details-dialog-info-left-container"),c.classList.add("details-dialog-info-right-container"),E.showModal()}(e)})),o.addEventListener("pointerdown",(()=>{!function(e){"task"==L(e)&&(localStorage.removeItem(JSON.parse(e[1]).id),c.innerHTML="",O(1,JSON.parse(e[1]).inProject))}(e),O(0)}))}function S(){c.innerHTML=""}function O(e,t){0==e?(S(),Object.entries(localStorage).forEach((e=>{"task"==L(e)&&v(e)}))):(S(),Object.entries(localStorage).forEach((e=>{"task"==L(e)&&JSON.parse(e[1]).inProject==t&&v(e)})))}let g=o(0,"Not in a project");p(g.id,g);let f=o(1,"selected-project");p(f.id,f),O(0),C(),r.addEventListener("pointerdown",(()=>{O(0),localStorage.setItem(1,JSON.stringify(f))})),e.addEventListener("pointerdown",(()=>{t.showModal()})),n.addEventListener("pointerdown",(()=>{s(t)})),d.addEventListener("pointerdown",(()=>{m(i),function(e){let n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div"),r=document.createElement("p"),o=document.createElement("input"),p=document.createElement("p"),m=document.createElement("input"),C=document.createElement("p"),v=document.createElement("input"),S=document.createElement("p"),g=document.createElement("select"),f=document.createElement("button");e.appendChild(n),e.appendChild(d),e.appendChild(a),e.appendChild(i),e.appendChild(l),n.appendChild(r),n.appendChild(o),d.appendChild(p),d.appendChild(m),a.appendChild(C),a.appendChild(v),i.appendChild(S),i.appendChild(g),l.appendChild(f),r.innerHTML="Title:",p.innerHTML="Description:",C.innerHTML="Due date:",S.innerHTML="In project:",f.innerHTML="ADD TASK",o.type="text",m.type="text",v.type="date",o.placeholder="Task name...",m.placeholder="Describe the task...",Object.entries(localStorage).forEach((e=>{if("project"==L(e)){let t=document.createElement("option");t.innerHTML=JSON.parse(e[1]).name,"selected-project"!=JSON.parse(e[1]).name&&g.add(t)}})),f.addEventListener("pointerdown",(()=>{let e=E()+1;u(e,h(e,o.value,m.value,v.value,g.value,"no")),s(t),c.innerHTML="",O(0)}))}(i)})),a.addEventListener("pointerdown",(()=>{m(i),function(e){let n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("p"),i=document.createElement("input"),c=document.createElement("button");e.appendChild(n),e.appendChild(d),n.appendChild(a),n.appendChild(i),d.appendChild(c),a.innerHTML="Project name:",c.innerHTML="ADD PROJECT",i.type="text",i.placeholder="Name your project...",c.addEventListener("pointerdown",(()=>{let e=E()+1;p(e,o(e,i.value)),s(t),l.innerHTML="",C()}))}(i)}))})();