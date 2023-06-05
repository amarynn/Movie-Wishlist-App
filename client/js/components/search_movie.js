function searchMovie(event) {
    event.preventDefault()
    const apiTitle = document.querySelector('.apiInput').value

    if (apiTitle) {
        fetch(`https://www.omdbapi.com/?apikey=28d95ef8&t=${apiTitle}`)
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
}