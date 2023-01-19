import './style.css';

import display from './process.js';
import Activites from './activities.js';

const inputList = document.getElementById('inputList');
const addList = document.getElementById('addList');

inputList.addEventListener('submit', (e) => {
  e.preventDefault();
  display.addLists(addList.value);
  addList.value = '';
});

document.querySelector('#btnClear').addEventListener('click', Activites.clearCompletedToDoLists);

window.addEventListener('load', () => {
  document.addEventListener('listUpdated', () => {
    Activites.checkStatusEvent();
  }, false);
  Activites.checkStatusEvent();
});

display.showLists();