
const input = document.getElementById('switch');
const body = document.querySelector('body');
const panels = document.querySelector('.panel');
const boxs = document.querySelector('.box');
const boxtwo = document.querySelector('.boxtwo');


input.addEventListener('click', function() {
body.classList.toggle('night');
panels.classList.toggle('night');
boxs.classList.toggle('night');
boxtwo.classList.toggle('night');
});

const hand = document.querySelector('.emoji');

function waveOnLoad() {
  hand.classList.add('waves');
  setTimeout(function() {
    hand.classList.remove('waves');
  }, 2000);
}

setTimeout(function() {
  waveOnLoad();
}, 1000);

hand.addEventListener('mouseover', function() {
  hand.classList.add('waves');
});

hand.addEventListener('mouseout', function() {
  hand.classList.remove('waves');
});





const words = ["Royette", "A Father", "A Husband", "A Developer", ]



let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1 });

let boxTl = gsap.timeline()



boxTl.to('.boxtwo', {duration: 1, width: "13vw", delay: 0.5, ease: "power4.inOut"})
.from('.hi', {duration: 1, y: "7vw", ease: "power3.out"})
.to('.boxtwo', {duration: 1, height: "7vw", ease: "elastic.out"})


let masterTl = gsap.timeline({repeat: -1})

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1}) 
    tl.to('.text', {duration: 2.5, text: word })
    masterTl.add(tl)
})


