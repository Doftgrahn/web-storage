$(document).ready(function() {
	const state = {
		todoList: []
	};

	// check if there is an existing user name
	// and display it in <h2>
	let existingUser = localStorage.getItem('username');
	if( existingUser !== null ) {
		$('#userGreeting').html(`All makt åt ${existingUser}!`);
	}

	// check if there is a list
	let existingListAsAString = localStorage.getItem('todoList');
	if( existingListAsAString !== null ) {
		state.todoList = JSON.parse(existingListAsAString);
		// populate <ul>
		// for or forEach
		state.todoList.forEach(item => {
			$('#todoList').append(`<li>${item}</li>`);
		})
	}

	// save user name when button is clicked
	$('#saveNameButton').click(event => {
		let value = $('#nameInput').val();
		localStorage.setItem('username', value);
	})

	$('#todoButton').click(event => {
		let value = $('#todoInput').val();
		$('#todoList').append(`<li>${value}</li>`);
		state.todoList.push(value);
		localStorage.setItem('todoList', JSON.stringify(state.todoList));
	})
});
