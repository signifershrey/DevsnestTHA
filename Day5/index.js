let value1 = document.querySelector("#val1");
let value2 = document.querySelector("#val2");
let result = document.querySelector("#result");
let operation = document.querySelector(".operations")


operation.addEventListener("click", doTask)

function doTask(event) {
    if (!value1.value || !value2.value) {
        alert("Fill the Correct Values");
        return;
    }
    
    switch (event.target.innerText) {
      case "+":
        ans(parseInt(value1.value) + parseInt(value2.value));
        break;
      case "-":
        ans(value1.value - value2.value);
        break;
      case "*":
        ans(value1.value * value2.value);
        break;
      case "/":
        ans(value1.value / value2.value);
        break;
    }
}


function ans(res) {
    result.innerHTML ="Ans: " + res ;
}