const dropdown = document.getElementById('destinations');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdown.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show'); // Toggles the 'show' class on click
});

// Optional: Close dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});