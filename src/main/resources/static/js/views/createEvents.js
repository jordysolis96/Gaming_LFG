import createView from "../createView.js";
import {getHeaders} from "../auth.js";

export default function createEvent(){
    return `
    <h1 style="text-align: center;">Make an event for others to see!</h1>
    <!--add description to was the page does later-->

    <div class="reg-form" style="margin-top: 75px; margin-bottom: 100px">
        <form class="register-form">
            <div class="form-group">
                <input type="text" class="form-control" id="title" placeholder="Event name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="location" placeholder="Location">
            </div>
<!--needs mini calander popup-->
            <div class="form-group">
                <input type="date" class="form-control" id="date" placeholder="Date">
            </div>
            <div class="form-group">
                <textarea type="text" class="form-control" id="description" placeholder="Description"></textarea>
            </div>
            <button type="submit" class="myButton btn btn-dark" id="event-btn">Submit</button>
        </form>
    </div>
    `
}

export function EventListener(){
    $("#event-btn").click(function (){
        let title = $("#title").val();
        let location = $("#location").val();
        let date = $("#date").val();
        let description = $("#description").val();

        console.log(title);
        console.log(description);
        console.log(location);
        console.log(date);

        let event = {
            id: 0,
            description: description,
            title: title,
            date: date,
            location: location
        }

        console.log(event)

        let request = {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(event)
        };

        fetch("http://localhost:8080/api/event/create", request)
            .then((response) => {
                console.log(response.status)
                //redirect to view events page
                createView("/");
            }).catch(function (err) {
            console.log("There was an error of " + err);
        });

    })
}