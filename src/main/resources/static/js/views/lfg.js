export default function lfg(props){
    return `
        <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3 text-center">
                    <h1 style="margin-top: 50px">Put search bar here(should filter by game/platform)</h1>
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
    return `
        <div class="p-3 mx-auto" style="margin-top: 50px; width: 700px">
            <div class="card shadow-sm p-0">
                 
                  <h2 contenteditable="false" class="card-header title" style="text-align: center;"> ${lfg.title}</h2>
                  <h4 contenteditable="false" class="card-header title" style="text-align: center">${lfg.platform}</h4>
                  <h6 style="font-size: small; text-align: center">${lfg.description}</h6>
            </div>
        </div>
    `

    // add requirements to each post
}