gsap.registerPlugin(ScrollTrigger);



const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.issue-5'
      } 
});
t1.to('body', {
    background: rgb(0,193,181),
    duration:1
});

const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.issue-4',
        start: "middle top"
      } 
});
t2.to("body", {
    background: rgb(255,101,26),
    duration:1
});


function isInView(el) {
    const box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom >= 0;
};

function bgChange(bg) {
    document.body.style.background = bg;
};

// On scroll check if each page is in view, then fire background change
if (isInView('.issue-1') = true) {

}



// Setting the initial background color
//gsap.set(container, {
//  backgroundColor: 'lightblue',
//})


/*const tl = gsap.timeline({
  
    scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: true,
    end: () => `+=${container.offsetWidth}`
      
  }
  
})

 tl
 .to(sections, { duration: 2, xPercent: -100 * (sections.length - 1), ease: "none" })
 .to(container, { duration: 1, backgroundColor: '#FF0000', ease: "none" }, 0)
 .to(container, { duration: 1, backgroundColor: '#0000FF', ease: "none" }, 1)
 */

 function changeBg() {
    document.body.style.background = 'red';
 };