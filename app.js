class ScrollToService {
    htmlEl = null;
  
    constructor() { 
      this.htmlEl= document.querySelector('html');
      this.htmlEl.classList.add('html-scroll-snap');
    }
  
    fn(elementId){
      switch(elementId[0]){
        case '#' : {
          try {
            this.animateScroll(document.getElementById(elementId.slice(1)));
            break
          } catch {
            console.warn('no element has been found');
            break
          }
        }
        case '.' : {
          try {
            this.animateScroll(document.querySelector(elementId));
            break
          } catch {
            console.warn('no element has been found');
            break
          }
        }
        default : {
          try {
            this.animateScroll(document.querySelector(elementId));
            break
          } catch {
            console.warn('no element has been found');
            break
          }
        }
      }
    }
    animateScroll(el){  
      this.htmlEl.classList.remove('html-scroll-snap');
      
      let startTime = null;
      const anmiationD = 500;
      
      let pageScrollY = window.pageYOffset;
      
      const deltaY =  el.offsetTop - window.pageYOffset;
      
      const stepY = deltaY / (anmiationD / 100 * 6);
      
      function animatingScroll(timestamp){
        if( startTime === null ){
          startTime = timestamp;
        } 
  
        const elapesd = timestamp - startTime;
        
        pageScrollY = pageScrollY + stepY;
  
        window.scrollTo(0, pageScrollY);
  
        if ( elapesd < anmiationD ) {
          window.requestAnimationFrame(animatingScroll);
        }else{
          this.htmlEl.classList.add('html-scroll-snap');
        }
      }
      window.requestAnimationFrame(animatingScroll);
    }
}
const targetEl = document.getElementById('section2');
const outputEl = document.querySelector('.text');
setInterval((event)=>{
    // const pageScrollY = window.pageYOffset;
    // const elOffsetTop =  targetEl.offsetTop;
    outputEl.innerHTML = `<p> Page Scroll Y: ${window.pageYOffset} </p><p> El Offset Top: ${targetEl.offsetTop} </p>`;
    
}, 1000);
console.log(document.querySelector('body'));