var validation = (function () {

	//Инициализация 
	function init () {
		_setUpListners();
	}

	//Слушатель событий
	function _setUpListners () {
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', _clearForm);

	}
	//Создание тултипов
	function _createQtip (element, position) {
		//позиция тултипа
		if (position === 'right') {
			position = {
				my : 'left center',
				at : 'right center'
			}
		} else {
			position = {
				my : 'right center',
				at : 'left center',
				adjust : {
					method : 'shift none'
				}
			}
		}

		//Инициализация тултипа
		element.qtip({
			content : {
				text : function () {
					return $(this).attr('qtip-content');
				}
			},
			show : {
				event : 'show'
			},
			hide : {
				event : 'keydown hideTooltip'
			},
			position : position,
			style : {
				classes : 'qtip-mystyle qtip-rounded',
				tip : {
					hight : 10,
					width : 8
				}
			}
		}).trigger('show');
	}

	//Универстальная функция валидации
	function validateForm (form) {


		var elements = form.find('input', 'textarea').not('input[type="file"]'),
			valid = true;

		//Проход по всем элементам формы
		$.each(elements, function (index, value){
			var element = $(value),
				value = element.val(),
				pos = element.attr('qtip-position');

			if(value.length === 0) {
				element.addClass('has-error');
				_createQtip(element, pos);
				valid = false;
			}
		});

		return valid;
	}

	function _removeError () {
		$(this).removeClass('has-error');
	}

	function _clearForm (form) {
		var form = $(this);
		form.find('.input, .textarea').trigger('hideTooltip');
		form.find('.has-error').removeClass('has-error');

	}
	//Возврат публичных методов 
	return {
		init : init,
		validateForm : validateForm
	}
}

)();

//Вызов модуля
validation.init();