for (let i = 0; i < listOfButtons.length; i++) {
  const button = listOfButtons[i];
  const card = listOfCards[i];
  button.addEventListener('click', () => {
    if (button.textContent === 'Show Answer') {
      button.textContent = 'Hide Answer';
    } else {
      button.textContent = 'Show Answer';
    }
    button.classList.toggle('quiz-card__button--toggled');
    card.classList.toggle('quiz-card--opened');
  });
}
