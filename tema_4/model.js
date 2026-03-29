const calculatorModel = {
    operand1: null,
    operand2: null,
    operator: null,
    displayValue: '0',
    currentExpression: '0',
    error: null,

    reset() {
        this.operand1 = null;
        this.operand2 = null;
        this.operator = null;
        this.displayValue = '0';
        this.currentExpression = '0';
        this.error = null;
    },

    appendDigit(digit) {
        if (this.error) {
            this.reset();
        }

        if (this.operator === null) {
            if (this.operand1 === null || this.operand1 === '0') {
                this.operand1 = digit;
            } else {
                this.operand1 += digit;
            }
            this.displayValue = this.operand1;
        } else {
            if (this.operand2 === null || this.operand2 === '0') {
                this.operand2 = digit;
            } else {
                this.operand2 += digit;
            }
            this.displayValue = this.operand2;
        }

        this.updateExpression();
    },

    chooseOperator(operator) {
        if (this.error) {
            this.reset();
        }

        if (this.operand1 === null) {
            this.operand1 = '0';
        }

        if (this.operator !== null && this.operand2 !== null) {
            this.evaluate();
            if (this.error) {
                return;
            }
        }

        this.operator = operator;
        this.displayValue = operator;
        this.updateExpression();
    },

    evaluate() {
        if (this.operator === null || this.operand2 === null) {
            return;
        }

        const a = parseFloat(this.operand1);
        const b = parseFloat(this.operand2);
        let result;

        switch (this.operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                if (b === 0) {
                    this.error = 'Impartire la zero';
                    this.displayValue = 'Eroare';
                    this.currentExpression = `${this.operand1} / ${this.operand2}`;
                    return;
                }
                result = a / b;
                break;
            default:
                this.error = 'Operator invalid';
                this.displayValue = 'Eroare';
                return;
        }

        if (!Number.isFinite(result)) {
            this.error = 'Rezultat invalid';
            this.displayValue = 'Eroare';
            this.currentExpression = `${this.operand1} ${this.operator} ${this.operand2}`;
            return;
        }

        const normalized = String(result).replace(/\.0+$/, '');
        this.operand1 = normalized;
        this.operand2 = null;
        this.operator = null;
        this.displayValue = normalized;
        this.currentExpression = normalized;
        this.error = null;
    },

    updateExpression() {
        if (this.operator === null) {
            this.currentExpression = this.operand1 || '0';
        } else {
            const right = this.operand2 === null ? '' : this.operand2;
            this.currentExpression = `${this.operand1 || '0'} ${this.operator} ${right}`.trim();
        }
    }
};
