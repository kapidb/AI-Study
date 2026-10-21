const search=document.querySelector('#search');
if(search)search.addEventListener('input',()=>{const q=search.value.trim().toLocaleLowerCase();let found=0;document.querySelectorAll('.library-card').forEach(card=>{const match=(card.textContent+' '+card.dataset.search).toLocaleLowerCase().includes(q);card.hidden=!match;if(match)found++;});document.querySelector('#empty').hidden=found>0;});
