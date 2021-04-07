'use strict';

//On click add active class to selected button
let btnContainer = document.querySelector('.sliderContainers');
let btn = document.querySelectorAll('.sliderContainers__sliderBtn');

btn.forEach(el => {
    el.addEventListener('click', function() {
        btnContainer.querySelector('.active').classList.remove('active');
        
        el.classList.add('active');
    });
});
// ---------------------------------------------------------------------
//Change Image On Click-------------------------------------------------

let imageLrg = document.getElementById('desktopImage');
let imageMed = document.getElementById('tabletImage');
let imageSml = document.getElementById('mobileImage');

function familyChange() {
    imageLrg.src = '/images/homepage/desktop/family-gathering-desktop@2x.jpg';
    imageMed.src = '/images/homepage/tablet/family-gathering-tablet@2x.jpg';
    imageSml.src = '/images/homepage/mobile/family-gathering-mobile@2x.jpg';
};

function specialChange() {
    imageLrg.src = '/images/homepage/desktop/special-events-desktop@2x.jpg';
    imageMed.src = '/images/homepage/tablet/special-events-tablet@2x.jpg';
    imageSml.src = '/images/homepage/mobile/special-events-mobile@2x.jpg';
};

function socialChange() {
    imageLrg.src = '/images/homepage/desktop/social-events-desktop@2x.jpg';
    imageMed.src = '/images/homepage/tablet/social-events-tablet@2x.jpg';
    imageSml.src = '/images/homepage/mobile/social-events-mobile@2x.jpg';
};
// ---------------------------------------------------------------------

//Global Variables------------------------------------------------------
let title = document.getElementById('title');
let description = document.getElementById('description');

//Family Gathering-----------------------------------------------------
let familyButton = document.getElementById('family');

familyButton.addEventListener('click', function() {
    title.textContent = 'Family Gathering';
    description.textContent = 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.';
});

//Special Events--------------------------------------------------------
let specialButton = document.getElementById('special');

specialButton.addEventListener('click', function() {
    title.textContent = 'Special Events';
    description.textContent = 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.';

});

//Social Events---------------------------------------------------------
let socialButton = document.getElementById('social');

socialButton.addEventListener('click', function() {
    title.textContent = 'Social Events';
    description.textContent = 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.';
});
// ---------------------------------------------------------------------

