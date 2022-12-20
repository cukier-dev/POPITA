const mobile = window.matchMedia("(max-width: 800px)");
  
function handleTabletChange(e) {
  if (e.matches) {
    animation();
  }
}
mobile.addListener(handleTabletChange)
handleTabletChange(mobile)

function animation() {

let controler = new ScrollMagic.Controller();

// let tween = new TimelineMax()
// tween.to("#hero_text", 1, {marginTop: -200, opacity: 0}, 0)


// let scene = new ScrollMagic.Scene({
//     triggerElement: "header",
//     duration: "300",
//     triggerHook: 0,
// })

// .setTween(tween)
// .addTo(controler);

// new ScrollMagic.Scene({
//     triggerElement: "#all-buttons",
//     triggerHook: 0.02,
// })
// .setPin("#all-buttons")
// .addTo(controler);

// new ScrollMagic.Scene({
//     triggerElement: "#all-buttons",
//     triggerHook: 0.02,
//     duration: 200,
// })
// .setTween("#all-buttons", 1, {scale:0.7, marginTop: -15})
// .addTo(controler);

// //Header Background SVG animation

// function preparePath($el) {
//     let lineLenght = $el[0].getTotalLength();
//     $el.css("stroke-dasharray", lineLenght);
//     $el.css("stroke-dashoffset", lineLenght);
// }

// //Menu blur background
// new ScrollMagic.Scene({
//     triggerElement: "#all-buttons",
//     triggerHook: 0.02,
//     offset: 150,
// })
// .setTween("#menu-blur", 2, {opacity:1})
// .setClassToggle("#menu-blur", "menu-blur")
// .addTo(controler);

// //Jakub's photo animation

// new ScrollMagic.Scene({
//     triggerElement: ".photo_container",
//     triggerHook: 0,
//     duration: "50%",
// })
// .setPin(".photo_container")
// .addTo(controler);

// //Jakub's text animation

// let jakub_alltext = new TimelineMax()
// .to("#jakub-alltext", 1, {y:170})

// new ScrollMagic.Scene({
//     triggerElement: ".about",
//     triggerHook: 0.1,
//     duration: "50%",
// })
// .setTween(jakub_alltext)
// .addTo(controler);



// //Jakub's headline animation

// let jakub_headline = new TimelineMax()
// .to("#jakub_headline", 1, {opacity:1})

// new ScrollMagic.Scene({
//     triggerElement: ".about",
//     triggerHook: 0.1,
//     duration: "50%",
// })
// .setTween(jakub_headline)
// .addTo(controler);


// //Jakub's subheadline animation

// let jakub_subheadline = new TimelineMax()
// .to("#jakub_subHeadline", 1, {opacity:1})

// new ScrollMagic.Scene({
//     triggerElement: ".about",
//     triggerHook: 0,
//     duration: "50%",
//     offset: 200,
// })
// .setTween(jakub_subheadline)
// .addTo(controler);

// //Jakub's text animation

// let jakub_text = new TimelineMax()
// .to("#jakub_text", 1, {opacity:1})

// new ScrollMagic.Scene({
//     triggerElement: ".about",
//     triggerHook: 0,
//     duration: "50%",
//     offset: 300,
// })
// .setTween(jakub_text)
// .addTo(controler);

// //blog Pin

// let $smallBlogElHeight = $(".blog--element_small").innerHeight();
// console.log( $smallBlogElHeight );

// for(let i=0; i<=3; i++) {

// new ScrollMagic.Scene({
//     triggerElement: "#pin1",
//     triggerHook: 0.2,
//     duration: $smallBlogElHeight/1.8,
//     offset: 50,
// })
// .setPin("#pin" + [i])
// .addTo(controler);

// }


// //background animation

new ScrollMagic.Scene({
    duration: 300,
})
.setTween(["body"], 1, {background: '#f4f4f4'})
.addTo(controler)

new ScrollMagic.Scene({
    triggerElement: "#about",
    duration: "50%",
    offset: 200,
})
.setTween(".photo_container", 1, {opacity: 1})
.addTo(controler)





}