let sBtn = document.getElementById("sBtn");
let iBtn = document.getElementById("iBtn");
let statisticsDiv = document.getElementById("statistics");
let informationDiv = document.getElementById("information");

sBtn.addEventListener("click", () => {
  iBtn.classList.remove("active");
  sBtn.classList.add("active");
  informationDiv.style.display = "none";
  statisticsDiv.style.display = "flex";
});
iBtn.addEventListener("click", () => {
  sBtn.classList.remove("active");
  iBtn.classList.add("active");
  statisticsDiv.style.display = "none";
  informationDiv.style.display = "flex";
});
