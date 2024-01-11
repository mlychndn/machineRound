const calcKeyboard = document.querySelector(".calc-operation");
let textArea = document.querySelector(".display").value;
const calcDisplay = document.querySelector(".display");
calcKeyboard.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("cal-item") ||
    e.target.classList.contains("item-equal")
  ) {
    document.querySelector(".display").style.color = "#fff";

    let opeartionalArr = ["%", "/", "*", "-", "+", "="];

    // user story 1
    if (e.target.innerText === "C") {
      document.querySelector(".display").value = "";
      textArea = "";
      return;
    }

    // user story 2
    if (!textArea) {
      const foundValue = opeartionalArr.find((el) => el === e.target.innerText);
      if (foundValue) {
        document.querySelector(".display").value = "Learn Math!";
        document.querySelector(".display").style.color = "red";
        textArea = "";
        return;
      }
    }

    //user story 3

    if (e.target.innerText === "<") {
      let textAreaArr = textArea.split("");
      textAreaArr.pop();
      textArea = textAreaArr.join("");
      document.querySelector(".display").value = textArea;
      return;
    }

    //user Story 4

    if (e.target.innerText === "=") {
      console.log("equal to is clicked!");
      const result = eval(textArea);
      document.querySelector(".display").value = result;
      return;
    }

    textArea += e.target.innerText;
    document.querySelector(".display").value = textArea;
  }
});

calcDisplay.addEventListener("keydown", function (e) {
  try {
    let inputValue = e.target.value;

    if (e.key === "=" || e.key === "Enter") {
      if (inputValue === "") return;
      let value = eval(inputValue);

      document.querySelector(".display").value = "";
      this.value = value;

      return;
    }
  } catch (err) {
    console.log(err.message);
  }
});
