"use strict";



gsap.registerPlugin(ScrollTrigger);


const bgpoly = document.querySelectorAll(
  ".activities .desc-img"
);
const actimg = document.querySelectorAll(
  ".activities .img-wrap"
);



const titles = document.querySelectorAll(
  ".section-title"
);
const girls = document.querySelectorAll(
  ".girl"
);


  


const preparedbgpoly = [
  ...bgpoly
];
const actImgArr = [
  ...actimg
];

const Titles= [
  ...titles
];
const Girls = [
  ...girls
];


// poly img
if(innerWidth>480){
  preparedbgpoly.forEach((poly, index) => {
  
    const bPoly = gsap.timeline({
      scrollTrigger: {
        trigger: poly,
        toggleActions: "play pause reverse pause",
        start:"top center",
        end: (index == actImgArr.length) ? "+=300":"0"  
      },
    });
  
    bPoly.from(poly, {
      x: (index + 1) % 2 !== 0 ? -50 : 50,
      y: -15,
      duration: 1,
    });
  });




//left main img
if(innerWidth>991){
    gsap.from(".main-header-img2", {
      x: 0,
      y: 100,
      duration: 2,
    });
}else if(innerWidth > 480 && innerWidth < 991){
    gsap.from(".main-header-mid", {
      x: 0,
      y: 100,
      duration: 2,
    });
}
 
// right main img
if(innerWidth>991){
  gsap.from('.main-header-img3', {
    x: 300,
    y: 150,
    duration: 2,
    scale:.8
  });
}else if(innerWidth<991){
  gsap.from('.main-header-img3', {
    x: 300,
    y: 150,
    duration: 2,
    scale:.8
  });
}



// images activities
if(innerWidth>480){
  actImgArr.forEach((img, index) => {
  
    const actImg = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        toggleActions: "play pause reverse pause",
        start:"top bottom",
        end: (index == actImgArr.length) ? "+=300":"0"  
      },
    });
  
    actImg.from(img, {
      x: (index + 1) % 2 !== 0 ? 50 : -50,
      y: -15,
      duration: 1,
    });
  });
}



//girls images
setTimeout(function(){
  Girls.forEach((girl, index) => {
  
    const girlImg = gsap.timeline({
      scrollTrigger: {
        trigger: girl,
        toggleActions: "play pause resume pause",
        start:"top bottom", 
      },
    });
  
    girlImg.from(girl, {
      x: 50,
      y: 0,
      scale: .5,
      duration: 0.5,
    });
  });
  
  //titles images
  Titles.forEach((title, index) => {
    
    const TitleS = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        toggleActions: "play pause resume pause",
        start:"top bottom", 
      },
    });
  
    TitleS.from(title, {
      x: -100,
      y: 0,
      duration: .5,
    });
  });
},1000)



}
