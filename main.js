'use strict';
//INDEX PAGE

// Buttons(3) to go to booking page
const bookingBtn1 = document.getElementById("toBooking");
const bookingBtn2 = document.getElementById('toBooking2');
const bookingBtn3 = document.getElementById("toBooking3")

bookingBtn1.addEventListener('click', function() {
    location.href = "booking.html";
});

bookingBtn2.addEventListener('click', function() {
    location.href = "booking.html";
});

bookingBtn3.addEventListener('click', function() {
    location.href = "booking.html";
});

// ---------------------------------------------------------------------

// --Catering Container--
//On click add active class to selected button
const eventsBtnContainer = document.querySelector('.sliderContainers');
const eventsButtons = document.querySelectorAll('.sliderContainers__sliderBtn');

eventsButtons.forEach(el => {
    el.addEventListener('click', function () {
        eventsBtnContainer.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        el.classList.add('active');
        el.querySelector('.cateringLine').classList.add('active')
    })
});

// ---------------------------------------------------------------------

//Global Variables Catering Section-------------------------------------

// Buttons
const familyButton = document.getElementById('family');
const specialButton = document.getElementById('special');
const socialButton = document.getElementById('social');

// Txt content 'Family Gathering''Special Events''Social Events'
const title = document.getElementById('title');
const description = document.getElementById('description');

// Images 'Family Gathering''Special Events''Social Events' 
const imageLrg = document.getElementById('desktopImage');
const imageMed = document.getElementById('tabletImage');
const imageSml = document.getElementById('mobileImage');

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