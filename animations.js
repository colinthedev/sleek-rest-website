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
    let summaryOneDefaults = { // Default values 
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
    let summaryTwoDefaults = { // Default values
        opacity: 0, 
        duration: 2, 
        ease: "sine.out"
    };

    let summaryTwoTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.txtWrapperLocal__localHeading',
            start: 'top bottom'
        },
    });

    summaryTwoTl
        .from('.botRightCurveSumm', {x: 4000, opacity: 0, duration: 1.5, ease: "circ.out"})
        .from('.summTwoImgAnimation', {y: 500, ...summaryTwoDefaults})
        .from('.divideLineR', {x: 200, opacity: 0, duration: 1.5, ease: "circ.out"}, "-=1")
        .from('.txtWrapperLocal__localHeading', {...summaryTwoDefaults}, "-=.60")
        .from('.txtWrapperLocal__txt', {...summaryTwoDefaults}, "-=1.55");

// Menu sec
    












