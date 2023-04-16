// nav bar rules
let navbar = document.getElementById("nav");
let links = document.getElementsByClassName("links");
let extantion = document.getElementsByClassName("extantion")[0];
let list_extantion = document.getElementsByClassName("list")[0];

window.onscroll = function () {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "rgba(4, 9, 30, 0.9)";
    navbar.style.top = "-10px";
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "#fff";
      links[i].style.textShadow = "5px 5px 20px #fff";
    }
  } else {
    navbar.style.backgroundColor = rgba(0, 0, 0, 0.623);
    for (var i = 0; i < links.length; i++) {
      //   links[i].style.color = "#222";
      links[i].style.textShadow = "5px 5px 5px blue";
    }
  }
};
list_extantion.onclick = function () {
  if (extantion.style.display == "none") {
    extantion.style.display = "block";
  } else {
    extantion.style.display = "none";
  }
};
// question rules
let answers = document.querySelectorAll(".accordion");
let layout = document.querySelector(".layout");
let footer = document.querySelector(".footer");

for (var i = 0; i < answers.length; i++) {
  answers[i].onclick = function () {
    if (layout.style.height == "600px") {
      layout.style.height = "500px";
      footer.style.top = "65.4%";
    } else {
      layout.style.height = "600px";
      footer.style.top = "64.3%";
    }
  };
}
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});
