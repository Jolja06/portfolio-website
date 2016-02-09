;(function() {

	$(function() {
		$('input, textarea').placeholder();
		
		var html;

		if (html) {
			$('<p class="note">' + html + '</p>').insertBefore('form');
		}
	});

})();