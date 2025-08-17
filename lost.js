// lost.js

document.addEventListener("DOMContentLoaded", () => {
    // 🔑 Use the correct storage key (matches report.js)
    let lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];
    let container = document.getElementById("lostItemsContainer");

    function renderItems(filter = "all") {
        container.innerHTML = "";

        let filtered = lostItems;

        if (filter === "today") {
            let today = new Date().toISOString().split("T")[0];
            filtered = lostItems.filter(item => item.date === today);
        } else if (filter === "week") {
            let today = new Date();
            let sevenDaysAgo = new Date(today);
            sevenDaysAgo.setDate(today.getDate() - 7);

            filtered = lostItems.filter(item => {
                let itemDate = new Date(item.date);
                return itemDate >= sevenDaysAgo && itemDate <= today;
            });
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="no-items">
                    <i class="fa-solid fa-box-open fa-2x"></i>
                    <p>No lost items found for this filter.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(item => {
            let card = document.createElement("div");
            card.classList.add("lost-card");

            card.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Date:</strong> ${item.date}</p>
                <p><strong>Description:</strong> ${item.description}</p>
                <p><strong>Contact:</strong> ${item.contact}</p>
            `;

            container.appendChild(card);
        });
    }

    // Initial load
    renderItems();

    // Filter button handling
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderItems(btn.dataset.filter);
        });
    });
});
