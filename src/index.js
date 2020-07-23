'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClothest from 'element-closest';
elementClothest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import toggleClubMenu from './modules/clubMenu';
import showPopup from './modules/popup';


// Club menu
toggleClubMenu();

// Popup
const freeVisit = document.querySelector('.free-visit');
const freeVisitPopup = document.getElementById('free_visit_form');
const callbackBtn = document.querySelector('.callback-btn');
const callbackForm = document.getElementById('callback_form');
const fixedGiftPopup = document.getElementById('gift');
const fixedGift = document.querySelector('.fixed-gift');

showPopup(freeVisit, freeVisitPopup);
showPopup(callbackBtn, callbackForm);
showPopup(fixedGift, fixedGiftPopup, true);

