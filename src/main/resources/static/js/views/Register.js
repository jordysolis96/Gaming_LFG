import createView from "../createView.js";
//Eventually just make the register view a popup in the nav. Same as the login
//add password strength meter
export default function Register(props) {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>User Registration</title>
    </head>
    <body>
        <h1 id="register-heading" style="text-align: center;">Register to start your adventure</h1>
    
    <div class="reg-form" style="margin-top: 100px;">
        <form class="register-form" style="margin-bottom: 50px">
                <div class="form-group">
                    <input type="text" class="form-control" id="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="Email">
                </div>
                 <div class="form-group"> <!--turn to enum eventually-->
                    <select id="platform" class="form-control form-select">
                    <option selected>Gaming Platform</option>
                    <option value="Playstation">Playstation</option>
                    <option value="Switch">Switch</option>
                    <option value="Xbox">Xbox</option>
                    <option value="PC">PC</option>
                    <option value="Mobile">Mobile</option>
                    </select>  
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="gamerTag" placeholder="Gamertag">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="submit" class="myButton btn btn-dark" id="submit-user">Submit</button>
            </form>
            <p style="text-align: center; margin-bottom: 20px">Have an account?<a> Sign in</a></p>
    </div>
    </body>
</html>`;
}

export function registerListener() {
    $("#submit-user").click(function() {
        let username = $("#username").val();
        let email = $("#email").val();
        let platform = $("#platform option:selected").val();
        let gamerTag = $("#gamerTag").val();
        let password = $("#password").val();

        console.log(username);
        console.log(email);
        console.log(password);

        let user = {
            id: 0,
            username: username,
            email: email,
            platform: platform,
            gamerTag: gamerTag,
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