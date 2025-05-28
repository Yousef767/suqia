const message = (message, isError) => {
  const div = document.createElement("div");
  div.className = isError ? "message errorMessage" : "message";
  const span = document.createElement("span");
  const i = document.createElement("i");
  i.className = isError
    ? "fa-regular fa-circle-x"
    : "fa-regular fa-circle-check";
  span.innerHTML = message;
  document.body.appendChild(div);
  div.appendChild(span);
  span.appendChild(i);
  setTimeout(() => {
    div.remove();
  }, 3000);
};
function toggleFilter(id) {
  const el = document.getElementById(id);
  el.parentElement.classList.toggle("active");
}

let menuBtn = document.getElementById("menu");
let dcont = document.querySelector(".dcont");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    dcont.classList.toggle("showNavLinks");
  });
}

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
        message("وضع ملء الشاشة غير متاح علي لهذا الجهاز", true);
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
    darkIcon.forEach((e) => {
      e.classList.add("active");
    });
  } else {
    document.body.className = "light";
    darkIcon.forEach((e) => {
      e.classList.remove("active");
    });
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

const search = document.getElementById("search");
const searchInput = document.querySelector("#search input");
if (search) {
  search.addEventListener("click", () => {
    search.classList.add("active");
    searchInput.focus();
  });
  searchInput.addEventListener("blur", () => {
    search.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".select2");

  selects.forEach((select) => {
    const selectedOption = select.querySelector(".selected-option");
    const customMenu = select.querySelector(".custom-menu");
    const input = select.querySelector("input");

    select.addEventListener("click", () => {
      select.classList.toggle("active");
    });

    customMenu.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", (e) => {
        const value = item.dataset.value;
        const text = item.textContent.trim();
        selectedOption.textContent = text;
        input.value = value;
        setTimeout(() => {
          customMenu.classList.remove("active");
          select.classList.remove("active");
        }, 100);
      });
    });

    document.addEventListener("click", (e) => {
      if (!select.contains(e.target)) {
        customMenu.classList.remove("active");
        select.classList.remove("active");
      }
    });
  });
});

// let i = document.querySelectorAll(".i");

// i.forEach((e) => {
//   e.addEventListener("click", () => {
//     i.forEach((e) => {
//       e.classList.remove("active");
//     });
//     e.classList.add("active");
//   });
// });

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
