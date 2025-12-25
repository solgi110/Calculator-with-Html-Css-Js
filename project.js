
 class Calculator {

  constructor(currentOprandElement, previousOperandElement) {
    this.currentOprandElement = currentOprandElement;
    this.previousOperandElement = previousOperandElement
    this.curentElement = "";
  }

  clear() {
    this.curentElement = "";
    this.previusElement = "";

  }
  delete() {
    this.curentElement = this.curentElement.toString().slice(0, -1)
  }

  igual() {
    let comparation = null;
    const prev = parseFloat(this.previusElement);
    const current = parseFloat(this.curentElement);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.opra) {

      case "+":
        comparation = prev + current

        break;

      case "-":
        comparation = prev - current;

        break;

      case "*":
        comparation = prev * current;

        break;

      case "/":
        comparation = prev / current;

        break

    }
    this.curentElement = comparation;
    this.previusElement = "";
  }

  rechnen(opra) {

    if (this.curentElement === "") return;
    if (this.previusElement !== "") {
      this.igual()
    }

    this.opra = opra;
    this.previusElement = this.curentElement + this.opra;
    this.curentElement = ""

  }

  sendingNumber(value) {
    if (this.curentElement.toString().includes('.') && value === '.') return;
    this.curentElement = this.curentElement.toString() + value.toString()
  }

  setAllItem() {
    this.currentOprandElement.textContent = this.curentElement;
    this.previousOperandElement.textContent = this.previusElement;
  }
}

const buttons = document.querySelectorAll('.btn')
const currentOprandElement = document.querySelector('.current-operand')
const previousOperandElement = document.querySelector('.previous-operand')


buttons.forEach((btns) => {

  btns.addEventListener('click', (e) => {

    const value = e.currentTarget.dataset.btn
    checkNumber(value)
  })

})

const checkNumber = (value) => {
  // console.log(value);
  switch (value) {

    case "/":
    case "*":
    case "-":
    case "+":

      calculator.rechnen(value)

      break;

    case "de":

      calculator.delete()

      break;

    case "c":
      calculator.clear()

      break;

    case "=":

      calculator.igual()

      break;

    default:
      calculator.sendingNumber(value);

      break
  }

  calculator.setAllItem()

}

const calculator = new Calculator(currentOprandElement, previousOperandElement)





