export default class ScrollTop {

	constructor(btnUp) {
		this.btn = document.querySelector(btnUp);
	};	
    
	scrollSuaveTop(event) {
	  event.preventDefault();
		const href = event.currentTarget.getAttribute("href");
	 	const section = document.querySelector(href);	      
	  section.scrollIntoView({
			block:'start',
			behavior: 'smooth'
		});
	}
	
	addEvent() {		
		this.btn.addEventListener('click', this.scrollSuaveTop)
	}

	init() {
		this.addEvent();
	}
	
}