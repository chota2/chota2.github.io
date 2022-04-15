import { header } from './inc/header.js';

function includeHTML(areaTag){
  if ( areaTag == 'undefiend') areaTag = '[data-include]';
  const includeArea = document.querySelectorAll(areaTag);
  for(let dom of includeArea){
      const url = dom.dataset.include;
      fetch(url)
      .then(response => response.text())
      .then(data =>{
          dom.innerHTML = data;
          dom.removeAttribute(areaTag);
      });
  }//for
}//includeHTML

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('MAIN DOM fully loaded and parsed');
  includeHTML();
});