let moon = "🌙",
  sun = "☀️";
const d = document;
let style = d.createElement("style");
style.innerHTML = `
body,html{
    background-color: white;
    color: rgb(54, 54, 54);
}
.main p,
.about h2, a, a:visited{
  color: #523365;
}
.my_name,
.bigbbadbear {
  color: black;
}
.nav__list li {
    border-color: #523365;
}

`;

const darkbutton = d.getElementById("darkmode");

darkbutton.addEventListener("click", () => {
  if (darkbutton.innerHTML == moon) {
    d.head.appendChild(style);
    darkbutton.innerHTML = sun;
  } else {
    d.head.removeChild(style);
    darkbutton.innerHTML = moon;
  }
});
