document.addEventListener("DOMContentLoaded", () => {
	// your code here
	addComments();
});



function addComments() {
	const taskForm = document.getElementById('create-task-form');

	taskForm.addEventListener('submit', function(event) {
    		event.preventDefault();


		const inputBox = event.target.querySelector('#new-task-description');
		const theList = document.querySelector('#tasks');
		const userInput = document.createElement('li');
		
		userInput.textContent = inputBox.value;
    		theList.appendChild(userInput);

	});
}
