const noBtn = document.querySelector('.js-no-btn');
const yesBtn = document.querySelector('.js-yes-btn');
const questionContainer = document.querySelector('.question-container');
const resultContainer = document.querySelector('.result-container');
const loader = document.querySelector('#loader');

// 1. Make the 'No' button run away
noBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = 'fixed'; // Allows it to move anywhere
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 2. Handle 'Yes' click with heart transition
yesBtn.addEventListener('click', () => {
    questionContainer.style.display = 'none'; // Hide question
    loader.style.display = 'block';           // Show pulsing heart

    setTimeout(() => {
        loader.style.display = 'none';        // Hide heart after 2s
        resultContainer.style.display = 'block'; // Show YEYYY
    }, 2000);
});