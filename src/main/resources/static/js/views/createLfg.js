import createView from "../createView.js";
import {getHeaders} from "../auth.js";

export default function createLfg(props){
    return `
    <h1 style="text-align: center;">Request a member</h1>
    <!--add description to was the page does later-->

    <div class="reg-form" style="margin-top: 50px;">
        <form class="register-form">
            <div class="form-group" style="margin-bottom: 25px">
                <input type="text" class="form-control" id="title" placeholder="Game title">
            </div>
            <div class="form-group" style="margin-bottom: 25px">
                <textarea type="text" class="form-control" id="description" placeholder="Description"></textarea>
            </div>
            <div class="form-group" style="margin-bottom: 25px"> <!--turn to enum eventually-->
                        <select id="skill" class="form-control form-select">
                        <option selected>Skill</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Veteran">Veteran</option>
                        <option value="Pro">Pro</option>
                        <option value="Any">Any</option>
                        </select>  
            </div>
            <button type="submit" class="myButton btn btn-dark" id="submit-btn" style="margin-bottom: 150px">Submit</button>
        </form>
    </div>
    `
}

export function LfgListener(){
    $("#submit-btn").click(function (){
        let title = $("#title").val();
        let description = $("#description").val();
        let skill = $("#skill option:selected").val();

        console.log(title);
        console.log(description);
        console.log(skill);

        let lfg = {
            id: 0,
            title: title,
            description: description,
            skill: skill,

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
                //redirect to view lfg page
                createView("/lfg");
            }).catch(function (err) {
            console.log("There was an error of " + err);
        });

    })
}