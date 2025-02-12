// csl.js

(function() {
    // Get the display screen element
    let screen = document.querySelector('.screen');

    // Get all buttons with the class 'btn'
    let buttons = document.querySelectorAll('.btn');

    // Get the clear and equal buttons
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Add click event listener to all buttons
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the data-num attribute value (if any)
            let value = button.getAttribute('data-num');
            // If the button has a value, append it to the screen input
            if (value) {
                screen.value += value;
            }
        });
    });

    // Clear the screen when the clear button is clicked
    clear.addEventListener('click', function() {
        screen.value = '';
    });

    // Evaluate the expression when the equal button is clicked
    equal.addEventListener('click', function() {
        try {
            // Use eval() to calculate the result and update the screen
            screen.value = eval(screen.value);
        } catch (e) {
            screen.value = "Error";
        }
    });
})();
