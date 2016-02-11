var myModule = (function () {

	// Инициализирует наш модуль
	function init () {
		_setUpListners();
	}

	// Прослушивает события 
	function _setUpListners () {
		$('#popup-add').on('click', _showModal); //открыть модальное окно
		$('#add-project-form').on('submit', _addProject); //добавление проекта
	}
	// Работает с модальным окном
	function _showModal (e) {
		e.preventDefault();

		var divPopup = $('#add-project'),
			form = divPopup.find('.form');
		
		divPopup.bPopup({
			transition : 'slideUp',
			transitionClose : 'slideDown',
			speed : 500,
			onClose : function(){
				form.find('.server-mes').text('').hide();
				form.trigger('reset');
			}
		});
	}

	//Добавляет проект
	function _addProject (e) {
		e.preventDefault();
		var form = $(this), //теперь это jQuery объект 
			url = 'add_project.php',
			devObj = _ajaxForm(form, url);
			//проверяем, а был ли запрос на сервер
			if(devObj){
				devObj.done(function(ans) {
					
					var successBox = form.find('.success-mes'),
						errorBox = form.find('.error-mes');

					if(ans.status === 'OK'){
						errorBox.hide();
						successBox.text(ans.text).show();
					} else {
						successBox.hide();
						errorBox.text(ans.text).show();
					}
				})
			}
		
	}

	//Универсальная функция
	//Для ее работы используется 
	//@form - форма
	//@url - адрес php файл, к которому мы обращается
	//1. Собирает данные из формы
	//2. Проверяет форму
	//3. Делает запрос на сервер и возвращаетс ответ с сервера 
	function _ajaxForm (form, url) {
		//1. Проверить форму
		//2. Собрать данные из формы
		//3. Вернуть ответ с сервера

		if (!validation.validateForm(form)) return false;

		data = form.serialize();

		var result = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data
		})

		//ошибка со стороны php
		.fail(function() {
			console.log("error");
		})	

		return result;

	}

	// Возвращаем объект (публичные методы) 
	return {
		init: init
	};

})();

// Вызов модуля
myModule.init();