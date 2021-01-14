
import ScrollTop from './modules/scroll-top.js';
import ScrollSuave from './modules/scroll-suave.js';


import initAnimacaoScroll from './modules/animacao-scroll.js';

const scrollTop = new ScrollTop('.ceta');
scrollTop.init();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]', '.btn');
scrollSuave.init();



initAnimacaoScroll()