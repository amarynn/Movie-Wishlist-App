function renderLogin() {
    document.querySelector('#slide').innerHTML=``
    document.querySelector('#page').innerHTML =
     `
        <section class='log-in'>
            <form action="" onSubmit="logIn(event)" class="navForm">
                <h2>Login:</h2>
                <fieldset>
                    <label for="" class="text">Email:</label><br>
                    <input type="text"name="email" class="loginInput">
                </fieldset>

                <fieldset>
                    <label for="" class="text">Password:</label><br>
                    <input type="password"name="password" class="loginInput" >
                </fieldset>
                <button class="btn">Log in</button>
            </form>
            <div class="box">
                <div class="bubbles">${renderBubbles()}</div>
            </div>
        </section>
    `
}

function logIn(event) {
    event.preventDefault()
    const form = event.target

    const data = Object.fromEntries(new FormData(form))

    fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res =>  {
        if(res.error) {
            renderLogin()
            renderError(res.error)
        } else {
            state.loggedInUser = res.email
            state.loggedInUserName = res.name
            renderMovieList()
        }
    })
}

function renderError(errorMessage) {
    document.querySelector('#page').innerHTML =  `
    <h2 style='color: red;'>${errorMessage}</h2>
    ` + document.querySelector('#page').innerHTML
}