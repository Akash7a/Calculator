const form = document.querySelector("#submit_btn");
const allButtons = document.querySelectorAll(".buttons");
const resultPanel = document.querySelector("#result_panel");

const createCalculator = () => {
    let currentInput = "";

    const handleButtonClick = (input) => {
        if (input === "C") {
            currentInput = "";
        } else {
            currentInput += input;
        }
        return currentInput;
    }

    const evalute = () => {
        try {
            currentInput = eval(currentInput + "");
        } catch (error) {
            currentInput = `Error : ${error}`;
        }
        return currentInput;
    }

    return {
        handleButtonClick,
        evalute,
    }
}

const calclutor = createCalculator();

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.textContent;
        resultPanel.value = calclutor.handleButtonClick(buttonText);
    })
});

form.addEventListener("click",()=>{
    resultPanel.value  = calclutor.evalute();
});

document.querySelector("#calculator-form").addEventListener("submit", (e) => {
    e.preventDefault();
});