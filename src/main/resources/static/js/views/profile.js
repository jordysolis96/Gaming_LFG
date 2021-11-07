import createView from "../createView.js";

export default function Profile(props) {
    return `
        <header>
            <h1 style="text-align: center; margin-top: 75px; font-size: 75px">hello ${props.user.username}</h1>
        </header>
        <main>
           <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3 text-center" style="margin-bottom: 250px">
                    <h1 style="margin-bottom: 75px">Your LFG requests</h1>
                </div>
                </div>
           </div>
           <div id="lfgCards">
                 ${props.user.lfgs.map(function (lfg) {
                    return ` <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin-bottom: 150px; margin-left: 50px">
                                <div class="card-body">
                                    <div class="card-header">User: ${props.user.gamerTag}</div>
                                        <h5 class="card-title">${lfg.title}- ${lfg.skill}</h5>
                                        <h6>Platform: ${props.user.platform}</h6>
                                        <p class="card-text">${lfg.description}</p>
                                        <button type="button"  class="btn btn-primary delete-btn" data-id="${lfg.id}" style="font-size: small; text-align: center; margin-right: 2em; width: 8em">Delete</button><button type="button"  class="btn btn-primary edit-btn" data-id="${lfg.id}" style="font-size: small; text-align: center; width: 8em">Edit</button>
                                    </div>
                                </div>`;
                                })}
           </div> 
           <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3 text-center" style="margin-bottom: 250px">
                    <h1 style="margin-bottom: 75px">Your LFG requests</h1>
                </div>
                </div>
           </div>
           <div id="eventCards">
                 ${props.user.events.map(function (event) {
                 return ` <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin-bottom: 150px; margin-left: 50px">
                                <div class="card-body">
                                    <div class="card-header">User: ${props.user.gamerTag}</div>
                                        <h5 class="card-title">${event.title}</h5>
                                        <h6>Date: ${event.date.toString().substring(0, 10)}</h6>
                                        <p class="card-text">${event.description}</p>
                                        <button type="button"  class="btn btn-primary event-delete-btn" data-id="${event.id}" style="font-size: small; text-align: center">Delete</button><button type="button"  class="btn btn-primary event-edit-btn" data-id="${event.id}" style="font-size: small; text-align: center">Edit</button>
                                    </div>
                                </div>`;
                                })}
           </div>       
        </main>`
}


export function userEdit(){
    deleteLfg();
    deleteEvent();
    editEvent();
    editLfg();
}

function deleteLfg() {
    $(".delete-btn")
        .click(function () {

            let request = {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            }

            let id = $(this)
                .attr("data-id")

            fetch(`http://localhost:8080/api/lfg/${id}`, request)
                .then(res => {
                    console.log(res.status);
                    createView("/profile");
                })
                .catch(error => {
                    console.log(error)
                    createView("/profile")
                })
        })
}

function deleteEvent() {
    $(".event-delete-btn")
        .click(function () {

            let request = {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            }

            let id = $(this)
                .attr("data-id")

            fetch(`http://localhost:8080/api/event/${id}`, request)
                .then(res => {
                    console.log(res.status);
                    createView("/profile");
                })
                .catch(error => {
                    console.log(error)
                    createView("/profile")
                })
        })
}

//create pop up form next to div card displaying card to edit lfg
function editLfg(){
    $(".edit-btn")
        .click(function (props) {
            return `<div id="lfgCards">
                ${props.user.lfgs.map(function (lfg) {
                return ` <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin-bottom: 150px; margin-left: 50px">
                                <div class="card-body">
                                    <div class="card-header">User: ${props.user.gamerTag}</div>
                                        <h1>The edit card works</h1>
                                        <h5 class="card-title">${lfg.title}- ${lfg.skill}</h5>
                                        <h6>Platform: ${props.user.platform}</h6>
                                        <p class="card-text">${lfg.description}</p>
                                        <button type="button"  class="btn btn-primary delete-btn" data-id="${lfg.id}" style="font-size: small; text-align: center; margin-right: 2em; width: 8em">Delete</button><button type="button"  class="btn btn-primary edit-btn" data-id="${lfg.id}" style="font-size: small; text-align: center; width: 8em">Edit</button>
                                    </div>
                                </div>`;
            })}
            </div>`
        })
}

function editEvent(){
    $(".event-edit-btn")
        .click(function () {

        })
}