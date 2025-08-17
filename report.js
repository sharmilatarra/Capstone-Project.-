document.getElementById("reportForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // ✅ Use IDs (matches your current HTML)
    let type = document.getElementById("type").value;
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let location = document.getElementById("location").value;
    let date = document.getElementById("date").value;
    let contact = document.getElementById("contact").value;

    // ✅ Include type in the item object
    let item = { type, name, description, location, date, contact };

    // Decide storage key based on type
    let storageKey = (type === "Lost") ? "lostItems" : "foundItems";

    // Fetch existing items from localStorage
    let items = JSON.parse(localStorage.getItem(storageKey)) || [];
    items.push(item);

    // Save back to localStorage
    localStorage.setItem(storageKey, JSON.stringify(items));

    alert("Report submitted successfully!");
    window.location.href = "index.html";  // Redirect to home page
});
