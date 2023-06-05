function signOut() {
    
    fetch(`/api/sessions`, {
        method: 'DELETE'
    })
        .then(() => {
            state.loggedInUser = null
            renderMovieList()
        })
}