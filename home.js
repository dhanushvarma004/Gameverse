function searchGames() {
    // Get the search input value
    const searchInput = document.querySelector('.search-container input[type="text"]').value.toLowerCase();

    // Get all the game boxes
    const gameBoxes = document.querySelectorAll('.game-box');

    // Loop through the game boxes and hide/show based on the search input
    gameBoxes.forEach(gameBox => {
        const gameTitle = gameBox.querySelector('.game-title').innerText.toLowerCase();
        const gameDescription = gameBox.querySelector('.game-description').innerText.toLowerCase();

        if (gameTitle.includes(searchInput) || gameDescription.includes(searchInput)) {
            gameBox.style.display = 'block';
        } else {
            gameBox.style.display = 'none';
        }
    });
}

// Add event listener to the search button
document.querySelector('.search-container button[type="submit"]').addEventListener('click', searchGames);

// Add event listener to the search input to trigger search on Enter key press
document.querySelector('.search-container input[type="text"]').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchGames();
    }
});