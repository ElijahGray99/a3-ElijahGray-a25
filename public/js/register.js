let register;
let return_button;

const register_user = async function( event ) {
    event.preventDefault();

    alert("Registration message sent")

    const register_id = document.querySelector("#register-id").value;
    const register_pass = document.querySelector("#pass-id").value;

    // made it its own line to make it more clear what is happening.
    let body = JSON.stringify({name: register_id, password: register_pass})

    let html = await fetch( "/register_user", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'same-origin',
        body
    });
    window.location.href = 'user_content';

}

const return_redirect = async function(event)  {
    event.preventDefault();
    window.location.href = '/login';
}

// prepare elements for when the web-page loads!
window.addEventListener("DOMContentLoaded", () => {

    register = document.querySelector("#register-button");
    register.onclick = register_user;

    return_button = document.querySelector("#return-button");
    return_button.onclick = return_redirect;

});

