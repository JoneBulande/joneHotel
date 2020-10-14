///////////////////////////////////////////////
/////| ANIMAÇÃO AO SCROLL
///////////////////////////////////////////////
export default function initAnimacaoScroll() {
	const ceta = document.querySelector('.ceta'),
				grid = document.querySelector('.grid'),
				downs = document.querySelectorAll('[data-anime="down"]'),
			 	ups = document.querySelectorAll('[data-anime="up"]'),
				windowMetade = window.innerHeight * 0.8;

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