
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

    let new_table = await fetch("/login_user", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'same-origin',
        body
    });
    window.location.href = "/"

}

// prepare elements for when the web-page loads!
window.addEventListener("DOMContentLoaded", () => {

    const register =  document.querySelector("#register-button");
    register.onclick = register_redirect;

    const login =  document.querySelector("#login-button");
    login.onclick = login_user;

});
