
gsap.registerPlugin(MorphSVGPlugin);

let shape = document.getElementById('shape');


shape.addEventListener('click', function(){
    TweenMax.to(shape, 1, {x: "+=50%", Zindex: 1})
});

