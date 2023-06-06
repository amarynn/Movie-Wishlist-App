function renderAddMovie() {
    document.querySelector('#slide').innerHTML=``
    document.querySelector('#page').innerHTML = `
        
        <section class="create-movie">
       
            <form action="" onSubmit="createMovie(event)" class="navForm">
                <h2>Add Movie</h2>
                <fieldset>
                    <label for="" class="text">Title:</label><br>
                    <input type="text" name="title" class="addmovieInput">
                </fieldset>
                <fieldset>
                    <label for="" class="text">Description:</label><br>
                    <textarea name="description" id="" cols="15" rows="8"></textarea class="addmovieInput">
                </fieldset>
                <fieldset>
                    <label for="" class="text">Poster Link:</label><br>
                    <input type="text" name="imageLink" class="addmovieInput">
                </fieldset>
                <button class="btn">Add Movie</button>
            </form>
            <div class="box">
                <div class="bubbles">${renderBubbles()}</div>
            </div>
        </section>
    `
}

function createMovie(event) {
    event.preventDefault()
    const form = event.target

    const data = Object.fromEntries(new FormData(form))

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
}