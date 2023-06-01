function renderSignUp() {
    document.querySelector('#page').innerHTML = `
    <section class = 'sign-up'>
        <form action = "" onSubmit="signUp(event)">
            <h2> Sign Up: </h2>
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

            <button>Sign Up </button>
        </form>
    </section>
    `
}