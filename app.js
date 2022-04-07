function handleclick(event) {
  const choiceMap = { 1: "rock", 2: "paper", 3: "scissors" };
  const resultMap = {
    1: "You won",
    2: "Computer won",
  };
  let userchoice = event.target.id;
  let compchoice = event.target.id;
  let result = "";
  let userchoiceEle = document.querySelector("#userchoice");
  let compchoiceEle = document.querySelector("#compchoice");
  let resultEle = document.querySelector("#result");
  userchoiceEle.textContent = userchoice;
  while (userchoice === compchoice) {
    compchoice = choiceMap[Math.ceil(Math.random() * 3)];
  }
  compchoiceEle.textContent = compchoice;

  if (userchoice === "rock") {
    if (compchoice === "paper") {
      result = 2;
    } else {
      result = 1;
    }
  } else if (userchoice === "paper") {
    if (compchoice === "rock") {
      result = 1;
    } else {
      result = 2;
    }
  } else if (userchoice === "scissors") {
    if (compchoice === "rock") {
      result = 2;
    } else {
      result = 1;
    }
  }
  resultEle.innerHTML = resultMap[result];
}
