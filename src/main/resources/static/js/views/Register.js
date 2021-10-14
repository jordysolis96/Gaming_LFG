import createView from "../createView.js";
//Eventually just make the register view a popup in the nav. Same as the login
//add gaming platform and gamer tag
export default function Register(props) {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>User Registration</title>
    </head>
    <body>
        <h1 id="register-heading">Register User</h1>
    
        <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter your username">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password">
                </div>
                <button type="submit" class="myButton" id="submit-user">Submit</button>
            </form>
    </body>
</html>`;
}

export function registerListener() {
    $("#submit-user").click(function() {
        let username = $("#username").val();
        let email = $("#email").val();
        let password = $("#password").val();

        console.log(username);
        console.log(email);
        console.log(password);

        let user = {
            id: 0,
            username: username,
            email: email,
            password: password
        }
console.log(user)
        let request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(user)
        };

        fetch("http://localhost:8080/api/users/create", request)
            .then((response) => {
                console.log(response.status)
                createView("/");
            }).catch(function (err) {
            console.log("There was an error of " + err);
        });
    })
}