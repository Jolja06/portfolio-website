/*;(function() {
	$('input[type="file"]').on('change', function(){

		var fileName = $(this).val()replace( "C:\\fakepath\\", '' );

		$('#image-project').html(fileName);
		console.log(fileName);
	});
})();*/

var addFile = (function () {
	function init () {
		_setUpListner;
	}

	function _setUpListner() {
		$('input[type="file"]').on('change', _inputFile)
	}

	function  _inputFile () {
		var fileName = $(this).val().replace( "C:\\fakepath\\", '' );

		$('#image-project').text(fileName);
		console.log(fileName);
	}
	return {
		init : init
	}
})();
addFile.init();
