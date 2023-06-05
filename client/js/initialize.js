let state = {
    moviesList: [],
    wishlistMovies: []
}
function fetchMovies() {
    state.moviesList = [];
    fetch('/api/movies')
        .then(res => res.json())
        .then(movies => {
            state.moviesList = movies
            renderMovieList()
        })
}

fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
        if (data.result === 'successful') {
            state.loggedInUser = data.email
        }
    })

fetchMovies();