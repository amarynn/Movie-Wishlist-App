let showNavigation = false;
function toggleNavigation(){
    showNavigation = !showNavigation;
    renderNav();
}

function renderNav() {
    if (state.loggedInUser) {
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
                <input class="filterInput" onInput="filterMovies(event)" placeholder="Filter for movies...">
            </li>
            
            <div class="side-navigation">
            <button class="material-symbols-outlined        hamburger" onClick="toggleNavigation()" id="ham-button">Reorder</button>
            <ul class="ham ${!showNavigation ? 'hidden' : ''}">
            <li id="material-symbols-outlined login" onClick="renderEditAccount()">Edit Account</li>
            <li  id="material-symbols-outlined login" onClick="signOut()">Sign Out</li>
            </ul>
            </div>


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

function renderBubbles() {
    return `
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
    `
}