window.onload = function () {
  
  // --- SLIDER --- //

  const inc = document.getElementById('inc'); //1. Added endpoints and data for slider
  const dec = document.getElementById('dec');
  const slideRecieverImg = document.getElementById('slideRecieverImg');
  const ARRDATA = 
    ['./images/slider/Slide1.png',
    './images/slider/Slide2.png']
  const INITFORSLIDER = 0;


const colorChanger = (state) => {  //2. Created bkg changer
    const sliderBkg = document.getElementsByClassName('main__slider')[0];
    let wrapper = sliderBkg.style;
    if (state == 0) {
      wrapper.backgroundColor = '#f06c64';
      wrapper.borderBottom = '6px #ea676b solid';
    } else {
      wrapper.backgroundColor = '#648BF0';
      wrapper.borderBottom = '6px solid #648BF0';
    };
  };

  const renderCount = (arg) => { //3. Added render-func which will redraw slider's contains
    const mySlide = ARRDATA[arg];
    const img = `<img src="${mySlide}" alt='Slider's image'/>`
    slideRecieverImg.innerHTML = img;
    colorChanger(arg);
  }
  
  function createInitSlider() { //3. Added wrapper and inc/dec functions for sliders rolling 
    let COUNTER = 0;

    function incFunc (arr) {
      return function() {
        COUNTER < arr.length-1 ?
        COUNTER++ : COUNTER = 0
        console.log('COUNTER STATE', COUNTER);
        renderCount(COUNTER);
      };
    }

    function decFunc (arr) {
      return function() {
        COUNTER > 0 ? COUNTER-- : COUNTER = arr.length-1
        console.log('COUNTER STATE', COUNTER);
        renderCount(COUNTER);
      }
    }

    const increment = incFunc(ARRDATA);
    const decrement = decFunc(ARRDATA);

    inc.addEventListener('click', increment);
    dec.addEventListener('click', decrement);
  }
  renderCount(INITFORSLIDER); //4. Call it for work
  createInitSlider();


//----PORTFOLIO---//

  const renderImage = (obj) => {  //5. created render-func as same as renderCount above ^^^^
    const currentImages = document.getElementById('worksImgAccum');
    let currentArg = obj.arr;
    const img = currentArg.reduce((accum, item) => {
      return (
        accum + `<div class="images-data">
        <img src="${item}" alt="" />
        </div>
        `
      )
    }, '');
    currentImages.innerHTML = img;
  }

  const sortImage = (e, array) => {
      if (e.currentTarget.id === array.name) {  //6 Created function for sorting images from porfolio
        renderImage(array);
        changePortChecker(e);
      }
  }

  const changePortChecker = (el) => { //7 Created function for highlighting current element's group  (web, graph and stuff like that)
    const elems = document.getElementsByClassName('sort__item');
    for (var i = 0; i < elems.length; i++) {
      elems[i].classList.remove('sort__itemClick');
    }
    el.currentTarget.classList.add('sort__itemClick');
  }

  function createInitPortfolio () { //Added wrapper for for everything above^^^ and create objects with arrays links. Also involved listeners called here.
    const sortAll = document.getElementById('sortAll');
    const sortWeb = document.getElementById('sortWeb');
    const sortGraph = document.getElementById('sortGraph');
    const sortArt = document.getElementById('sortArt');

    const WEB = {
      name: 'sortWeb',
      arr: [
      './images/article/portfolio/portfolio-1.jpeg',
      './images/article/portfolio/portfolio-2.jpeg',
      './images/article/portfolio/portfolio-3.jpeg',
      './images/article/portfolio/portfolio-4.jpeg'
      ]
    }
    const GRAPH = {
      name: 'sortGraph',
      arr: [
        './images/article/portfolio/portfolio-5.jpeg',
        './images/article/portfolio/portfolio-6.jpeg',
        './images/article/portfolio/portfolio-7.jpeg',
        './images/article/portfolio/portfolio-8.jpeg',
      ]
    }
    const ART = {
      name: 'sortArt',
      arr: [
        './images/article/portfolio/portfolio-9.jpeg',
        './images/article/portfolio/portfolio-10.jpeg',
        './images/article/portfolio/portfolio-11.jpeg',
        './images/article/portfolio/portfolio-12.jpeg',
      ]
    }
    const ALL = {
      name: 'sortAll',
      arr: [...WEB.arr, ...GRAPH.arr, ...ART.arr]
    }

    sortWeb.addEventListener('click', (e) => sortImage(e, WEB));
    sortGraph.addEventListener('click', (e) => sortImage(e, GRAPH));
    sortArt.addEventListener('click', (e) => sortImage(e, ART));
    sortAll.addEventListener('click', (e) => sortImage(e, ALL))

  }
  createInitPortfolio(); //Started
}







