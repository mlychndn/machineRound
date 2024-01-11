const arrows = document.querySelectorAll(".arrow");
const contents = document.querySelectorAll(".content");
const accordians = document.querySelectorAll(".accordian");

accordians.forEach((accordian, idx) => {
  accordian.setAttribute("data-index", idx);
});

arrows.forEach(function (arrow) {
  arrow.addEventListener("click", function (e) {
    const targetNodeIndex =
      this.parentNode.parentNode.getAttribute("data-index");

    contents.forEach((content) => {
      if (content.parentNode.dataset.index !== targetNodeIndex) {
        content.classList.remove("active");

        content.parentNode.children[0].children[1].classList.remove(
          "arrow-active"
        );
      }
    });

    for (let node of this.parentNode.parentNode.children) {
      if (node.classList.contains("content")) {
        node.classList.toggle("active");
      }
    }

    this.classList.toggle("arrow-active");
  });
});
