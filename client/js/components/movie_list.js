function renderMovieList() {
    const apiTitle = document.querySelector('.apiInput')
    document.querySelector('#page').innerHTML = `
        <section class="movie-list">
            ${renderMovies()}
        </section>
    `
    if (apiTitle) apiTitle.value = ""
}


function renderMovies() {
    renderNav()
    document.querySelector('#slide').innerHTML = `
    <div id="slider">
    <figure>
        <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60">

        <img src="https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60">

        <img src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60">
        
        <img src="https://images.unsplash.com/photo-1543840950-89196ec9923b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60">

        <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60">
    </figure>
</div>
    `

    return state.moviesList.map(movie => `
        <section class="movie" data-id="${movie.id}">
            <header>
                <h2 class="movieTitle">${movie.title}</h2>
                <div class="headerNav">
                <span class="material-symbols-outlined star" onClick="addWishlist(event)">Star</span>
                <span class="material-symbols-outlined edit" onClick="editMovie(event)">Edit</span>
                <span class="material-symbols-outlined delete" onClick="deleteMovie(event)">Delete</span>
                
                </div>

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
function addWishlist(event) {
    const wishlistButton = event.target
    const movieDOM = wishlistButton.closest('.movie')
    const movieId = movieDOM.dataset.id
    fetch(`/api/wishlist/${movieId}`, {
        method: 'POST'
    })
        .then(res => res.json())
}

