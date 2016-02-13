/*;(function() {
	$('input[type="file"]').on('change', function(){

<<<<<<< HEAD
		var fileName = $(this).val().replace( "C:\\fakepath\\", '' );
=======
		var fileName = $(this).val()replace( "C:\\fakepath\\", '' );
>>>>>>> 170fd4e7381423c19a63e670beddf2a33ae6325c

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
