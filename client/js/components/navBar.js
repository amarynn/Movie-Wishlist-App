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
    