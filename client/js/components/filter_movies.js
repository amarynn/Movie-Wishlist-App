function filterMovies(event) {
    event.preventDefault()
    const filterInput = document.querySelector('.filterInput').value.toLowerCase()
    state.filteredMovies = []

    for (let i = 0; i < state.moviesList.length; i++) {
        if (state.moviesList[i].title == null) {
            continue
        } else if (state.moviesList[i].title.toLowerCase().includes(filterInput)) {
            state.filteredMovies.push(state.moviesList[i])
        }
    }

    renderFilteredMovieList()
}

function renderFilteredMovieList() {
    document.querySelector('#page').innerHTML = `
        <section class="movie-list">
            ${renderFilteredMovies()}
        </section>
    `
}

function renderFilteredMovies() {
    return state.filteredMovies.map(movie => `
        <section class="movie" data-id="${movie.id}">
            <header>
                <h2>${movie.title}</h2>
                <div class="headerNav">
                <span class="material-symbols-outlined  star" onClick="addWishlist(event)">Star</span>
                <span class="material-symbols-outlined  edit" onClick="editMovie(event)">Edit</span>
                <span class="material-symbols-outlined  delete" onClick="deleteMovie(event)">Delete</span>
                </div>
                
            </header>
            <p>${movie.description}</p>
            <img src="${movie.img_link}">
        </section>
    `).join('')
}