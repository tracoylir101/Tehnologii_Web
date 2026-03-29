const calculatorController = {
    init() {
        calculatorView.init();
        calculatorModel.reset();
        calculatorView.render(calculatorModel);

        const buttons = document.querySelector('.buttons');
        buttons.addEventListener('click', (event) => this.handleClick(event));
    },

    handleClick(event) {
        const button = event.target.closest('button');
        if (!button) {
            return;
        }

        const action = button.dataset.action;
        const value = button.dataset.value;

        switch (action) {
            case 'digit':
                calculatorModel.appendDigit(value);
                break;
            case 'operator':
                calculatorModel.chooseOperator(value);
                break;
            case 'equals':
                calculatorModel.evaluate();
                break;
            case 'clear':
                calculatorModel.reset();
                break;
            default:
                return;
        }

        calculatorView.render(calculatorModel);
    }
};

window.addEventListener('DOMContentLoaded', () => calculatorController.init());
