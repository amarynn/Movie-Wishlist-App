function renderEditAccount() {
    // getUserData()
    document.querySelector('#page').innerHTML = `
        <section class = 'edit-account'>
            <form action = "" onSubmit="editAccount(event)">
                <h2> Edit Details: </h2>
                <fieldset>
                    <label for="">Name: </label>
                    <input type="text" name="name" value="${state.loggedInUserName}" >
                </fieldset>

                <fieldset>
                    <label for="">Email: </label>
                    <input type="text" name="email" value="${state.loggedInUser}">
                </fieldset>

                <fieldset>
                    <label for="">Password: </label>
                    <input type="password" name="password" class="editaccountInput">
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

// function getUserData() {
//     return fetch('/api/users', {
//         method: 'GET',
//     })
//     .then(res => res.json())

// }