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
import mainSlider from './modules/main-slider';
import showBurgerMenu from './modules/burgerMenu';
import formValidation from './modules/formValidation';
import sendFormData from './modules/form';


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

// Main slider

const sliderMain = document.querySelector('.main-slider');
const sliderMainItems = sliderMain.querySelectorAll('.slide');

mainSlider(sliderMain, sliderMainItems);

// Burget menu

showBurgerMenu();

// Forms

formValidation();

const bannerForm = document.getElementById('banner-form');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('footer_form');
const form4 = document.getElementById('card_order');

sendFormData(bannerForm);
sendFormData(form1);
sendFormData(form2);
sendFormData(form3);
sendFormData(form4);



