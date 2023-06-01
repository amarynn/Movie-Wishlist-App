function renderLogin() {
    document.querySelector('#page').innerHTML = `
        <section class='log-in'>
            <form action="" onSubmit="logIn(event)">
                <h2>Login:</h2>
                <fieldset>
                    <label for="">Email:</label>
                    <label type="text"name="email">
                </fieldset>

                <fieldset>
                    <label for="">Password:</label>
                    <label type="password"name="password">
                </fieldset>
                <button>Log in</button>
            </form>
        </section>
    `
}