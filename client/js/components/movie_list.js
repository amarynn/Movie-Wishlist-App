function renderMovieList() {
    document.querySelector('#page').innerHTML = `
        <section class="movie-list">
            ${renderMovies()}
        </section>
    `
}

function renderMovies() {
    return state.moviesList.map(movie => `
        <section class="movie" data-id="${movie.id}">
            <header>
                <h2>${movie.title}</h2>
                <span class="material-symbols-outlined delete" onClick="deleteMovie(event)">delete</span>
            </header>
            <p>${movie.description}</p>
            <img src="${movie.imageLink}">
        </section>
    `).join('')
}
