let flag = true;
let showStars = "";
let popup = false;

function createAnyElement(element) {
  return document.createElement(element);
}
function paintUi() {
  console.log("this function is getting called!");
  const header = createAnyElement("h1");
  const headerDiv = createAnyElement("div");
  const mainContainer = createAnyElement("div");
  const divEl = createAnyElement("div");
  const button = createAnyElement("button");

  console.log("button", button);

  mainContainer.classList.add("star-container");
  header.classList.add("start-title");

  header.innerText = "Star Rating";
  const fiveStarArr = new Array(5).fill("1");

  fiveStarArr.forEach((el, idx) => {
    const image = document.createElement("img");
    image.setAttribute("src", "./star.png");
    image.setAttribute("alt", "star image");
    image.setAttribute("class", "star");
    image.setAttribute("id", idx + 1);
    divEl.appendChild(image);
  });

  button.setAttribute("class", "btn show");
  button.innerText = "submit";

  divEl.appendChild(button);
  headerDiv.classList.add("star-header-container");
  headerDiv.appendChild(header);
  mainContainer.appendChild(headerDiv);
  mainContainer.appendChild(divEl);
  document.body.appendChild(mainContainer);
}

paintUi();

function showPopup() {
  const popupContainer = createAnyElement("div");
  const feedback = createAnyElement("p");
  const closeButton = createAnyElement("button");
  feedback.classList.add("popup-feedback");
  closeButton.classList.add("popup-close");
  feedback.innerText = "Thank you for your feedback";
  closeButton.innerText = "close";
  popupContainer.appendChild(feedback);
  popupContainer.classList.add("popup");
  document
    .querySelector("body")
    .appendChild(popupContainer)
    .appendChild(closeButton);
}

const imageNodes = document.querySelectorAll(".star");
const handleMouseOutEvent = (event) => {
  if (!flag) return;
  const id = event.target.getAttribute("id");
  for (let i = 1; i <= id; i++) {
    document.getElementById(i).setAttribute("src", "./star.png");
  }
};

const handleMouseOverEvent = (event) => {
  if (!flag) return;
  const id = event.target.getAttribute("id");
  for (let i = 1; i <= id; i++) {
    document.getElementById(i).setAttribute("src", "./yellow.png");
  }
};
imageNodes.forEach((image) => {
  image.addEventListener("mouseover", handleMouseOverEvent);

  image.addEventListener("mouseout", handleMouseOutEvent);

  image.addEventListener("click", (event) => {
    flag = false;

    if (popup) return;

    const id = event.target.getAttribute("id");
    showStars = id;

    button.classList.remove("show");

    for (let i = 1; i <= 5; i++) {
      if (i <= id) {
        document.getElementById(i).setAttribute("src", "./yellow.png");
      } else {
        document.getElementById(i).setAttribute("src", "./star.png");
      }
    }
  });
});

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  if (showStars) {
    showPopup();
    document.querySelector(".star-container").classList.add("blur");
    popup = true;
  }

  const closeButton = document.querySelector(".popup-close");

  closeButton.addEventListener("click", () => {
    console.log("clicked!!!");
    document.querySelector("body").innerHTML = "";
    paintUi();
  });
});
