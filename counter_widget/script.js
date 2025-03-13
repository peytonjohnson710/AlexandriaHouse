function startCounting() {
    const counterElement = document.getElementById("counter");
    const targetNumber = 1000; // Change this to whatever number you want to reach
    let currentNumber = 0;

    // This function will increment the number and update the display
    function incrementCounter() {
        if (currentNumber < targetNumber) {
            currentNumber++;
            counterElement.textContent = currentNumber;
            requestAnimationFrame(incrementCounter); // Calls incrementCounter repeatedly to create the fast count effect
        }
    }

    incrementCounter(); // Start the counting process
}
