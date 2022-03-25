function includeHTML(){
  const includeArea = document.querySelectorAll('[data-include]');

  for(let dom of includeArea){
      const url = dom.dataset.include;
      fetch(url)
      .then(response => response.text())
      .then(data =>{
          dom.innerHTML = data;
          dom.removeAttribute('data-include');
      });
  }//for
}//includeHTML


window.addEventListener('DOMContentLoaded', (event) => {
  console.log('MAIN DOM fully loaded and parsed');
  includeHTML();
});