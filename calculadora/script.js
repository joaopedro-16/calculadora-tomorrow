let campo = document.getElementById("campo")

let num1 = ''
let num2 = ''
let total = 0
let operacao = ''

const keyNum = (num) => campo.value += num

// RECEBE A OPERAÇÃO
function selOperacao(op) {
  operacao = op
  num1 = campo.value
  campo.value = ''
  campo.focus()
}

// RESULTADO E OPERAÇÕES
function resultado() {
  num2 = campo.value
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)
  switch (operacao) {
    case 'soma':
      total = (num1 + num2)
      break;
    case 'sub':
      total = (num1 - num2)
      break;
    case 'mul':
      total = (num1 * num2)
      break;
    case 'div':
      if (num2 === 0) {
        alert('Erro: Divisão por zero')
        campo.value = ''
        campo.focus()
      } else {
        total = num1 / num2;
      }
      break;
  }
  num1 = total
  campo.value = total
  campo.focus()
}

// CLEAR
function clearAll() {
  campo.value = ''
  campo.focus()
}

// APAGAR CARACTERE INDIVIDUALMENTE
const apagar = () => campo.value = campo.value.slice(0, -1)

document.addEventListener('keydown', function (event) {
  const keyMap = {
    '+': 'soma',
    '-': 'sub',
    '/': 'div',
    '*': 'mul',
    'Enter': 'igual',
    'c': 'keyC',
    'C': 'keyC'
  };
  if (keyMap[event.key]) {
    event.preventDefault();
    document.getElementById(keyMap[event.key]).click();
  }
});