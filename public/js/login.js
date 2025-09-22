let register;
let login;
let passwordError;

const register_redirect = async function(event) {
    event.preventDefault();
    window.location.href = '/register';
}


const login_user = async function(event) {
    event.preventDefault();

    const name = document.querySelector("#login-id").value;
    const password = document.querySelector("#pass-id").value;

    //alert(ID_to_Delete)

    // made it its own line to make it more clear what is happening.
    let body = JSON.stringify({name: name, password: password})

    let response = await fetch("/login_user", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'same-origin',
        body
    });

    let result = await response.json();

    if(result.can_login == false) {
        passwordError.innerHTML = result.error;
    } else {
        window.location.href = 'user_content';
    }

}

// prepare elements for when the web-page loads!
window.addEventListener("DOMContentLoaded", () => {

    register =  document.querySelector("#register-button");
    register.onclick = register_redirect;

    login =  document.querySelector("#login-button");
    login.onclick = login_user;

    passwordError = document.querySelector("#password-error");

});
