let showPopUp = document.querySelectorAll("#show-popUp");
let popUp = document.getElementById("popUp");
let closeBtn = document.querySelectorAll("#close");

showPopUp.forEach((e) => {
  e.addEventListener("click", () => {
    popUp.style.display = "flex";
    let input = document.querySelector("#popUp .form input");
    if (input) {
      input.focus();
    }
  });
});

closeBtn.forEach((e) => {
  e.addEventListener("click", () => {
    popUp.style.display = "none";
  });
});

popUp.addEventListener("click", (e) => {
  if (e.target.classList.contains("popUp")) {
    popUp.style.display = "none";
  }
});


// let showPopUpBtns = document.querySelectorAll('#show-popUp');
// let raw = document.querySelectorAll('#dRa');
// showPopUpBtns.forEach((e)=>{
//   e.addEventListener('click',()=>{
//     let list = e.closest('tr').querySelectorAll('td');
//     raw.forEach((e,i)=>{
//       e.innerHTML = list[i].innerHTML;
//     })
//   })
// })
