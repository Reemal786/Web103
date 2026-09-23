async function getMovies() {
    const response = await fetch("/api/movies");
    const movies = await response.json();

    const movieList = document.getElementById("movie-list");

    movies.forEach((movie) => {
        const movieCard = document.createElement("article");

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title} poster">

            <h2>${movie.title}</h2>

            <p>
                <strong>Genre:</strong> ${movie.genre}
            </p>

            <p>
                <strong>Year:</strong> ${movie.year}
            </p>

            <p>
                <strong>Director:</strong> ${movie.director}
            </p>

            <p>${movie.description}</p>

            <a href="/movies/${movie.id}" role="button">
                View Movie
            </a>
        `;

        movieList.appendChild(movieCard);
    });
}

getMovies();