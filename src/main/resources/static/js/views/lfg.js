export default function lfg(props){
    return `
        <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3 text-center" style="margin-bottom: 250px">
                    <h1 style="margin-bottom: 75px">Find Teammates</h1>
                </div>
                 ${props.lfgs.map(lfg => `${printLfgs(lfg)}`).join('')}  
            </div>
            </div>
        </main>
    `;
}
//Get around to diplaying the username and platform for each individual post
function printLfgs(lfg) {
console.log(lfg.user)
    console.log(lfg.user.username)
    console.log(lfg.user.email)
    return `
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin-bottom: 150px; margin-left: 50px">
        <div class="card-header">User: ${lfg.user.gamerTag}</div>
         <div class="card-body">
            <h5 class="card-title">${lfg.title}- ${lfg.skill}</h5>
            <h6>Platform: ${lfg.user.platform}</h6>
        <p class="card-text">${lfg.description}</p>
        </div>
        </div>
    `

    // add requirements to each post
}