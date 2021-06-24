// Check if current element is in the viewport
function isInView(el) {
    const box = el.getBoundingClientRect();
    console.log(box.top);
    return box.top < window.innerHeight && box.bottom >= 0;
};

// Changes background colour of page
function bgChange(bg) {
    document.body.style.background = bg;
};

/*
// On scroll check if each page is in view, then fire background change
function scrollFunction() {
    let bg;
    let element1 = document.getElementById('issue-1');
    let element2 = document.getElementById('issue-2');
    let element3 = document.getElementById('issue-3');
    let element4 = document.getElementById('issue-4');
    let issue1 = document.getElementById('i1');
    let issue2 = document.getElementById('i2');
    let issue3 = document.getElementById('i3');
    let issue4 = document.getElementById('i4');
    let issue5 = document.getElementById('i5');

    let element5 = document.getElementById('issue-5');
    let els = [element1, element2, element3, element4, element5];
    let issues = [issue1, issue2, issue3, issue4, issue5];
    //let element5 = document.getElementById('issue-5');
    if (isInView(element1) == true) {
        //remove .active from all other i's classlists
        var current = document.getElementsByClassName("active");
        current[0].classList.remove('active');
        //bold font for issue on menu
        issue1.classList.add('active');
        //Set background color
        bg = '#e30512';
    } else if (isInView(element2) == true) {
        //remove .active from all other i's classlists
        var current = document.getElementsByClassName("active");
        current[0].classList.remove('active');
        //bold font for issue on menu
        issue2.classList.add('active');
        //Set background color
        bg = '#1d3fbb';
    }
    else if (isInView(element3) == true) {
        //remove .active from all other i's classlists
        var current = document.getElementsByClassName("active");
        current[0].classList.remove('active');
        //bold font for issue on menu
        issue3.classList.add('active');
        //Set background color
        bg = '#ffbe00';
    }
    else if (isInView(element4) == true) {
         //remove .active from all other i's classlists
        var current = document.getElementsByClassName("active");
        current[0].classList.remove('active');
        //bold font for issue on menu
        issue4.classList.add('active');
        //Set background color
        bg = '#ff651a';
    }
    else {
        bg = '#00c1b5';
    }
    bgChange(bg);
};*/

function scrollFunction() {
    let bg;
    let element1 = document.getElementById('issue-1');
    let element2 = document.getElementById('issue-2');
    let element3 = document.getElementById('issue-3');
    let element4 = document.getElementById('issue-4');
    let element5 = document.getElementById('issue-5');
    let issue1 = document.getElementById('i1');
    let issue2 = document.getElementById('i2');
    let issue3 = document.getElementById('i3');
    let issue4 = document.getElementById('i4');
    let issue5 = document.getElementById('i5');

    let els = [element5, element4, element3, element2, element1];
    let issues = [issue5, issue4, issue3, issue2, issue1];
    let colours = ['#00c1b5', '#ff651a', '#ffbe00','#1d3fbb', '#e30512'];
    
    // Run for all 'element's in [els] 
    els.forEach(activePageEffect);

    function activePageEffect(x, i) {
        // Check if current 'element' is in viewport
        if (isInView(x) == true) {
            // Remove .active from previous 'issue's classlist
            var current = document.getElementsByClassName("active");
            current[0].classList.remove('active');
            // Set bold font for current 'issue' on menu with .active class
            issues[i].classList.add('active');
            //set bg to corresponding colour for appropriate issue
            bg = colours[i];
        }
        bgChange(bg);
    }

}
document.addEventListener("scroll", scrollFunction);
