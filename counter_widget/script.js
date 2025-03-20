let count = 0;
let counting
const counterElement = document.getElementById("counter");

function startCounting() {
    if (counting) return;
    counting = setInterval(() => {
        if (count >= 100) {
            clearInterval(counting); 
            counting = null;
            return;
        }
        count++;
        counterElement.innerText = count;
    }, 50);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
        } else {
            stopCounting(); 
        }
    });
}, { threshold: 0.5 });


observer.observe(counterElement);

function stopCounting() {
    clearInterval(counting);
    counting = null;
}
