const outputParagraphe = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraphe.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraphe.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = document.querySelector("#randomInt");
const buttonRndRange = document.querySelector("#randomRange");

buttonRndInt.addEventListener('click', outputRandomInt);

buttonRndRange.addEventListener('click', outputRandomRange);