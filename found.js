document.addEventListener("DOMContentLoaded", function () {
    // ✅ Select correct container
    let container = document.querySelector(".found-container");

    // Get found items from localStorage
    let items = JSON.parse(localStorage.getItem("foundItems")) || [];

    // If no found items → show message
    if (items.length === 0) {
        container.innerHTML = `
          <div class="no-items">
            <p>No found items yet.</p>
          </div>`;
        return;
    }

    // Loop and create a card for each found item
    items.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("found-card"); // ✅ styled in CSS

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Date:</strong> ${item.date}</p>
            <p><strong>Description:</strong> ${item.description}</p>
            <p><strong>Contact:</strong> ${item.contact}</p>
        `;

        container.appendChild(card);
    });
});
