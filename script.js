function loadCounts() {
    // Fetch arrays from localStorage
    let lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];
    let foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];

    let lostCount = lostItems.length;
    let foundCount = foundItems.length;

    // Update counts in index.html
    if (document.getElementById("lostCount")) {
        document.getElementById("lostCount").innerText = lostCount;
    }
    if (document.getElementById("foundCount")) {
        document.getElementById("foundCount").innerText = foundCount;
    }
    if (document.getElementById("reunitedCount")) {
        // Optional: reunited logic (example: min of lost & found)
        document.getElementById("reunitedCount").innerText = Math.min(lostCount, foundCount);
    }
}

// Run on page load
window.addEventListener("DOMContentLoaded", loadCounts);
