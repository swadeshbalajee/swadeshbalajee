/**
   * Skills animation
   */
 const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
function loadanimate(){
 let skilsContent = select('.skills-content');
 if (skilsContent) {
   new Waypoint({
     offset: '80%',
     element: skilsContent,
     
     handler: function(direction) {
       let progress = select('.progress .progress-bar', true);
       progress.forEach((el) => {
         el.style.width = el.getAttribute('aria-valuenow') + '%'
       });
     }
   })
 }
// alert('welcome');
}
