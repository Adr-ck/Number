document.addEventListener("DOMContentLoaded", function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    console.log("Random number:", randomNumber);

    document.getElementById("guessForm").onsubmit = function (e) {
        e.preventDefault();
        const guess = parseInt(document.getElementById("guess").value);
        attempts++;

        console.log("Guess:", guess);
        console.log("Attempts:", attempts);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }

        let message = "";
        if (guess < randomNumber) {
            message = `Too low! Try again. Attempts: ${attempts}`;
        } else if (guess > randomNumber) {
            message = `Too high! Try again. Attempts: ${attempts}`;
        } else {
            message = `🎉 Congratulations! You guessed it in ${attempts} attempts!`;
            document.getElementById("resetGame").style.display = "inline";
        }

        console.log("Message:", message);

        document.getElementById("resultText").textContent = message;
        document.getElementById("result").style.display = "block";

        if (attempts >= 10 && guess !== randomNumber) {
            document.getElementById("resultText").textContent = "Game over! You've used all your attempts.";
            document.getElementById("result").style.display = "block";
            document.getElementById("guessForm").style.display = "none";
            document.getElementById("resetGame").style.display = "inline";
        }

        // Reset the input field
        document.getElementById("guess").value = "";
    };

    document.getElementById("resetGame").onclick = function () {
        location.reload();
    };
});