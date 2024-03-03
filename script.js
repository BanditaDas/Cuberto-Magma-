function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();
function pg2(){
  
var clutter = "";

var hspan = document.querySelector("#pg2>h1").textContent.split(" ")

hspan.forEach(function(dets){
    clutter += `<span> ${dets} </span>`

    document.querySelector("#pg2>h1").innerHTML = clutter;
})
gsap.to("#pg2>h1>span",{
    color:"#fff",
    stagger:0.1,
    scrollTrigger:{
       trigger:"#pg2>h1>span",
        scroller:"#main",
        markers:false,
        start:"top 80%",
        end:"top 30%",
        scrub:2
    }
})
}
pg2()
function canvas(){
    
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./pic/frames00007.png
  ./pic/frames00010.png
  ./pic/frames00013.png
  ./pic/frames00016.png
  ./pic/frames00019.png
  ./pic/frames00022.png
  ./pic/frames00025.png
  ./pic/frames00028.png
  ./pic/frames00031.png
  ./pic/frames00034.png
  ./pic/frames00037.png
  ./pic/frames00040.png
  ./pic/frames00043.png
  ./pic/frames00046.png
  ./pic/frames00049.png
  ./pic/frames00052.png
  ./pic/frames00055.png
  ./pic/frames00058.png
  ./pic/frames00061.png
  ./pic/frames00064.png
  ./pic/frames00067.png
  ./pic/frames00070.png
  ./pic/frames00073.png
  ./pic/frames00076.png
  ./pic/frames00079.png
  ./pic/frames00082.png
  ./pic/frames00085.png
  ./pic/frames00088.png
  ./pic/frames00091.png
  ./pic/frames00094.png
  ./pic/frames00097.png
  ./pic/frames00100.png
  ./pic/frames00103.png
  ./pic/frames00106.png
  ./pic/frames00109.png
  ./pic/frames00112.png
  ./pic/frames00115.png
  ./pic/frames00118.png
  ./pic/frames00121.png
  ./pic/frames00124.png
  ./pic/frames00127.png
  ./pic/frames00130.png
  ./pic/frames00133.png
  ./pic/frames00136.png
  ./pic/frames00139.png
  ./pic/frames00142.png
  ./pic/frames00145.png
  ./pic/frames00148.png
  ./pic/frames00151.png
  ./pic/frames00154.png
  ./pic/frames00157.png
  ./pic/frames00160.png
  ./pic/frames00163.png
  ./pic/frames00166.png
  ./pic/frames00169.png
  ./pic/frames00172.png
  ./pic/frames00175.png
  ./pic/frames00178.png
  ./pic/frames00181.png
  ./pic/frames00184.png
  ./pic/frames00187.png
  ./pic/frames00190.png
  ./pic/frames00193.png
  ./pic/frames00196.png
  ./pic/frames00199.png
  ./pic/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.5,
    trigger: `#pg3`,
    //   set start end according to preference
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#pg3",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `250% top`,
});
}
canvas()
function pg4(){
  var clutter = "";

var hspan = document.querySelector("#pg4>h1").textContent.split(" ")

hspan.forEach(function(dets){
    clutter += `<span> ${dets} </span>`

    document.querySelector("#pg4>h1").innerHTML = clutter;
})
gsap.to("#pg4>h1>span",{
    color:"#fff",
    stagger:0.1,
    scrollTrigger:{
       trigger:"#pg4>h1>span",
        scroller:"#main",
        markers:false,
        start:"top 80%",
        end:"top 30%",
        scrub:2
    }
})
}
pg4()
function canvas1(){
  const canvas = document.querySelector("#pg5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });

  function files(index) {
  var data = `
  ./pic/bridges00004.png
  ./pic/bridges00007.png
  ./pic/bridges00010.png
  ./pic/bridges00013.png
  ./pic/bridges00016.png
  ./pic/bridges00019.png
  ./pic/bridges00022.png
  ./pic/bridges00025.png
  ./pic/bridges00028.png
  ./pic/bridges00031.png
  ./pic/bridges00034.png
  ./pic/bridges00037.png
  ./pic/bridges00040.png
  ./pic/bridges00043.png
  ./pic/bridges00046.png
  ./pic/bridges00049.png
  ./pic/bridges00052.png
  ./pic/bridges00055.png
  ./pic/bridges00058.png
  ./pic/bridges00061.png
  ./pic/bridges00064.png
  ./pic/bridges00067.png
  ./pic/bridges00070.png
  ./pic/bridges00073.png
  ./pic/bridges00076.png
  ./pic/bridges00079.png
  ./pic/bridges00082.png
  ./pic/bridges00085.png
  ./pic/bridges00088.png
  ./pic/bridges00091.png
  ./pic/bridges00094.png
  ./pic/bridges00097.png
  ./pic/bridges00100.png
  ./pic/bridges00103.png
  ./pic/bridges00106.png
  ./pic/bridges00109.png
  ./pic/bridges00112.png
  ./pic/bridges00115.png
  ./pic/bridges00118.png
  ./pic/bridges00121.png
  ./pic/bridges00124.png
  ./pic/bridges00127.png
  ./pic/bridges00130.png
  ./pic/bridges00133.png
  ./pic/bridges00136.png
  ./pic/bridges00139.png
  ./pic/bridges00142.png
  ./pic/bridges00145.png
  ./pic/bridges00148.png
  ./pic/bridges00151.png
  ./pic/bridges00154.png
  ./pic/bridges00157.png
  ./pic/bridges00160.png
  ./pic/bridges00163.png
  ./pic/bridges00166.png
  ./pic/bridges00169.png
  ./pic/bridges00172.png
  ./pic/bridges00175.png
  ./pic/bridges00178.png
  ./pic/bridges00181.png
  ./pic/bridges00184.png
  ./pic/bridges00187.png
  ./pic/bridges00190.png
  ./pic/bridges00193.png
  ./pic/bridges00196.png
  ./pic/bridges00199.png
  ./pic/bridges00202.png
  `;
  return data.split("\n")[index];
  }

  const frameCount = 67;

  const images = [];
  const imageSeq = {
  frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }

  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#pg5`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
  });

  images[1].onload = render;

  function render() {
  scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({

  trigger: "#pg5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
  });
}
canvas1()
function pg6(){
  var clutter = "";

var hspan = document.querySelector("#pg6>h1").textContent.split(" ")

hspan.forEach(function(dets){
    clutter += `<span> ${dets} </span>`

    document.querySelector("#pg6>h1").innerHTML = clutter;
})
gsap.to("#pg6>h1>span",{
    color:"#fff",
    stagger:0.1,
    scrollTrigger:{
       trigger:"#pg6>h1>span",
        scroller:"#main",
        markers:false,
        start:"top 80%",
        end:"top 30%",
        scrub:2
    }
})
}
pg6()
function canvas2(){
  const canvas = document.querySelector("#pg7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });

  function files(index) {
  var data = `
  ./pic/1.webp
  ./pic/2.webp
  ./pic/3.webp
  ./pic/4.webp
  ./pic/5.webp
  ./pic/6.webp
  ./pic/7.webp
  ./pic/8.webp
  ./pic/9.webp
  ./pic/10.webp
  ./pic/11.webp
  ./pic/12.webp
  ./pic/13.webp
  ./pic/14.webp
  ./pic/15.webp
  ./pic/16.webp
  ./pic/17.webp
  ./pic/18.webp
  ./pic/19.webp
  ./pic/20.webp
  ./pic/21.webp
  ./pic/22.webp
  ./pic/23.webp
  ./pic/24.webp
  ./pic/25.webp
  ./pic/26.webp
  ./pic/27.webp
  ./pic/28.webp
  ./pic/29.webp
  ./pic/30.webp
  ./pic/31.webp
  ./pic/32.webp
  ./pic/33.webp
  ./pic/34.webp
  ./pic/35.webp
  ./pic/36.webp
  ./pic/37.webp
  ./pic/38.webp
  ./pic/39.webp
  ./pic/40.webp
  ./pic/41.webp
  ./pic/42.webp
  ./pic/43.webp
  ./pic/44.webp
  ./pic/45.webp
  ./pic/46.webp
  ./pic/47.webp
  ./pic/48.webp
  ./pic/49.webp
  ./pic/50.webp
  ./pic/51.webp
  ./pic/52.webp
  ./pic/53.webp
  ./pic/54.webp
  ./pic/55.webp
  ./pic/56.webp
  ./pic/57.webp
  ./pic/58.webp
  ./pic/59.webp
  ./pic/60.webp
  ./pic/61.webp
  ./pic/62.webp
  ./pic/63.webp
  ./pic/64.webp
  ./pic/65.webp
  ./pic/66.webp
  ./pic/67.webp
  ./pic/68.webp
  ./pic/69.webp
  ./pic/70.webp
  ./pic/71.webp
  ./pic/72.webp
  ./pic/73.webp
  ./pic/74.webp
  ./pic/75.webp
  ./pic/76.webp
  ./pic/77.webp
  ./pic/78.webp
  ./pic/79.webp
  ./pic/80.webp
  ./pic/81.webp
  ./pic/82.webp
  ./pic/83.webp
  ./pic/84.webp
  ./pic/85.webp
  ./pic/86.webp
  ./pic/87.webp
  ./pic/88.webp
  ./pic/89.webp
  ./pic/90.webp
  ./pic/91.webp
  ./pic/92.webp
  ./pic/93.webp
  ./pic/94.webp
  ./pic/95.webp
  ./pic/96.webp
  ./pic/97.webp
  ./pic/98.webp
  ./pic/99.webp
  ./pic/100.webp
  ./pic/101.webp
  ./pic/102.webp
  ./pic/103.webp
  ./pic/104.webp
  ./pic/105.webp
  ./pic/106.webp
  ./pic/107.webp
  ./pic/108.webp
  ./pic/109.webp
  ./pic/110.webp
  ./pic/111.webp
  ./pic/112.webp
  ./pic/113.webp
  ./pic/114.webp
  ./pic/115.webp
  ./pic/116.webp
  ./pic/117.webp
  ./pic/118.webp
  ./pic/119.webp
  ./pic/120.webp
  ./pic/121.webp
  ./pic/122.webp
  ./pic/123.webp
  ./pic/124.webp
  ./pic/125.webp
  ./pic/126.webp
  ./pic/127.webp
  ./pic/128.webp
  ./pic/129.webp
  ./pic/130.webp
  ./pic/131.webp
  ./pic/132.webp
  ./pic/133.webp
  ./pic/134.webp
  ./pic/135.webp
  ./pic/136.webp
  `;
  return data.split("\n")[index];
  }

  const frameCount = 134;

  const images = [];
  const imageSeq = {
  frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }

  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#pg7`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
  });

  images[1].onload = render;

  function render() {
  scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({

  trigger: "#pg7",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
  });
}
canvas2()

function pg7ani(){
  gsap.to(".circle",{
    scale:1.5,
    backgroundColor:"#0a3bce80",
    scrollTrigger:{
      trigger: ".circle",
      scroller:"#main",
      start: "top 70%",
      end:"bottom top",
      markers: false,
      scrub:1
    },
    
  })
}
pg7ani()