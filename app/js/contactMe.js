var contactMe = (function () {
	
	function init () {
		_setUpListner();
	}

	function _setUpListner () {
		$('#callback').on('submit', _submitForm);
	}

	function _submitForm (e) {
		console.log('Отправка формы');
		e.preventDefault();

		var form = $(this),
			url = 'callback.php'
			defObj = _ajaxForm(form, url);
			//что-то будем делать с ответом с сервера defObj

	}

	function _ajaxForm (form, url) {
		console.log('ajax запрос, но с проверкой')
		//унвиерсальная функция
		if (!validation.validateForm(form)) return false;

		//Если false, то код ниже не произойдет никогда 
	}

	return{
		init : init
	}
})();

contactMe.init();