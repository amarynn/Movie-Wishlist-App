function renderSignUp() {
    document.querySelector('#slide').innerHTML= ``
    document.querySelector('#page').innerHTML = `
        <section class = 'sign-up'>
            <form action = "" onSubmit="signUp(event)" class="navForm">
                <h2> Sign Up: </h2>
                <fieldset>
                    <label for="" class="text">Name: </label><br>
                    <input type="text" name="name" class="signupInput">
                </fieldset>

                <fieldset>
                    <label for="" class="text">Email: </label><br>
                    <input type="text" name="email" class="signupInput">
                </fieldset>

                <fieldset>
                    <label for="" class="text">Password: </label><br>
                    <input type="password" name="password" class="signupInput">
                </fieldset>

                <button class="btn">Sign Up </button>
            </form>
            <div class="box">
                <div class="bubbles">${renderBubbles()}</div>
            </div>
        </section>
    `
}

function signUp(event) {
    event.preventDefault()
    const form = event.target
    const data =  Object.fromEntries(new FormData(form))

    fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(email => state.loggedInUser = email)
    .then(() => renderMovieList())
}