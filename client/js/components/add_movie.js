function renderAddMovie() {
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
            <div class="container">
                <div class="bubbles">
                    <span style="--i.11;"></span>
                    <span style="--i.14;"></span>
                    <span style="--i.25;"></span>
                    <span style="--i.16;"></span>
                    <span style="--i.14;"></span>
                    <span style="--i.25;"></span>
                    <span style="--i.12;"></span>
                    <span style="--i.24;"></span>
                    <span style="--i.13;"></span>
                    <span style="--i.11;"></span>
                    <span style="--i.10;"></span>
                    <span style="--i.15;"></span>
                    <span style="--i.17;"></span>
                    <span style="--i.18;"></span>
                    <span style="--i.12;"></span>
                    <span style="--i.24;"></span>
                    <span style="--i.13;"></span>
                    <span style="--i.11;"></span>
                    <span style="--i.10;"></span>
                    <span style="--i.15;"></span>
                    <span style="--i.17;"></span>
                    <span style="--i.18;"></span>
                    <span style="--i.12;"></span>
                </div>
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