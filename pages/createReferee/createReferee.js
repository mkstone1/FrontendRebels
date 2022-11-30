const refereeUrl = "http://localhost:8080/api/users/referee";
import { handleHttpErrors } from "../../utils.js";

export function initCreateReferee(){
    window.addEventListener("load", createReferee())
}

async function createReferee(){
    document.querySelector("#btn-user-add").onclick = makeNewReferee;

    async function makeNewReferee(){
        const newReferee = {}
        newReferee.username = document.querySelector("#input-user-username").value
        newReferee.email = document.querySelector("#input-user-email").value
        newReferee.password = document.querySelector("#input-user-password").value
        newReferee.firstname = document.querySelector("#input-user-firstname").value
        newReferee.lastname = document.querySelector("#input-user-lastname").value
        newReferee.bankInformation = document.querySelector("#input-user-bankinformation").value
        newReferee.license = document.querySelector("#input-user-license").value

        const options = {}
        options.method = "POST"
        options.headers = {"Content-type": "application/json"}
        options.body = JSON.stringify(newReferee)
        //if user is added to database, then redirect to login page
        const addUser = await fetch(refereeUrl, options).then(data => {
            console.log(data)
            location.replace("/#/")
        }).catch(err => {
            alert(err)
        })
    }
}
