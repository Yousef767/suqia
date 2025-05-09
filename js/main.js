const drop = document.querySelectorAll(".drop");
drop.forEach((e) => {
  e.addEventListener("click", () => {
    drop.forEach((el) => {
      el === e ? el.classList.toggle("active") : el.classList.remove("active");
    });
  });
});
const fullIcon = document.querySelectorAll("#fullIcon");
const darkIcon = document.querySelectorAll("#darkIcon");
fullIcon.forEach((e) => {
  e.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message}`
        );
      });
    } else {
      document.exitFullscreen();
    }
  });
});
const handleTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }
};

window.addEventListener("DOMContentLoaded", handleTheme);

darkIcon.forEach((e) => {
  e.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    handleTheme();
  });
});

const updateTime = () => {
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  if (dateElement && timeElement) {
    const now = new Date();

    const formattedDate = now.toISOString().split("T")[0];

    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    const formattedTime = now.toLocaleString("en-US", options);

    dateElement.innerText = formattedDate;
    timeElement.innerText = formattedTime;
  }
};

setInterval(updateTime, 1000);

updateTime();

let i = document.querySelectorAll(".i");

i.forEach((e) => {
  e.addEventListener("click", () => {
    i.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});

let passowrdsShowIcons = document.querySelectorAll("#passwordShow");
if (passowrdsShowIcons) {
  passowrdsShowIcons.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.classList.toggle("showPassword");
      if (e.parentElement.classList.contains("showPassword")) {
        e.className = "fa-light fa-eye";
        e.previousElementSibling.setAttribute("type", "text");
      } else {
        e.className = "fa-light fa-eye-slash";
        e.previousElementSibling.setAttribute("type", "password");
      }
    });
  });
}
