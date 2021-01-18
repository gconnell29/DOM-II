// Your code goes here
// mouseenter
// mouseleave
// mouseover
// click
// load
// dblclick
// 
// 
// 
// 

// h1 - click, mouse leave
let funBus = document.querySelector(".logo-heading");
funBus.style.cursor = 'pointer';
funBus.addEventListener('click', () => {
  funBus.style.transform = 'rotate(360deg)';
  funBus.style.transition = '1s';
});
funBus.addEventListener('mouseleave', () => {
  funBus.style.transform = 'initial';
  funBus.style.transition = 'initial';
});

// nav - mouseover
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.style.color = 'red';
    element.style.textDecoration = 'underline';
    element.style.fontWeight = 'bold';
  });
  element.addEventListener('mouseleave', () => {
    element.style.color = 'initial'
    element.style.textDecoration = 'initial';
    element.style.fontWeight = 'initial';
  });
});
  
// images - mouseenter
let images = document.querySelectorAll('.content-section img');
images.forEach(pic => {
  pic.addEventListener('mouseenter', () => {
    pic.style.transform = 'scale(1.1)';
    pic.style.transition = '0.7s';
  });
  pic.addEventListener('mouseleave', () => {
    pic.style.transform = 'scale(1)';
  });
});

// h2's - load
let headings = document.querySelectorAll('h2');
headings.forEach(heading => {
  window.addEventListener('load', () => {
    heading.style.padding = '10px';
    heading.style.background = 'orange';
    heading.style.transition = '2s';
  });
});

// intro -  dblclick
let introh2 = document.querySelector('.intro h2');
let introP = document.querySelector('.intro p');
introh2.style.cursor = 'pointer';

introh2.addEventListener('dblclick', () => {
  introP.style.transition = '1s';
  introP.style.display = 'none';
  // if (introP.style.display = 'none') {
  //   introP.style.display = 'block';
  // } else {
  //   introP.style.display = 'none';
  // }
});

// introh2.addEventListener('select', () => {
//   introP.style.display = 'block';
// });

// window - resize
// message in footer that shows current window size
window.addEventListener("resize", windowDiemensions);

function windowDiemensions() {
  let width = window.outerWidth;
  let height = window.outerHeight;
  document.getElementById('diemensions').innerHTML = `width = ${width} height = ${height}`;
}
