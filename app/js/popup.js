var myModule = (function () {

	// Инициализирует наш модуль
	function init () {
		_setUpListners();
	};

	// Прослушивает события 
	function _setUpListners () {
		$('#popup-add').on('click', _showModal); //открыть модальное окно
		$('#add-project-form').on('submit', _addProject); //добавление проекта
	}

	function _showModal (e) {
		e.preventDefault();
		
		$('#add-project').bPopup({
			transition : 'slideUp',
			transitionClose : 'slideDown',
			speed : 500
		});
	}

	function _addProject (e) {
		e.preventDefault();
		console.log('Add progect');

		var form = $(this), //теперь это jQuery объект 
			url = 'add_project.php',
			data = form.serialize();

		console.log(form);

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(answer) {
			console.log("success");
			console.log(answer);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	}

	// Возвращаем объект (публичные методы) 
	return {
		init: init
	};

})();

// Вызов модуля
myModule.init();