function foundCarouselWrapper() {
    carouselParent = document.querySelector('#carousel');
   }
    
    // <ul> 
    // <li> <a> </a> </li>
    // </ul>
    function createSlides(nthSlides) {
      let slidesParent = document.createElement('ul');
      slidesParent.setAttribute('class', 'slides');
  
      for (i = 0; i < nthSlides; i++) {
        let slides__item = document.createElement('li');
        let slides__link = document.createElement('a');
  
        slides__item.setAttribute('class',
          i === 0 ? 'slides__item active' : 'slides__item'
        );
        slides__link.setAttribute('href', '#');
        slides__item.appendChild(slides__link);
        slidesParent.appendChild(slides__item);
      }
      carouselParent.appendChild(slidesParent);
    };
  
    // <div> 
    // <span>  </span>
    // </div>
    function createIndicators(nthIndicators) {
      let indicatorsParent = document.createElement('div');
      indicatorsParent.setAttribute('class', 'indicators');
  
      for (i = 0; i < nthIndicators; i++) {
        let indicators__item = document.createElement('span');
        indicators__item.setAttribute('class',
          i === 0 ? 'indicators__item active' : 'indicators__item'
        );
        indicators__item.setAttribute('data-slide-to', i);
        indicatorsParent.appendChild(indicators__item);
      }
      carouselParent.appendChild(indicatorsParent);
    }
   
    // <div> 
    // <div> <i> </i> </div>
    // </div>
    function createControls(nthControls = 5) {
      let controlsParent = document.createElement('div');
      controlsParent.setAttribute('class', 'controls');
  
      for (i = 0; i < nthControls; i++) {
        let controls__item = document.createElement('div');
        let controls__fas = document.createElement('i');
  
        if (i === 0) {
          controls__item.setAttribute('class', 'controls__item controls__prev');
          controls__fas.setAttribute('class', 'fas fa-chevron-left');
          controls__item.appendChild(controls__fas);
          controlsParent.appendChild(controls__item);
  
        }
        if (i === 1) {
          controls__item.setAttribute('class', 'controls__item controls__next');
          controls__fas.setAttribute('class', 'fas fa-chevron-right');
          controls__item.appendChild(controls__fas);
          controlsParent.appendChild(controls__item);
  
        }
        if (i === 2) {
          controls__item.setAttribute('class', 'controls__item controls__pause');
          controls__fas.setAttribute('class', 'fas fa-play');
          controls__item.appendChild(controls__fas);
          controlsParent.appendChild(controls__item);
          break;
        }
      }
      carouselParent.appendChild(controlsParent);
    }
    
    // функция присвоения стиля элементам по классам
    function createStyle() {
      styleContainer = document.createElement('style');
      let styleCode = `
      .slides {
        position: relative;
      }
      .controls {
        position: relative;
      }
      .indicators {
        display: flex;
      }
      .indicators__item {
        display: block;
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 50%;
        background-color: blue;
        border:2px solid blue; 
      }`;
      styleContainer.innerHTML = styleCode;
      carouselParent.appendChild(styleContainer);
    }
  
    function Handler(e) {
      let target = e.target;
  
      if (target.classList.contains('indicators__item')) {
        target.style.backgroundColor = 'red';
  
        if (prevIndicator !== null) prevIndicator.removeAttribute('style');
  
        prevIndicator = target;
      }
    }
  
    function clickListener() {
      let indicatorsContainer = document.querySelector('.indicators');
      indicatorsContainer.addEventListener('click', Handler);
    }
  
    function createCarousel(n) {
      foundCarouselWrapper();
      createSlides(n);
      createIndicators(n);
      createControls(nthControls = 3);
      createStyle();
      clickListener();
    }
    createCarousel(5);