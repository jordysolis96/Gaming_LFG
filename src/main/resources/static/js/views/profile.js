export default function Profile(props) {
    console.log("So you are reading me!")
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
                                    <div class="card-header">Poster by: ${props.user.username}</div>
                                        <div class="card-body">
                                            <h5 class="card-title">${event.title}</h5>
                                            <h6>Date: ${event.date}</h6>
                                            <p>${event.description}</p>
                                        </div>
                                </div>`;
                                })}
           </div>       
        </main>`
}
