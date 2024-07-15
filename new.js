document.addEventListener("DOMContentLoaded", function() {
    // Selecting all category buttons
    const allButton = document.getElementById('AllButton');
    const actionButton = document.getElementById('actionButton');
    const adventureButton = document.getElementById('adventureButton');
    const simulationButton = document.getElementById('simulationButton');
    const horrorButton = document.getElementById('horrorButton');
    const sportsButton = document.getElementById('sportsButton');

    // Selecting all game boxes
    const gameBoxes = document.querySelectorAll('.game-box');

    // Function to show only selected category and hide others
    function showCategory(category) {
        gameBoxes.forEach(box => {
            box.style.display = 'none'; // Hide all game boxes
            if (box.classList.contains(category)) {
                box.style.display = 'block'; // Show game boxes of selected category
            }
        });
    }

    // Event listeners for category buttons
    allButton.addEventListener('click', function() {
        showCategory('game-box');
        setActiveButton(allButton);
    });

    actionButton.addEventListener('click', function() {
        showCategory('action');
        setActiveButton(actionButton);
    });

    adventureButton.addEventListener('click', function() {
        showCategory('adventure');
        setActiveButton(adventureButton);
    });

    simulationButton.addEventListener('click', function() {
        showCategory('simulation');
        setActiveButton(simulationButton);
    });

    horrorButton.addEventListener('click', function() {
        showCategory('horror');
        setActiveButton(horrorButton);
    });

    sportsButton.addEventListener('click', function() {
        showCategory('sports');
        setActiveButton(sportsButton);
    });

    // Function to set active button styling
    function setActiveButton(activeButton) {
        // Reset active class from all buttons
        const categoryButtons = document.querySelectorAll('.sidebar button');
        categoryButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Set active class to the clicked button
        activeButton.classList.add('active');
    }

    // Initially show all games on page load
    showCategory('game-box');
    setActiveButton(allButton);
});