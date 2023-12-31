const popover = document.querySelector(".popover");

popover.addEventListener("click", () => {
  const showDiv = document.querySelector(".show");
  showDiv.classList.toggle("not-show");
});
