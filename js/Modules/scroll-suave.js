///////////////////////////////////////////////
/////| SCROLL SUAVE
///////////////////////////////////////////////
export default class ScrollSuave {

	constructor(links, btn) {
		this.btn = document.querySelector(btn);
		this.links = document.querySelectorAll(links);
		
		this.scrollSuave = this.scrollSuave.bind(this);
	};
	
	scrollSuave(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute("href");
		const section = document.querySelector(href);
		section.scrollIntoView({
			block:'start',
			behavior: 'smooth'
		})
	}
	
	addEvent() {
		this.links.forEach(link => {
			link.addEventListener('click', this.scrollSuave);
		});
		this.btn.addEventListener('click', this.scrollSuave);
	}

	init() {
		if(this.links.length) {
			this.addEvent();
		}
		
	}
	
}