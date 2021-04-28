'use strict';
//BOOKING PAGE

// Button(1) to go to home page
let homeBtn = document.getElementById('toHome');

homeBtn.addEventListener('click', function() {
    location.href = 'index.html';
});

// -- Reservations form --
//Name Email, Form
const form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
//Date
let month = document.getElementById('dateMonth');
let day = document.getElementById('dateDay');
let year = document.getElementById('dateYear');

//Prevent default error values
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs(),
    checkMonth(),
    checkDay();
});

function checkInputs() {
    let nameValue = name.value.trim();
    let emailValue = email.value.toLowerCase().trim();

    //Check Name
    if(nameValue === '') {
        setErrorFor(name, "Name can't be empty");
    }else {
        setSuccessFor(name);
    };

    //Check Email
    if(emailValue === '') {
        setErrorFor(email, "Email can't be empty");
    }else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    }
    else {
        setSuccessFor(email);
    };
};
checkInputs();

// //Check Month
// function checkMonth() {
//     let monthValue = month.value.trim();

//     if(monthValue >= 13 || monthValue <= 0) {
//         setErrorFor(month, "Month is invalid");
//     } else if (monthValue === '') {
//         setErrorFor(month, "Month can't be empty");
//     } else {
//         setSuccessFor(month);
//     };
// };
// checkMonth();

// // Check Day
// function checkDay() {
//     let dayValue = day.value.trim();

//     if(dayValue >= 32 || dayValue <= 0) {
//         setErrorFor(day, "Day is invalid");
//     } else if (dayValue === '') {
//         setErrorFor(day, "Day can't be empty");
//     } else {
//         setSuccessFor(day);
//     };
// };
// checkDay();

// // Check Year
// function checkYear() {
//     let yearValue = year.value.trim();

//     if(yearValue < 4) {
//         setErrorFor(year, "Year has to be four digits");
//     } else if (isNaN(yearValue) === true){
//         setErrorFor(year, "Year must be numbers");
//     } else {
//         setSuccessFor(year);
//     };
// }
// checkYear();

//Display invalid input value
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    formControl.className = 'formControl error';
	small.innerText = message;
};

//Display successful input value
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}

//Test if email is invalid
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//Guests Counter
let counterDisplay = document.getElementById('guests');//Target HTML

function successDisplay() {
    counterDisplay.innerHTML = count;
    counterDisplay.style.color = "#111111";
}

function errorDisplay() {
    counterDisplay.innerHTML = "Please select a number between 1-10",
    counterDisplay.style.color = "#B54949",
    counterDisplay.style.fontWeight = "normal"
}

let counterPlus = document.querySelector(".inputWrapperBot__button-plus");//Get plus symbol
let counterMinus = document.querySelector(".inputWrapperBot__button-minus");//Get minus symbol
let count = 4;//Start the counter at 4

counterPlus.addEventListener("click", () => {
    if(count <= 9) {
        count++;
        successDisplay()
    }else (
        errorDisplay()
    )
});
    
counterMinus.addEventListener("click", () => {
    if(count >= 2) {
        count--;
        successDisplay()
    }else (
        errorDisplay()
    )
});


// AM PM Drop Down Toggle Btn
function toggleDropDown() {
    let rotateArrow = document.querySelector(".inputWrapperTime__row-placehold--arrow");
    let show = document.querySelector(".amPMHide");

    rotateArrow.addEventListener('click', () => {
        rotateArrow.classList.toggle("show");
        show.classList.toggle("amPMHide");
    });
};
toggleDropDown();

// Updates time to AM or PM
let buttonAM = document.getElementById('AM'); // AM button
let checkMarkAM = document.querySelector('.AMCheckMark'); // Applies check mark
let buttonPM = document.getElementById('PM'); // PM button
let checkMarkPM = document.querySelector('.PMCheckMark'); // Applies check mark
let updateTime = document.getElementById('value'); // Change form place-holder to AM/PM

// Changes placeholder text to AM
function updateToAm() {
    buttonAM.addEventListener('click', function() {
        if(checkMarkAM.classList.contains("active")) {
            updateTime.placeholder = "AM";
        } else (updateTime.placeholder = "");
    });
};

// Changes placeholder text to PM
function updateToPm() {
    buttonPM.addEventListener('click', function() {
        if(checkMarkPM.classList.contains("active")) {
            updateTime.placeholder = "PM";
        } else (updateTime.placeholder = "");
    });
};

// Applies and removes active class to show check mark 
function toggleDay() {

    buttonAM.addEventListener('click', function() {
        if(checkMarkPM.classList.contains("active")) {
            checkMarkPM.classList.toggle("active");
            checkMarkAM.classList.toggle("active");
            updateToAm();
        } else {
            checkMarkAM.classList.toggle("active");
        };
    });

    buttonPM.addEventListener('click', function() {
        if(checkMarkAM.classList.contains("active")) {
            checkMarkAM.classList.remove("active");
            checkMarkPM.classList.toggle("active");
            updateToPm()
        };
    });
};
toggleDay();

function toggleNight() {
    buttonPM.addEventListener('click', function() {
        checkMarkPM.classList.toggle("active");
    });
};
toggleNight();
updateToAm();
updateToPm();

// function validate(form) {

//     // validation code here ...
//     checkInputs()
//     checkMonth()
//     checkDay()

//     if(!valid) {
//         alert('Please correct the errors in the form!');
//         return false;
//     }
//     else {
//         return confirm('Do you really want to submit the form?');
//     }
// }

//  <form onsubmit="return validate(this);"></form> 