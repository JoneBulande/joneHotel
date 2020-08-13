function initScrollSuave() {
	const links = document.querySelectorAll(".menu a");

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
		link.addEventListener("click", scrollSuave)
	});
}
initScrollSuave();


const sections = document.querySelectorAll(".js");
function scrollAnimation() {
/*	sections.forEach((section)=>{
		console.log(section);
	});*/
}

window.addEventListener("scroll", scrollAnimation)