const buttonMain = document.querySelector(".container");

const btns = document.querySelectorAll("button");
for (const btn of btns) {
  btn.addEventListener("click", ({ target: { dataset } }) => {
    buttonMain.style.flexDirection = dataset.direction;
  });
}
