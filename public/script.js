// Sample movie data (in a real app, this would come from an API)
const sampleMovies = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
        image: "https://via.placeholder.com/200x300?text=Inception"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        image: "https://via.placeholder.com/200x300?text=The+Dark+Knight"
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        image: "https://via.placeholder.com/200x300?text=Interstellar"
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        image: "https://via.placeholder.com/200x300?text=Pulp+Fiction"
    }
];

// DOM Elements
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('movieSearch');
const searchBtn = document.getElementById('searchBtn');

// Function to create a movie card
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    
    movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>Year: ${movie.year}</p>
            <p>Rating: ${movie.rating}/10</p>
        </div>
    `;
    
    return movieCard;
}

// Function to display movies
function displayMovies(movies) {
    movieGrid.innerHTML = ''; // Clear existing movies
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        movieGrid.appendChild(card);
    });
}

// Function to filter movies based on search
function filterMovies(searchTerm) {
    return sampleMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    const filteredMovies = filterMovies(searchTerm);
    displayMovies(filteredMovies);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value;
        const filteredMovies = filterMovies(searchTerm);
        displayMovies(filteredMovies);
    }
});

// Initial display of movies
window.addEventListener('load', () => {
    displayMovies(sampleMovies);
});
