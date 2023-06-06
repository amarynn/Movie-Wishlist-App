function renderEditAccount() {
    document.querySelector('#slide').innerHTML=``
    document.querySelector('#page').innerHTML = `
        <section class = 'edit-account'>
            <form action = "" onSubmit="editAccount(event)" class="navForm">
                <h2> Edit Details: </h2>
                <fieldset>
                    <label for="" class="text">Name: </label>
                    <input type="text" name="name" value="${state.loggedInUserName}">
                </fieldset>
                <fieldset>
                    <label for="" class="text">Email: </label>
                    <input type="text" name="email" value="${state.loggedInUser}">
                </fieldset>
                <fieldset>
                    <label for="" class="text">Password: </label>
                    <input type="password" name="password" value="">
                </fieldset>

                <button class="btn">Edit Account</button>
            </form>
            <div class="box">
                <div class="bubbles">${renderBubbles()}</div>
            </div>
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
