$(document).ready(function () {
		$.getJSON('https://finance.google.com/finance/info?client=ig&q=NYSE:FB&callback=?', function (data) {
			$('#apple').text(data[0].l);
		});
	});