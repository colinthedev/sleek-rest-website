'use strict';

// Event listener events button on click change image with ID change header with ID change summary with ID add active class to button to change color add tan line


//Variables for button active class
let btnContainer = document.querySelector('.sliderContainers')
let btn = document.querySelectorAll('.sliderContainers__sliderBtn');

//On click add active class to selected button
btn.forEach(el => {
    el.addEventListener('click', function() {
        btnContainer.querySelector('.active').classList.remove('active');
        
        el.classList.add('active');
    });
});

//Global Variables
let title = document.getElementById('title');
let description = document.getElementById('description');
let image = document.getElementById('image');

//Family Gathering
let familyButton = document.getElementById('family');

familyButton.addEventListener('click', function() {
    title.textContent = 'Family Gathering';
    description.textContent = 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.';
});

//Special Events
let specialButton = document.getElementById('special');

specialButton.addEventListener('click', function() {
    title.textContent = 'Special Events';
    description.textContent = 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.';
});

//Social Events
let socialButton = document.getElementById('social');

socialButton.addEventListener('click', function() {
    title.textContent = 'Social Events';
    description.textContent = 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.';
});
