function addingEventListener() {
    // Select the button element with id 'button'
    const input = document.getElementById('button');
    
    // Define the event listener function
    function clickAlert() {
        alert('I was clicked!');
    }
    
    // Attach the event listener to the button element
    input.addEventListener('click', clickAlert);
}

// Call the function to ensure the event listener is added when the script runs
addingEventListener();

