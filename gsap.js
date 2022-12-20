gsap.registerPlugin(ScrollTrigger);

gsap.to("#menu", {
    scrollTrigger:{
        trigger: "body",
        start: '50px 10%',
        end: '300px',
        scrub: 0.5,
        markers: true,
    },
    opacity: 0,
})


gsap.to(".photo_container", {
    scrollTrigger:{
        trigger: ".about",
        start: '50px 10%',
        end: '300px',
        scrub: 1,
        markers: true,
    },
    opacity: 1,
})


gsap.to("body", {
    scrollTrigger:{
        trigger: "body",
        start: '200px',
        end: '20%',
        scrub: 1,
        markers: true,
    },
    background: 'white',
})

gsap.to(".blog-headline", {
    scrollTrigger:{
        trigger: "body",
        start: '1000px',
        end: '20%',
        scrub: 1,
        markers: true,
    },
    background: 'white',
})