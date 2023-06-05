function renderEditAccount() {
    document.querySelector('#slide').innerHTML=``
    document.querySelector('#page').innerHTML = `
        <section class = 'edit-account'>
            <form action = "" onSubmit="editAccount(event)" class="navForm">
                <h2> Edit Details: </h2>
                <fieldset>
                    <label for="">Name: </label>
                    <input type="text" name="name" value="${state.loggedInUserName}">
                </fieldset>
                <fieldset>
                    <label for="">Email: </label>
                    <input type="text" name="email" value="${state.loggedInUser}">
                </fieldset>
                <fieldset>
                    <label for="">Password: </label>
                    <input type="text" name="password" value="">
                </fieldset>

                <button class="btn">Edit Account</button>
            </form>
            <div class="container">
                <div class="bubbles">
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
                </div>
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