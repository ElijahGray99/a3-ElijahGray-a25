// FRONT-END (CLIENT) JAVASCRIPT HERE

let homework_table;
let delete_button;
let submit_button;
let logout_button;
let submit_form;
let delete_form;

const submit = async function( event ) {
    // stop form submission from trying to load
    // a new .html page for displaying results...
    // this was the original browser behavior and still
    // remains to this day
    event.preventDefault();

    const ID = document.querySelector("#ID").value;
    const subject = document.querySelector("#subject").value;
    const expectedtime = document.querySelector("#expectedtime").value;
    const date = document.querySelector("#date").value;

    // get info from the user's inputs
    const fields = {
        ID: ID,
        subject: subject,
        expectedtime: expectedtime,
        date: date,
    };

    // format data
    const body = JSON.stringify(fields);

    const response = await fetch( "/submit", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'same-origin',
        body
    });

    // get server response
    const data = await response.json();
    render_table(data);
}

const logout_user = async function(event) {
    event.preventDefault();
    await fetch("/logout", {
        method: "POST",
        credentials: 'same-origin'
    });
    window.location.href = "/"
};

// prepare elements for when the web-page loads!
window.onload = function() {

    // Table body
    homework_table = document.querySelector("#homework-table-body");

    submit_button = document.querySelector("#submit-button");
    delete_button = document.querySelector("#delete-button");
    logout_button = document.querySelector("#logout-button");

    submit_form = document.querySelector("#submit-form");
    delete_form = document.querySelector("#delete-form");

    submit_form.onsubmit = submit;
    delete_form.onsubmit = delete_item;
    logout_button.onclick = logout_user;

    //alert("test");

    load_table();
}


function render_table(data) {

    // sort data from server
    if (data) {
        data.sort((a, b) => b.stress_score - a.stress_score);
    }

    // clear the table
    homework_table.innerHTML = "";

    // add the table content
    if (data) {
        data.forEach(element => {
            // make a row
            const row = document.createElement("tr");

            // provide info for the cells
            row.innerHTML = `<td>${element.ID}</td><td>${element.subject}</td><td>${element.expectedtime}</td><td>${element.date}</td><td>${element.stress_score}</td>`;

            // add row to the table
            homework_table.appendChild(row);
        })
    }


}

// get the latest info from the server
const load_table = async function() {
    event.preventDefault();
    const response = await fetch( "/data");
    const data = await response.json();
    render_table(data);
}

// make a request to delete an item from the server.
const delete_item = async function( event ) {
    event.preventDefault();

    const ID_to_Delete = document.querySelector("#delete-id").value;
    //alert(ID_to_Delete)

    // made it its own line to make it more clear what is happening.
    let body = JSON.stringify({ID: ID_to_Delete})

    let new_table = await fetch( "/delete", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'same-origin',
        body
    });

    // get server response
    const data = await new_table.json();
    //alert("delete item:" + text);
    render_table(data);
}