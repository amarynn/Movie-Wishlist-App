function renderEditAccount() {
    document.querySelector('#page').innerHTML = `
        <section class = 'edit-account'>
            <form action = "" onSubmit="editAccount(event)">
                <h2> Edit Details: </h2>
                <fieldset>
                    <label for="">Name: </label>
                    <input type="text" name="name">
                </fieldset>

                <fieldset>
                    <label for="">Email: </label>
                    <input type="text" name="email">
                </fieldset>

                <fieldset>
                    <label for="">Password: </label>
                    <input type="password" name="password">
                </fieldset>

                <button>Edit Account</button>
            </form>
        </section>
    `
}

function editAccount(event) {
    event.preventDefault()
    const form = event.target
    const data =  Object.fromEntries(new FormData(form))

    fetch('/api/users/update', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(email => state.loggedInUser = email)
    .then(() => renderMovieList())
}