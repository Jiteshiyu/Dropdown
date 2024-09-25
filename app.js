document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function(event) {
            event.stopPropagation();

            dropdowns.forEach((d)=> {
                if(d !== dropdown){
                    d.querySelector(".dropdown-list").style.display = "none";
                }
            });

            const dropdownList = dropdown.querySelector(".dropdown-list");

            if(dropdownList.style.display === "block"){
                dropdownList.style.display = "none";
            } else {
                dropdownList.style.display = "block";
            }
        });
    });

    document.addEventListener("click", function() {
        dropdowns.forEach((dropdown) => {
            dropdown.querySelector('.dropdown-list').style.display = 'none';
        })
    })
})
