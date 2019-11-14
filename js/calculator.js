const DISPLAY = document.querySelector("#display");
const OPERATIONS = "+-*/";
const DIGITS = "0123456789";

var first = '';
var second = '';
var operation = '';

function init() {
  document.querySelectorAll(".content a").forEach(
    function (item) {
      let content = item.innerHTML;
      console.log("" + content);
      if (OPERATIONS.includes(content)) {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          onClickOperand(content);
        }, false);
      } else if (DIGITS.includes(content)) {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          onClickDigit(content);
        }, false);
      } else if (content == '=') {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          calculate()
        }, false)
      } else if (content == 'C') {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          clear()
        }, false)
      }
    }
  )
}

function onClickDigit(digit) {
  if (operation == '') {
    first += digit;
  } else {
    second += digit;
  }
  display();
}

function onClickOperand(value) {
  if (operation != '') {
    calculate();
  }
  operation = value;
}

function clear() {
  operation = '';
  second = '';
  first = '';
  display();
}

function calculate() {
  let result = 0;
  switch (operation) {
    case '+':
      result = parseInt(first) + parseInt(second);
      break;
    case '-':
      result = parseInt(first) - parseInt(second);
      break;
    case '*':
      result = parseInt(first) * parseInt(second);
      break;
    case '/':
      result = parseInt(first) / parseInt(second);
      break;
    default:
      return;
  }
  operation = '';
  second = '';
  first = result.toString();
  display();
}

function display() {
  let current = second != '' ? second : first;
  DISPLAY.innerHTML = current != '' ? current : '0';
}

init();
