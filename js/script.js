const ceta = document.querySelector('.ceta');
const btn = document.querySelector('.btn');
const grid = document.querySelector('.grid');

function initScrollSuave() {
	const links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

	function scrollSuave(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute("href");
		const section = document.querySelector(href);
		section.scrollIntoView({
			block:'start',
			behavior: 'smooth'
		})
	}

	links.forEach((link)=>{
		link.addEventListener("click", scrollSuave);
	});
	
	ceta.addEventListener("click", scrollSuave);
	btn.addEventListener("click", scrollSuave);
}
initScrollSuave();


function initAnimacaoScroll() {
	
	const downs = document.querySelectorAll('[data-anime="down"]');
	const ups = document.querySelectorAll('[data-anime="up"]');


	const windowMetade = window.innerHeight * 0.8;

	function animationScroll(){
		
		if (grid.classList.contains('ativo')) {
			ceta.classList.add('ativo');
		}else{
			ceta.classList.remove('ativo');
		}

		downs.forEach((down)=>{
			const top = down.getBoundingClientRect().top;
			const isVisible = (top - windowMetade) < 0;
			if (isVisible) {
				down.classList.add("ativo");
			}else{
				down.classList.remove("ativo");
			}
		});
		ups.forEach((up)=>{
			const top = up.getBoundingClientRect().top;
			const isVisible = (top - windowMetade) < 0;
			if (isVisible) {
				up.classList.add("ativo");
			}else{
				up.classList.remove("ativo");
			}
		});
	}
	window.addEventListener("scroll", animationScroll);
}
initAnimacaoScroll();