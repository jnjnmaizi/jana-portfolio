const root=document.documentElement, button=document.getElementById('langToggle');
let lang='en';
function setLanguage(next){lang=next;const arabic=lang==='ar';document.querySelectorAll('.en').forEach(el=>el.style.display=arabic?'none':'');document.querySelectorAll('.ar').forEach(el=>el.style.display=arabic?'':'none');root.lang=lang;root.dir=arabic?'rtl':'ltr';document.body.classList.toggle('rtl',arabic);button.textContent=arabic?'EN':'عربي';button.setAttribute('aria-label',arabic?'Switch to English':'التبديل إلى العربية');}
button.addEventListener('click',()=>setLanguage(lang==='en'?'ar':'en'));setLanguage('en');
