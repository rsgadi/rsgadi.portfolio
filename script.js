const modal=document.querySelector('#modal');
const modalContent=document.querySelector('#modalContent');
const closeModal=()=>{if(modal.open)modal.close();modalContent.innerHTML='';};
document.querySelector('#modalClose').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
const certs={
 nus:{title:'AI-Powered Business Analytics (Advanced)',src:'assets/certificates/nus-ai-business-analytics.png',type:'image'},
 cornell:{title:'Mahindra University Immersion — Cornell University / eCornell',src:'assets/certificates/cornell-mahindra-immersion.png',type:'image'},
 sql:{title:'SQL for Data Science — UC Davis',src:'assets/certificates/uc-davis-sql-for-data-science.pdf',type:'pdf'},
 aws:{title:'AWS Academy Graduate — Cloud Foundations',src:'assets/certificates/aws-academy-cloud-foundations.pdf',type:'pdf'}
};
function openCert(key){const c=certs[key];if(!c)return;modalContent.innerHTML=`<h2>${c.title}</h2>${c.type==='image'?`<img src="${c.src}" alt="${c.title}">`:`<iframe title="${c.title}" src="${c.src}"></iframe>`}<p><a class="inline-link" href="${c.src}" target="_blank" rel="noreferrer">Open file in a new tab ↗</a></p>`;modal.showModal();}
document.querySelectorAll('[data-cert]').forEach(el=>el.addEventListener('click',()=>openCert(el.dataset.cert)));
const cafeButton=document.querySelector('[data-detail="cafe"]');
if(cafeButton)cafeButton.addEventListener('click',()=>{modalContent.innerHTML=`<div class="modal-case"><span class="section-kicker">CAPSTONE · PRODUCT & SYSTEMS</span><h2>Cafe Adda Buzzer System</h2><p>A campus café queue problem, addressed with a web-based token notification tool and physical queue improvements.</p><h3>The problem</h3><p>Student research and conversations with café management highlighted bottlenecks during busy periods.</p><h3>The response</h3><p>The team designed and deployed a web-based token notification app, supported by queue and signage changes.</p><div class="project-links"><a class="inline-link" href="https://rsgadi.github.io/cafe-adda/" target="_blank" rel="noreferrer">Open live app ↗</a><a class="inline-link" href="assets/reports/cafe-adda-capstone-report.pdf" target="_blank" rel="noreferrer">Read final report ↗</a></div></div>`;modal.showModal();});
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===btn));const f=btn.dataset.filter;document.querySelectorAll('.project').forEach(card=>card.hidden=f!=='all'&&card.dataset.category!==f);}));
const menu=document.querySelector('#menuToggle'),links=document.querySelector('#navLinks');
if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));}
const bar=document.querySelector('#progress');window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;if(bar)bar.style.width=(max?scrollY/max*100:0)+'%';},{passive:true});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
