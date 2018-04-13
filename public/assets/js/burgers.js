$(function() {
	$('change-devoured').on('click', function(event) {
		let id = $(this).data('id');
		let newDevour = $(this).data('newdevour');

		let newDevourState = {
			devoured: newDevour
		};

		//send the PUT request
		$.ajax('/api/burgers/' + id, {
			type: 'PUT',
			data: newDevourState
		}).then(
			function() {
				console.log('Changed devour to ', newDevour);
				//reload the page to get the updated list
				location.reload();
			}
		);
	});

	$('create-form').on('submit', function(event) {
		//preventing default on a submit event
		event.preventDefault();

		let newBurger = {
			burger_name: $('#bu').val().trim(),
			devoured: $("[name=devoured]:checked").val().trim()
		}

		//sending POST request to API
		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(
			function() {
				console.log('Created new Burger!');
				//reloading page to update list
				location.reload();
			}
		);
	});
})