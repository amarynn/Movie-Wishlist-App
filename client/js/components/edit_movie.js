
function renderEditMovie(movie){
    document.querySelector('#slide').innerHTML=``
    document.querySelector('#page').innerHTML = `
        <section class="create-movie">
            <form action="" onSubmit="editMovieDb(event)"class="navForm">
            <input type="hidden" name="id" value="${movie.id}" />
                <h2>Edit ${movie.title}</h2>
                <fieldset>
                    <label for="" class="text">Title:</label><br>
                    <input type="text" name="title" value="${movie.title}" class="editmovieInput">
                </fieldset>
                <fieldset>
                    <label for="" class="text">Description:</label><br>
                    <textarea name="description" id="" cols="30" rows="10" class="editmovieInput">${movie.description}</textarea>
                </fieldset>
                <fieldset>
                    <label for="" class="text">Poster Link:</label><br>
                    <input type="text" name="imageLink" value="${movie.img_link}" class="editmovieInput">
                </fieldset>
                <button class="btn">Edit Movie</button>
            </form>
            <div class="box">
                <div class="bubbles">${renderBubbles()}</div>
            </div>
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