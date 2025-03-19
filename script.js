// Mock movie data
const movies = [
    { id: 1, title: 'Movie A', genre: 'animation', img: 'https://via.placeholder.com/200x300' },
    { id: 2, title: 'Movie B', genre: 'action', img: 'https://via.placeholder.com/200x300' },
    { id: 3, title: 'Movie C', genre: 'adventure', img: 'https://via.placeholder.com/200x300' },
    { id: 4, title: 'Movie D', genre: 'comedy', img: 'https://via.placeholder.com/200x300' },
    { id: 5, title: 'Movie E', genre: 'crime', img: 'https://via.placeholder.com/200x300' },
    { id: 6, title: 'Movie F', genre: 'horror', img: 'https://via.placeholder.com/200x300' },
    { id: 7, title: 'Movie G', genre: 'fantasy', img: 'https://via.placeholder.com/200x300' },
    { id: 8, title: 'Movie H', genre: 'sci-fi', img: 'https://via.placeholder.com/200x300' },
    { id: 9, title: 'Movie I', genre: 'musical', img: 'https://via.placeholder.com/200x300' },
    { id: 10, title: 'Movie J', genre: 'war', img: 'https://via.placeholder.com/200x300' },
    { id: 11, title: 'Movie K', genre: 'romance', img: 'https://via.placeholder.com/200x300' },
    { id: 12, title: 'Movie L', genre: 'thriller', img: 'https://via.placeholder.com/200x300' },
    { id: 13, title: 'Movie M', genre: 'sports', img: 'https://via.placeholder.com/200x300' },
    { id: 14, title: 'Movie N', genre: 'historical drama', img: 'https://via.placeholder.com/200x300' },
];

// Load watchlist from Local Storage
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

// Display movies
function displayMovies(filteredMovies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <button class="add-btn" data-id="${movie.id}">${watchlist.some(item => item.id === movie.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}</button>
        `;
        movieList.appendChild(movieCard);

        movieCard.querySelector('button').addEventListener('click', toggleWatchlist);
    });
}

// Toggle watchlist
function toggleWatchlist(event) {
    const button = event.target;
    const movieId = parseInt(button.getAttribute('data-id'));
    const movie = movies.find(m => m.id === movieId);

    if (watchlist.some(item => item.id === movieId)) {
        watchlist = watchlist.filter(item => item.id !== movieId);
        button.textContent = 'Add to Watchlist';
    } else {
        watchlist.push(movie);
        button.textContent = 'Remove from Watchlist';
    }

    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    displayWatchlist();
}

// Display watchlist
function displayWatchlist() {
    document.getElementById('watchlist-ul').innerHTML = watchlist.map(movie => `<li>${movie.title}</li>`).join('');
}

// Initialize
displayMovies(movies);
displayWatchlist();
