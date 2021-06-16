/*gsap.registerPlugin(ScrollTrigger);



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
});*/


function isInView(el) {
    const box = el.getBoundingClientRect();
    console.log(box.top);
    return box.top < window.innerHeight && box.bottom >= 0;
};

function bgChange(bg) {
    document.body.style.background = bg;
};

// On scroll check if each page is in view, then fire background change
function myFunction() {
    let bg;
    let element1 = document.getElementById('issue-1');
    let element2 = document.getElementById('issue-2');
    let element3 = document.getElementById('issue-3');
    let element4 = document.getElementById('issue-4');
    //let element5 = document.getElementById('issue-5');
    if (isInView(element1) == true) {
        //bold font for issue#1 on menu
        
        bg = '#e30512';
    } else if (isInView(element2) == true) {
        //bg = 'blue';
        //bgChange(bg);
        bg = '#1d3fbb';
    }
    else if (isInView(element3) == true) {
        //bg = 'blue';
        //bgChange(bg);
        bg = '#ffbe00';
    }
    else if (isInView(element4) == true) {
        //bg = 'blue';
        //bgChange(bg);
        bg = '#ff651a';
    }
    else {
        bg = '#00c1b5';
    }
    bgChange(bg);
};

document.addEventListener("scroll", myFunction);
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