const sendForm = ()=>{
	const btnOpenModal = document.querySelector('.card-details__button_delivery') ;
	const cardDetalisTitle = document.querySelector('.card-details__title')
	const modal = document.querySelector('.modal');
	const modalTitle = document.querySelector('.modal__title');
	const modalClose = document.querySelector ('.modal__close');
	const modalForm = document.querySelector('form');
	
	
	btnOpenModal.addEventListener('click', ()=>{
		modal.style.display = 'flex'
		modalTitle.textContent = cardDetalisTitle.textContent;
		
	})
	modalClose.addEventListener('click', ()=>{
		modal.style.display = 'none'
	})
	
	modalForm.addEventListener('submit', (even)=>{
		even.preventDefault();
		
		const lables = modal.querySelectorAll('.modal__label')
		
		const sendMessage = {};
		
		
		lables.forEach(label => {
			const span = label.querySelector('span');
			const input = label.querySelector('input');
			
			
			sendMessage[span.textContent]=input.value;
		})
		fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify(sendMessage),
     headers: {
    'Content-type': 'application/json; charset=UTF-8',
       },
      })
	  .then(() => {
		  console.log('Отправлено');
	  })
	})
}
sendForm()