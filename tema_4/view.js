const calculatorView = {
    expressionElement: null,
    resultElement: null,

    init() {
        this.expressionElement = document.getElementById('expression');
        this.resultElement = document.getElementById('result');
    },

    render(model) {
        const expression = model.currentExpression || '0';
        const result = model.displayValue || '0';

        this.expressionElement.textContent = expression;
        this.resultElement.textContent = result;

        if (model.error) {
            this.resultElement.classList.add('error');
        } else {
            this.resultElement.classList.remove('error');
        }
    }
};
