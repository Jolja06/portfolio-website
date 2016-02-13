;(function() {
	$('input[type="file"]').on('change', function(){

		var fileName = $(this).val().replace( "C:\\fakepath\\", '' );

		$('#image-project').html(fileName);
		console.log(fileName);
	});
})();