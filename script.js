// Select the screen element where results are displayed
var screen = document.querySelector('#screen');
// Select all elements with the class 'btn' (buttons)
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of each button, we use a for loop ============*/
for (item of btn) {
    // Add a click event listener to each button
    item.addEventListener('click', (e) => {
        // Get the text content of the clicked button
        btntext = e.target.innerText;

        // If the button text is '×', replace it with '*' for multiplication
        if (btntext == '×') {
            btntext = '*';
        }

        // If the button text is '÷', replace it with '/' for division
        if (btntext == '÷') {
            btntext = '/';
        }
        // Append the button text to the screen's value
        screen.value += btntext;
    });
}

// Function to calculate the sine of the current screen value
function sin() {
    screen.value = Math.sin(screen.value);
}

// Function to calculate the cosine of the current screen value
function cos() {
    screen.value = Math.cos(screen.value);
}

// Function to calculate the tangent of the current screen value
function tan() {
    screen.value = Math.tan(screen.value);
}

// Function to square the current screen value
function pow() {
    screen.value = Math.pow(screen.value, 2);
}

// Function to calculate the square root of the current screen value
function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

// Function to calculate the natural logarithm of the current screen value
function log() {
    screen.value = Math.log(screen.value);
}

// Function to display the value of Pi on the screen
function pi() {
    screen.value = 3.14159265359;
}

// Function to display the value of Euler's number (e) on the screen
function e() {
    screen.value = 2.71828182846;
}

// Function to calculate the factorial of the current screen value
function fact() {
    var i, num, f;
    f = 1; // Initialize factorial result as 1
    num = screen.value;
    // Calculate factorial by multiplying each integer up to 'num'
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    // Set the screen value to the calculated factorial
    screen.value = f;
}

// Function to remove the last character from the screen's value
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}