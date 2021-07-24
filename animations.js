'use strict';
gsap.registerPlugin(ScrollTrigger);

// Prevent useless warnings in console if class is not found
    gsap.config({
        nullTargetWarn: false,
    });

    // gsap.defaults({
    // })

// Hero sec
    let heroDefaults = { // Default values for "heroTl"
        opacity: 1, 
        duration: 1.75, 
        ease: "sine.out"
    };

    let heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.headerImgContainer',
            start: 'top center'
        },
    });

    heroTl
        .from('.headerImgContainer', {x: 1000, duration: 1.75, ease: "sine.out"})
        .to('.headerImgContainer', {opacity: 1}, "-=1") // Delay the opacity on inital page visit
        .to('.logo', {...heroDefaults, y: 0}, "+=.15")
        .to('.headerContainer__since1989', {...heroDefaults, y: 0}, "-=1.25")
        .to('.headerContainer__missionStatement', {...heroDefaults,}, "-=1")
        .to('.bookTableBtnHeader', {...heroDefaults,}, "-=1");

// Summary one sec
    let summaryOneDefaults = { // Default values summary one
        opacity: 0, 
        duration: 2, 
        ease: "sine.out"
    };

    let summaryOneTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.txtWrapperEnjoy__enjoyableHeading',
            start: 'top bottom'
        },
    });

    summaryOneTl
        .from('.topLeftCurveSumm', {x: -4000, opacity: 0, duration: 1.5, ease: "circ.out"})
        .from('.summOneImgAnimation', {y: 500, ...summaryOneDefaults}, "-=.75")
        .from('.divideLineL', {x: 200, opacity: 0, duration: 1.5, ease: "circ.out"}, "-=1")
        .from('.txtWrapperEnjoy__enjoyableHeading', {...summaryOneDefaults}, "-=.60")
        .from('.txtWrapperEnjoy__txt', {...summaryOneDefaults}, "-=1.55");

// Summary two sec
    let summaryTwoDefaults = { // Default values summary two
        opacity: 0, 
        duration: 2, 
        ease: "sine.out"
    };

    let summaryTwoTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.txtWrapperLocal__localHeading',
            start: 'center bottom'
        },
    });

    summaryTwoTl
        .from('.botRightCurveSumm', {x: 4000, opacity: 0, duration: 1.5, ease: "circ.out"})
        .from('.summTwoImgAnimation', {y: 500, ...summaryTwoDefaults})
        .from('.divideLineR', {x: 200, opacity: 0, duration: 1.5, ease: "circ.out"}, "-=1")
        .from('.txtWrapperLocal__localHeading', {...summaryTwoDefaults}, "-=.60")
        .from('.txtWrapperLocal__txt', {...summaryTwoDefaults}, "-=1.55");

// Menu sec
    let menuImgDefault = { // Menu images defaults
        x: 700, 
        opacity: 0, 
        duration: 2.5, 
        ease: "sine.out"
    };

    let menuTxtDefault = { // Menu txt defaults
        y: 40, 
        opacity: 0, 
        duration: 1, 
        ease: "sine.out"
    };

    let menuTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.menuWrapper',
            start: 'top bottom'
        },
    });

    menuTl
        .from('.salmonImgAnimation', {...menuImgDefault})
        .from('.salmonWrapper__inner', {...menuTxtDefault}, "+=.05")
        .from('.filetImgAnimation', {...menuImgDefault}, "-=3")
        .from('.filetWrapper__inner', {...menuTxtDefault}, "-=.5")
        .from('.mousseImgAnimation', {...menuImgDefault}, "-=3")
        .from('.mousseWrapper__inner', {...menuTxtDefault}, "-=.5");

// Catering sec
    let cateringDefault = { // Catering defaults
        opacity: 0, 
        duration: 1.5
    };

    let cateringTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.cateringContainer__inner',
            start: 'center bottom'
        },
    });

    cateringTl
        .from('.contentWrapper__gatheringHeading', {...cateringDefault, y: 50, ease: "sine.out"})
        .from('.contentWrapper__txt', {...cateringDefault, y: 50, ease: "sine.out"}, "-=.5")
        .from('#family', {...cateringDefault, x: -200, ease: "back.out(1.7)"}, "-=1.25")
        .from('#special', {...cateringDefault, x: -200, ease: "power2.out"}, "-=.75")
        .from("#social", {...cateringDefault, x: -200, ease: "power2.out"}, "-=.75")
        .from('#toBooking2', {...cateringDefault, x: 500, ease: "sine.out"}, "-=.5");

// Booking CTA footer
    let bookingCtaTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.reservationContainer',
            start: 'bottom bottom'
        },
    });

    bookingCtaTl
        .from('.reservationContainer__heading', {y: 65, opacity: 0, duration: 1.5, ease: "sine.out"})
        .from('#toBooking3', {x: 200, opacity: 0, duration: 1.5, ease: "bounce.out"}, "-=.85")




