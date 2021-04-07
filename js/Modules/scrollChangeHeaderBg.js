export default class headerAnimation {

	constructor(logo, hero, cabecalho) {
        this.logo = document.querySelector(logo);
        this.hero = document.querySelector(hero);
        this.cabecalho = document.querySelector(cabecalho);
    };

    mostrar() {
        if (this.hero.getBoundingClientRect().top < 0) {
            this.cabecalho.classList.add('ativo')            
        } else {
            this.cabecalho.classList.remove('ativo')            
        };
    }
    init() {
        window.addEventListener("scroll", () => {
            this.mostrar();
        });
    }
    
}