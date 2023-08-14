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
        if(this.secondOperand === '') 
            return;

        if(this.firstOperand !== '')
            this.calculate();

        this.operator = operator;
        this.firstOperand = this.secondOperand;
        this.secondOperand = '';
    }

    calculate()
    {
        let result = '';
        const first = parseFloat(this.firstOperand);
        const second = parseFloat(this.secondOperand);

        if(isNaN(first) || isNaN(second))
            return;

        switch(this.operator)
        {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '÷':
                if(second == 0.0) 
                    result = 'NAN';
                else
                    result = first / second;
                break;
            default:
                return;
        }

        this.secondOperand = result;
        this.operator = undefined;
        this.firstOperand = '';
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
    num.addEventListener('click', () => {
        myCalculator.appendNum(num.innerText);
        myCalculator.updateScreen();
    });
});

operatorBtns.forEach(op => {
    op.addEventListener('click', () => {
        myCalculator.pickOperator(op.innerText);
        myCalculator.updateScreen();
    });
});

equalBtn.addEventListener('click', btn => {
    myCalculator.calculate();
    myCalculator.updateScreen();
});
