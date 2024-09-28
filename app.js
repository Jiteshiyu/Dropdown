document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        // Add click event listener to each dropdown
        dropdown.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent click events from bubbling up

            // Close other open dropdowns
            dropdowns.forEach((d) => {
                if (d !== dropdown) {
                    d.querySelector(".dropdown-list").style.display = "none";
                }
            });

            // Toggle the display of the current dropdown's list
            const dropdownList = dropdown.querySelector(".dropdown-list");
            if (dropdownList.style.display === "block") {
                dropdownList.style.display = "none";
            } else {
                dropdownList.style.display = "block";
            }
        });
    });

    // Close all dropdowns when clicking outside of them
    document.addEventListener("click", function() {
        dropdowns.forEach((dropdown) => {
            dropdown.querySelector('.dropdown-list').style.display = 'none';
        });
    });
});
