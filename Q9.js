

$('#create').on('click', function() {
	var count = 0;
	if ($('#checkbox1').prop('checked')) {
		count += 1
	}

	if ($('#checkbox2').prop('checked')) {
		count += 1
	}

	if ($('#checkbox3').prop('checked')) {
		count += 1
	}
	
	if(count === 3) {
		$('ul').append('<li class="black">black</li>');
	} else if (count === 2) {
		
		$('ul').append('<li class="purple">purple = <span class="blue">blue</span> + <span class="red">red</span></li>');
	} else if (count === 1) {
		
		$('ul').append('<li class="blue">blue</li>')
	}
})




$('#remove').on('click', function() {
	$('li').remove();
})