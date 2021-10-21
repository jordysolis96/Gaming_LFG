export default function lfg(props){
    return `
        <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                <div class="col-12 my-3 text-center">
                    <p>Writing out and articulating your thoughts is a great way to internalize something 
                    <br>you’ve learned or experienced</p>
                </div>
                 ${props.lfgs.map(lfg => `${printLfgs(lfg)}`).join('')}  
            </div>
            </div>
        </main>
    `;
}

function printLfgs(lfg) {
    //console.log(post)
    // let categories1 = post.categories;
    //console.log(categories1);
    return `
        <div class="p-3">
            <div class="card shadow-sm p-0">
                  
                  <h5 contenteditable="false" class="card-header title"> ${lfg.title}</h5>
                  <p contenteditable="false"  class="p-3 card-text content">
                        ${lfg.description} <a href="#" class="readMore" data-id="${lfg.id}">Read more...</a>
                  </p>
            </div>
        </div>
    `
}