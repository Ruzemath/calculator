class Calculator
{
    constructor(firstOperandData, secondOperandData)
    {
        this.firstOperandData = firstOperandData;
        this.secondOperandData = secondOperandData;
        this.clearAll();
    }

    clearAll()
    {
        this.firstOperand = '';
        this.secondOperand = '';
        this.operator = undefined;
    }

    delete()
    {

    }

    appendNum(number)
    {
        if(number === '.' && this.secondOperand.includes('.')) 
            return;
        this.secondOperand = this.secondOperand.toString() + number.toString();
    }

    pickOperator(operator)
    {
        if(this.secondOperand === "") 
            return;
        
        if(this.firstOperand !== "")
            this.calculate();

        this.operator = operator;
        this.firstOperand = this.secondOperand;
        this.secondOperand = '';
    }

    calculate()
    {

    }

    updateScreen()
    {
        this.secondOperandData.innerText = this.secondOperand;
        this.firstOperandData.innerText = this.firstOperand;
    }
}


const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');
const firstOperandData = document.querySelector('.first-operand');
const secondOperandData = document.querySelector('.second-operand');

const myCalculator = new Calculator(firstOperandData, secondOperandData);

numberBtns.forEach(num => {
    num.addEventListener("click", () => {
        myCalculator.appendNum(num.innerText);
        myCalculator.updateScreen();
    });
});

operatorBtns.forEach(op => {
    op.addEventListener("click", () => {
        myCalculator.pickOperator(op.innerText);
        myCalculator.updateScreen();
    });
});

