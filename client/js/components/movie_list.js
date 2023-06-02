function renderMovieList() {
    const apiTitle = document.querySelector('.apiInput')
    document.querySelector('#page').innerHTML = `
        <section class="movie-list">
            ${renderMovies()}
        </section>
    `
    apiTitle.value = ""
}

function renderEditMovie(movie){
        document.querySelector('#page').innerHTML = `
            <section class="create-movie">
                <form action="" onSubmit="createMovie(event)">
                    <h2>Edit ${movie.title}</h2>
                    <fieldset>
                        <label for="">Title:</label>
                        <input type="text" name="title" value="${movie.title}">
                    </fieldset>
                    <fieldset>
                        <label for="">Description:</label>
                        <textarea name="description" id="" cols="30" rows="10">${movie.description}</textarea>
                    </fieldset>
                    <fieldset>
                        <label for="">Poster Link:</label>
                        <input type="text" name="imageLink" value="${movie.img_link}">
                    </fieldset>
                    <button>Edit Movie</button>
                </form>
            </section>
        `
}

function renderMovies() {
    return state.moviesList.map(movie => `
        <section class="movie" data-id="${movie.id}">
            <header>
                <h2>${movie.title}</h2>
                <span class="material-symbols-outlined  plus" onClick="addWishlist(event)">Wishlist</span>
                <span class="material-symbols-outlined  delete" onClick="deleteMovie(event)">Delete</span>
                <span class="material-symbols-outlined  edit" onClick="editMovie(event)">Edit</span>

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
function editMovie(event) {
    const editButton = event.target
    const movieDOM = editButton.closest('.movie')
    const movieId = movieDOM.dataset.id
    const movie = state.moviesList.filter(movie => movie.id == movieId)[0]
    renderEditMovie(movie)

}
function addWishlist(event) {
    const wishlistButton = event.target
    const movieDOM = wishlistButton.closest('.movie')
    const movieId = movieDOM.dataset.id
    fetch(`/api/wishlist/${movieId}`, {
        method: 'POST'
    })
        .then(res => res.json())
}