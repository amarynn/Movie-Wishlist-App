function renderSearchMovie() {
    document.querySelector('#page').innerHTML = `
            <form action="" onSubmit="searchMovie(event)">
                <h2>Add Movie</h2>
                <fieldset>
                    <label for="">Title:</label>
                    <input type="text" name="title" class="apiInput">
                </fieldset>
                <button>Add Movie</button>
            </form>
        </section>
    `
}
function searchMovie(event) {
    event.preventDefault()
    const title = document.querySelector('.apiInput').value    
    
    fetch(`https://www.omdbapi.com/?apikey=28d95ef8&t=${title}`)
        .then(res => res.json())
        .then(movie => {
            const title = movie.Title
            const description = movie.Plot
            const imageLink = movie.Poster
            const data = { title, description, imageLink }

            fetch('/api/movies', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(movie => {
                    state.moviesList.push(movie)
                    renderMovieList()
                })
        })
}