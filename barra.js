var IconWhatsapp = document.querySelector('#icon-whatsapp');
		var formulariowtsp = document.getElementById('formulariowtsp');
		var closemodal = document.querySelector('.closemodal');
		var sendbttn = document.querySelector('#sendbttn');

	
		IconWhatsapp.addEventListener('click' , function(){
			formulariowtsp.classList.toggle('entrarysalir')
		})

		closemodal.addEventListener('click' , function(){
			formulariowtsp.classList.remove('entrarysalir')
		})