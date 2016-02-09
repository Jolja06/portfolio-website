;(function() {

	$(function(){
		$('#popup-add').on('click', function(e){
			e.preventDefault();

			$('#add-project').bPopup({
				transition : 'slideUp',
				transitionClose : 'slideDown',
				speed : 500
			});
		});
	});

})();