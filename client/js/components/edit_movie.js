
function renderEditMovie(movie){
    document.querySelector('#page').innerHTML = `
        <section class="create-movie">
            <form action="" onSubmit="editMovieDb(event)">
            <input type="hidden" name="id" value="${movie.id}" />
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

function editMovie(event) {
    const editButton = event.target
    const movieDOM = editButton.closest('.movie')
    const movieId = movieDOM.dataset.id
    const movie = state.moviesList.filter(movie => movie.id == movieId)[0]
    renderEditMovie(movie)
}
function editMovieDb(event) {
    event.preventDefault()
    const form = event.target

    const data = Object.fromEntries(new FormData(form))


    fetch(`/api/movies/${data.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(movie => {
           fetchMovies()
        })
}