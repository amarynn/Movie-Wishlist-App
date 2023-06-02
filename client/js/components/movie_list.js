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
                <span class="material-symbols-outlined  delete" onClick="deleteMovie(event)">Delete</span>
            </header>
            <p>${movie.description}</p>
            <img src="${movie.img_link}">
        </section>
    `).join('')
}

function deleteMovie(event) {
    const deleteButton = event.target
    const movieDOM = deleteButton.closest('.movie')
    const movieId = movieDOM.dataset.id

    fetch(`/api/movies/${movieId}`, {
        method: 'DELETE'
    })
        .then(() => {
            state.moviesList = state.moviesList.filter(movie => movie.id != movieId)
            renderMovieList()
        })
}