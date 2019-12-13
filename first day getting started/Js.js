const button = document.querySelector("button");
const popup = document.querySelector(".popup-wraper");
var status = false;
button.addEventListener("click", () => {
  if (status == false) {
    popup.style.display = "block";
    status = true;
    debugger;
  } else {
    popup.style.display = "none";
    status = false;
  }
});
