'use strict';
//INDEX PAGE

// Buttons(3) to go to booking page
let bookingBtn1 = document.getElementById("toBooking");
let bookingBtn2 = document.getElementById('toBooking2');
let bookingBtn3 = document.getElementById("toBooking3")

bookingBtn1.addEventListener('click', function() {
    location.href = "booking.html";
});

bookingBtn2.addEventListener('click', function() {
    location.href = "booking.html";
});

bookingBtn3.addEventListener('click', function() {
    location.href = "booking.html";
});

// --Catering Container--
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

//Global Variables Catering Section-------------------------------------

// Buttons
let familyButton = document.getElementById('family');
let specialButton = document.getElementById('special');
let socialButton = document.getElementById('social');

// Txt content 'Family Gathering''Special Events''Social Events'
let title = document.getElementById('title');
let description = document.getElementById('description');

// Images 'Family Gathering''Special Events''Social Events' 
let imageLrg = document.getElementById('desktopImage');
let imageMed = document.getElementById('tabletImage');
let imageSml = document.getElementById('mobileImage');

//Family Gathering-----------------------------------------------------
familyButton.addEventListener('click', function() {
    title.textContent = 'Family Gathering';
    description.textContent = 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.';
    //Changes image based on screen size
    imageLrg.src = 'images/homepage/desktop/family-gathering-desktop@2x.jpg';
    imageMed.src = 'images/homepage/tablet/family-gathering-tablet@2x.jpg';
    imageSml.src = 'images/homepage/mobile/family-gathering-mobile@2x.jpg';
});

//Special Events--------------------------------------------------------
specialButton.addEventListener('click', function() {
    title.textContent = 'Special Events';
    description.textContent = 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.';
    //Changes image based on screen size
    imageLrg.src = 'images/homepage/desktop/special-events-desktop@2x.jpg';
    imageMed.src = 'images/homepage/tablet/special-events-tablet@2x.jpg';
    imageSml.src = 'images/homepage/mobile/special-events-mobile@2x.jpg';
});

//Social Events---------------------------------------------------------
socialButton.addEventListener('click', function() {
    title.textContent = 'Social Events';
    description.textContent = 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.';
    //Changes image based on screen size
    imageLrg.src = 'images/homepage/desktop/social-events-desktop@2x.jpg';
    imageMed.src = 'images/homepage/tablet/social-events-tablet@2x.jpg';
    imageSml.src = 'images/homepage/mobile/social-events-mobile@2x.jpg';
});
// ---------------------------------------------------------------------


