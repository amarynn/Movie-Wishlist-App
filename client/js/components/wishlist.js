function renderUserWishlist() {
    
    state.wishlistMovies = []

    fetch('/api/wishlist', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(userWishlist => {
            userWishlist.forEach( movie => {
                state.wishlistMovies.push(movie)
            });
        })
        .then(() => renderWishlist())

}

function renderWishlist () {
    document.querySelector('#page').innerHTML = `
        <section class="movie-list">
            ${renderMoviesWishlist()}
        </section>
    `
}

function renderMoviesWishlist() {
    document.querySelector('#slide').innerHTML=``
    return state.wishlistMovies.map(movie => `
        <section class="movie" data-id="${movie.id}">
            <header>
                <h2>${movie.title}</h2>
                <span class="material-symbols-outlined  delete" onClick="deleteWishlistItem(event)">Delete</span>
            </header>
            <section class="container">
                <img src="${movie.img_link}">
                <section class="overlay">
                    <section class="hover_text">${movie.description}</section>
                </section>
            </section>
        </section>
    `).join('')
}

function deleteWishlistItem(event) {
    const deleteButton = event.target
    const movieDOM = deleteButton.closest('.movie')
    const movieId = movieDOM.dataset.id

    fetch(`/api/wishlist/${movieId}`, {
        method: 'DELETE'
    })
        .then(() => {
            state.wishlistMovies = state.wishlistMovies.filter(movie => movie.id != movieId)
            renderWishlist()
        })
}