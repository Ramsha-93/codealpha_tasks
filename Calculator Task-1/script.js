let currentOperand = '0';
let previousOperand = '';
let operation = null;

const currentOperandText = document.getElementById('current-operand');
const previousOperandText = document.getElementById('previous-operand');

function updateDisplay() {
  currentOperandText.innerText = currentOperand;
  if (operation != null) {
    previousOperandText.innerText = `${previousOperand} ${operation}`;
  } else {
    previousOperandText.innerText = '';
  }
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  if (currentOperand === '0' && number !== '.') {
    currentOperand = number;
  } else {
    currentOperand += number;
  }
  updateDisplay();
}

function chooseOperator(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
  updateDisplay();
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '×':
      computation = prev * current;
      break;
    case '÷':
      if (current === 0) {
        alert("Cannot divide by zero!");
        clearDisplay();
        return;
      }
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = String(parseFloat(computation.toFixed(8))); // Limits precision issues
  operation = null;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '0';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function deleteNumber() {
  if (currentOperand.length === 1 || currentOperand === '0') {
    currentOperand = '0';
  } else {
    currentOperand = currentOperand.slice(0, -1);
  }
  updateDisplay();
}

// Support for keyboard input
window.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
  if (e.key === '.') appendNumber('.');
  if (e.key === '+') chooseOperator('+');
  if (e.key === '-') chooseOperator('-');
  if (e.key === '*') chooseOperator('×');
  if (e.key === '/') chooseOperator('÷');
  if (e.key === 'Enter' || e.key === '=') compute();
  if (e.key === 'Backspace') deleteNumber();
  if (e.key === 'Escape') clearDisplay();
});