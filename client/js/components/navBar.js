function renderNav() {
    if (state.loggedInUser !== null) {
        document.querySelector('#navigation').innerHTML = `
            <li class="logo">BLISS movies</li>
            <li class="user-info" id="material-symbols-outlined home" onClick="renderMovieList()">Home</li>
            <li class="user-info"  id="material-symbols-outlined login" onClick="renderAddMovie()">Add Movie</li>
            <li class="user-info"  id="material-symbols-outlined login" onClick="renderUserWishlist()">My Wishlist</li>
            <li class="user-info"  id="material-symbols-outlined login">
                <form action="" onSubmit="searchMovie(event)">
                    <input class="apiInput" placeholder="Search for a movie...">
                </form>
            </li>
            <li class="user-info"  id="material-symbols-outlined login">
                <input class="filterInput" onInput="filterMovies(event)" placeholder="Filter for movies in the database...">
            </li>
            <li class="user-info"  id="material-symbols-outlined login" onClick="renderEditAccount()">Edit Account</li>
            <li class="user-info"  id="material-symbols-outlined login" onClick="signOut()">Sign Out</li>
        `
    } else {
        document.querySelector('#navigation').innerHTML = `
            <li class="user-info" id="material-symbols-outlined home" onClick="renderMovieList()">Home</li>    
            <li class="user-info" id="material-symbols-outlined sign-up" onClick="renderSignUp()">Sign Up</li>
            <li class="user-info"  id="material-symbols-outlined login" onClick="renderLogin()">Login</li>
            <li class="user-info"  id="material-symbols-outlined login">
                <input class="filterInput" onInput="filterMovies(event)" placeholder="Filter for movies in the database...">
            </li>
        `
    }
}