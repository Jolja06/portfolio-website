;(function() {
	$('input[type="file"]').on('change', function(){

		var fileName = $(this).val();

		$('#image-project').html(fileName);
		console.log(fileName);
	});
})();