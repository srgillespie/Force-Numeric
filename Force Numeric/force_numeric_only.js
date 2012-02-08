//Numeric numbers only (also backspace, tab, delete, arrows and decimal)
jQuery.fn.ForceNumericOnly =
	function () {
		return this.each(function () {
			$(this).keydown(function (e) {
				var key = e.charCode || e.keyCode || 0;
				return (
					key == 8 ||
					key == 9 ||
					key == 46 ||
					key == 110 ||
					key == 190 ||
					(key >= 37 && key <= 40) ||
					(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105));
			})
	})
};
$('#commentAutoForm input:not([type="button"])').ForceNumericOnly();
$('#commentForm input:not([type="button"])').ForceNumericOnly();
