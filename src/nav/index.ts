import './nav.scss'
import calendly from '../_page-content/calendly/calendly'
const nav = document.createElement('nav');

nav.classList.add('page-options');
nav.innerHTML = require('./nav.html');
nav.appendChild(calendly);

export default nav;


