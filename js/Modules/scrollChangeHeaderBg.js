// export default class headerAnimation {

// 	constructor(logo, hero, cabecalho) {
//         this.logo = document.querySelector(logo);
//         this.hero = document.querySelector(hero);
//         this.cabecalho = document.querySelector(cabecalho);
//     };

//     mostrar() {
//         if (this.hero.getBoundingClientRect().top < 0) {
//             this.cabecalho.classList.add('ativo')
//             this.logo.src = 'http://127.0.0.1:5500/img/logo.png'
//         } else {
//             this.cabecalho.classList.remove('ativo')
//             this.logo.src = 'http://127.0.0.1:5500/img/logo2.png'
//         };
//     }
//     init() {
//         window.addEventListener("scroll", () => {
//             this.mostrar();
//         });
//     }
    
// }