const desktop = window.matchMedia("(min-width: 800px)");
  
function handleTabletChange(e) {
  if (e.matches) {
    animation();
  }
}
desktop.addListener(handleTabletChange)
handleTabletChange(desktop)

function animation() {

let controler = new ScrollMagic.Controller();

let tween = new TimelineMax()
tween.to("#hero_text", 1, {marginTop: -200, opacity: 0}, 0)


let scene = new ScrollMagic.Scene({
    triggerElement: "header",
    duration: "300",
    triggerHook: 0,
})

.setTween(tween)
.addTo(controler);

new ScrollMagic.Scene({
    triggerElement: "#all-buttons",
    triggerHook: 0.02,
})
.setPin("#all-buttons")
.addTo(controler);

new ScrollMagic.Scene({
    triggerElement: "#all-buttons",
    triggerHook: 0.02,
    duration: 200,
})
.setTween("#all-buttons", 1, {scale:0.7, marginTop: -15})
.addTo(controler);

//Header Background SVG animation

function preparePath($el) {
    let lineLenght = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLenght);
    $el.css("stroke-dashoffset", lineLenght);
}

//Menu blur background
new ScrollMagic.Scene({
    triggerElement: "#all-buttons",
    triggerHook: 0.02,
    offset: 150,
})
.setTween("#menu-blur", 2, {opacity:1})
.setClassToggle("#menu-blur", "menu-blur")
.addTo(controler);

//Jakub's photo animation

new ScrollMagic.Scene({
    triggerElement: ".photo_container",
    triggerHook: 0,
    duration: "50%",
})
.setPin(".photo_container")
.addTo(controler);

let photo1 = new TimelineMax()
.to("#photo1", 1, {opacity: 0})


new ScrollMagic.Scene({
    triggerElement: ".photo_container",
    triggerHook: 0.1,
    duration: "50%",
})
.setTween(photo1)
.addTo(controler);



let photo2 = new TimelineMax()
.fromTo("#photo2", 1, {opacity: 0, y:200}, {opacity: 1, y:0})


new ScrollMagic.Scene({
    triggerElement: ".photo_container",
    triggerHook: 0.1,
    duration: "50%",
})
.setTween(photo2)
.addTo(controler);


//Jakub's text animation

let jakub_alltext = new TimelineMax()
.to("#jakub-alltext", 1, {y:170})

new ScrollMagic.Scene({
    triggerElement: ".about",
    triggerHook: 0,
    duration: "50%",
})
.setTween(jakub_alltext)
.addTo(controler);



//Jakub's headline animation

let jakub_headline = new TimelineMax()
.to("#jakub_headline", 1, {opacity:1})

new ScrollMagic.Scene({
    triggerElement: ".about",
    triggerHook: 0.1,
    duration: "50%",
})
.setTween(jakub_headline)
.addTo(controler);


//Jakub's subheadline animation

let jakub_subheadline = new TimelineMax()
.to("#jakub_subHeadline", 1, {opacity:1})

new ScrollMagic.Scene({
    triggerElement: ".about",
    triggerHook: 0,
    duration: "50%",
    offset: 200,
})
.setTween(jakub_subheadline)
.addTo(controler);

//Jakub's text animation

let jakub_text = new TimelineMax()
.to("#jakub_text", 1, {opacity:1})

new ScrollMagic.Scene({
    triggerElement: ".about",
    triggerHook: 0,
    duration: "50%",
    offset: 300,
})
.setTween(jakub_text)
.addTo(controler);

//blog Pin

let $smallBlogElHeight = $(".blog--element_small").innerHeight();
console.log( $smallBlogElHeight );

for(let i=0; i<=3; i++) {

new ScrollMagic.Scene({
    triggerElement: "#pin1",
    triggerHook: 0.2,
    duration: $smallBlogElHeight/1.65,
    offset: 50,
})
.setPin("#pin" + [i])
.addTo(controler);

}

//background animation

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


//Change text

let number=0, state;
let texts = [,"Zmniejsza efekt cieplarniany", "Tworzy tkankę miejską","Produkuje mniej smogu", "Zwiększa poziom szczęścia"]
let svgs = ["65.43 69.38 120.68 132.9 0 132.9 55.25 69.38 0 69.38 60.34 0 120.68 69.38 65.43 69.38",
"97.78 74.02 104.7 96.53 83.36 103.09 76.44 80.58 49.35 88.91 49.35 105.38 27.02 105.38 27.02 95.77 13.34 99.98 6.78 78.64 27.02 72.42 27.02 55.01 6.56 61.3 0 39.96 27.02 31.65 27.02 0 49.35 0 49.35 24.79 100.72 8.99 107.28 30.33 49.35 48.14 49.35 65.55 69.88 59.24 67.38 51.12 88.72 44.56 91.22 52.68 107.5 47.67 114.06 69.01 97.78 74.02",
"36.31 41.49 39.78 48.96 13.97 60.93 0 30.81 24.51 19.44 21.04 11.97 46.84 0 60.81 30.12 36.31 41.49",
"0 5.13 38.95 55.39 71.61 0 42.21 2.62 36.9 18.93 26.13 1.37 0 5.13"]
function count() {
    if(number == 4) {
        number = 0;
    } else {
        $("#change").text(texts[number])
        $("#tree").attr("points" , ()=> {
            return svgs[number];
        })
        number++;
    }
}

$('#change').on("mouseenter", () => {
    state = setInterval(count, 1000);
    $("#change").css({color: "#7F99F8"})
    $("#tree").attr("points" , ()=> {
        return svgs[0];
    }) 

}).on("mousemove", (e)=> {
    $(".tree").css({top: e.pageY - 100 + "px", left: e.pageX - 90 + "px"})
}).on("mouseleave", ()=> {
    clearInterval(state);
    $("#tree").attr("points" , ()=> {
        return null;
    }) 
    $("#change").css({color: ""})
})

