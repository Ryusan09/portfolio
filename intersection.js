const headings = document.querySelectorAll('.popup')
const observer = new IntersectionObserver(popupElements)

function popupElements(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  })
}

headings.forEach(heading => {
  observer.observe(heading)
})

const displayNone = document.querySelector('.display_none');
		const dis_none_bt = document.querySelector('.dis_none_bt');
		
		dis_none_bt.addEventListener('click' ,  () => {
		if(displayNone.classList.contains('active')){
			displayNone.style.display = 'none';
			displayNone.classList.remove('active');
		}
		else {
			displayNone.style.display = 'block';
			displayNone.classList.add('active');
		}
		});



