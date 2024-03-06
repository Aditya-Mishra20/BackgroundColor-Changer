const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.style.backgroundColor = "transparent";
  btn.style.padding = "10px";
  btn.style.borderRadius = "5px";
});
document.querySelector("h1").style.fontFamily = "monospace";

let interval;
const startChangingColor = () => {
  const bgChangeColor = () => {
    // #234ACD
    const hex = "0123456789ABCDEFabcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 22)];
      document.body.style.backgroundColor = color;
    }
  };
  if (interval == null) {
    interval = setInterval(bgChangeColor, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(interval);
  interval = null;
};

startbtn.addEventListener("click", startChangingColor);
stopbtn.addEventListener("click", stopChangingColor);
