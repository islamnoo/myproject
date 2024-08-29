const nextButtons = document.querySelectorAll('.next');
const steps = document.querySelectorAll('.form-step');
const submitButton = document.querySelector('.submit');

let currentStep = 0;

nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
    });
});

submitButton.addEventListener('click', () => {
    alert('Form submitted successfully!');
});
