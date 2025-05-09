let input = document.getElementById("file");
let label = document.getElementById("lbl");

input.addEventListener('input',()=>{
  label.innerHTML = input.files[0].name;
})




