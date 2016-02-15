;(function() {
	$('input[type="file"]').on('change', function(){
		var fileName = $(this).val().replace(/.+[\\\/]/, "");
		$('#image-project-name').html(fileName);
	});
})();
