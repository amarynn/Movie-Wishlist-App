function renderAddMovie() {
    document.querySelector('#page').innerHTML = `
        <section class="create-movie">
            <form action="" onSubmit="createMovie(event)">
                <h2>Add Movie</h2>
                <fieldset>
                    <label for="">Title:</label>
                    <input type="text" name="title">
                </fieldset>
                <fieldset>
                    <label for="">Description:</label>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>
                </fieldset>
                <fieldset>
                    <label for="">Poster Link:</label>
                    <input type="text" name="imageLink">
                </fieldset>
                <button>Add Movie</button>
            </form>
        </section>
    `
}

function createMovie(event) {
    event.preventDefault()
    const form = event.target

    const data = Object.fromEntries(new FormData(form)) // Converts form data into object

    fetch('/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(movie => {
            state.movieList.push(movie)
            renderMovieList()
        })
}