const num2 = Math.floor(Math.random() * 10 + 1);
console.log(num2);
let x = 0; // Attempts counter

function guess() {
    if (x < 2) {
        const num1 = Number(document.getElementById('num2').value);
        let result;

        if (isNaN(num1)) {
            result = "Enter a valid number.";
        } else if (num1 < num2) {
            x++;
            result = "\nIs too low. \nAttempts left "+x;
            result.x
        } else if (num1 > num2) {
            x++;
            result = "\nIs too high. \nAttempts left "+x;
        } else {
            x++;
            result = "\nIs correct!. \nYou have Guseed in "+x+"Attempts";
        }

        document.getElementById('result').innerText = result;
    } else { 
        document.getElementById('result').innerText = "\nNo more attempts left. Reload the page to play again!";
    }
}