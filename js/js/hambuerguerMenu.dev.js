"use strict";

var iconMenu = document.querySelector('#icon-menu');
menu = document.querySelector('#menu');
iconMenu.addEventListener('click', function (e) {
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');
});