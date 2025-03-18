let count = 0;
let counting; // Stores interval ID

function startCounting() {
    if (counting) return; // Prevent multiple intervals
    counting = setInterval(() => {
        count++;
        document.getElementById("counter").innerText = count;
    }, 100); // Adjust speed if needed
}

// Stop counting when the button is released
function stopCounting() {
    clearInterval(counting);
    counting = null;
}

// Add event listeners when DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("count-button");
    button.addEventListener("mousedown", startCounting);
    button.addEventListener("mouseup", stopCounting);
    button.addEventListener("mouseleave", stopCounting); // Stops if cursor leaves button
});
