"use strict"

let sections=document.getElementsByTagName("section")


function hideSections() {

    for (let i=0;i<sections.length;i++) {
        sections[i].style.display="none"

    }
}


function displaySection (id) {
    hideSections()
    document.getElementById(id).style.display="flex"

}


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}