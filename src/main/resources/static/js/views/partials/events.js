export default function event(props){
    return `
        <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3 text-center">
                    <h1>Explore events</h1>
                    <h1 style="margin-top: 50px">Put search bar here(should filter by location)</h1>
                </div>
                 ${props.events.map(event => `${printEvents(event)}`).join('')}  
            </div>
            </div>
        </main>
    `;
}
//Get around to displaying the username and platform for each individual post
function printEvents(event) {
    console.log(event.user)
    return `
        <div class="p-3 mx-auto" style="margin-top: 50px; width: 700px">
            <div class="card shadow-sm p-0">
                 
                  <h2 contenteditable="false" class="card-header title" style="text-align: center;"> ${event.title}</h2>
                  <h6 style="font-size: small; text-align: center">${event.description}</h6>
            </div>
        </div>
    `

    // add location, date/time, and map
}