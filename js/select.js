let selects = document.querySelectorAll('select');
selects.forEach(e => {
  e.addEventListener('input',()=>{
    if(e.value !== '0'){
      e.style.color="#0177BF";
    }else{
      e.style.color="#757a89";
    }
  })
  e.addEventListener('focus',()=>{
    e.parentElement.classList.add('activeSelect');
  })
  e.addEventListener('blur',()=>{
    e.parentElement.classList.remove('activeSelect');
  })
});
