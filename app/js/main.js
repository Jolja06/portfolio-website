var validation = (function(){

	function init() {
		_setUpListner();
		

	}

	function _setUpListner() {
		$('form').on('submit', _onSubmit);
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', clearForm);

	}

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
					width : 10
				}
			}
		}).trigger('show');
	}

	function _onSubmit (e) {
		e.preventDefault();

		var form = $(this),
			btnSubmit = form.find('button[type="submit"]');

		if(!validateForm(form)) return false;

		btnSubmit.attr('disabled', 'disabled');

		console.log('go in ajax');

	}

	function validateForm (form) {
		var elements = form.find('input, textarea').not('input[type="file"]'),
			valid = true;

		$.each(elements, function (index, val) {
			var element = $(val),
				val = element.val(),
				tooltip = element.attr('qtip-position');

			if(val.length === 0){
				element.addClass('has-error');
				_createQtip(element, tooltip)
				valid = false;
			} 
		});

		return valid;
	}

	function clearForm () {
		var form = $(this);
		form.find('.has-error').removeClass('has-error');
		form.find('input, textarea').trigger('hideTooltip');
	}

	function _removeError () {
		$(this).removeClass('has-error');
	}

	return {
		init : init,
		validateForm : validateForm,
		clearForm : clearForm
	}

})();

var popUp = (function () {

	function init () {
		_setUpListner();
	}

	function _setUpListner () {
		$('#popup-add').on('click', _showPopup);
	}

	function _showPopup (e) {
		e.preventDefault();
		
		var divPopup = $('#add-project');

		divPopup.bPopup({
			transition : 'slideUp',
			transitionClose : 'slideDown',
			speed : 500,
			follow: [false, false],
			onClose : validation.clearForm
		});

	}

	return {
		init : init
	}

})();
validation.init();
popUp.init();