// For Navbar 

window.onscroll = function () { scrollFunction() };

let mybutton = document.getElementById('myBtn')

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav-header").style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.2)"
       
    } else {
        document.getElementById("nav-header").style.boxShadow = "none";
        mybutton.style.display = "none";
    }
}


// navlink active 

var header = document.getElementById("navlink_list");
var btns = header.getElementsByClassName("navlink_internal");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-navlink");
  current[0].className = current[0].className.replace(" active-navlink", "");
  this.className += " active-navlink";
  });
}


// for Faq 
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
    header.addEventListener("click", function () {
        const accordionContent = header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
            header.querySelector(".uil").classList.remove("uil-plus");
            header.querySelector(".uil").classList.add("uil-minus");

        } else {
            accordionContent.style.maxHeight = `0px`;
            header.querySelector(".uil").classList.add("uil-plus");
            header.querySelector(".uil").classList.remove("uil-minus");

        }
    });
});


// custom cursor 

const cursor = document.getElementById('cursor');
document.documentElement.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX + 'px';
  const mouseY = evt.clientY + 'px';
  const root = document.documentElement;
  cursor.style.setProperty('display', 'inline-block');
  setTimeout(() => {
    root.style.setProperty('--cursorX', mouseX);
    root.style.setProperty('--cursorY', mouseY);
  }, 160);
});

document.documentElement.addEventListener("mouseleave", evt => {
  cursor.style.setProperty('display', 'none');
});


