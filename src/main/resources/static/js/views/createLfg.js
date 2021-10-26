import createView from "../createView.js";
import {getHeaders} from "../auth.js";

export default function createLfg(props){
    return `
    <h1 style="text-align: center;">Request a member</h1>
    <!--add description to was the page does later-->

    <div class="reg-form" style="margin-top: 75px;">
        <form class="register-form">
            <div class="form-group">
                <input type="text" class="form-control" id="title" placeholder="Game title">
            </div>
            <div class="form-group">
                <textarea type="text" class="form-control" id="description" placeholder="Description"></textarea>
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
            <button type="submit" class="myButton btn btn-dark" id="submit-btn">Submit</button>
        </form>
    </div>
    `
}

export function LfgListener(){
    $("#submit-btn").click(function (){
        let title = $("#title").val();
        let description = $("#description").val();
        let platform = $("#platform option:selected").val();
        // let userId = $(this).attr("data-id")

        console.log(title);
        console.log(description);
        console.log(platform);
        // console.log(userId)

        let lfg = {
            id: 0,
            title: title,
            description: description,
            platform: platform,
            // user: userId
        }

        console.log(lfg);

        let request = {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(lfg)
        };

        fetch("http://localhost:8080/api/lfg/create", request)
            .then((response) => {
                console.log(response.status)
                createView("/");
            }).catch(function (err) {
            console.log("There was an error of " + err);
        });

    })
}