import {MAPBOX_KEY} from "../../keys.js";

mapboxgl.accessToken = MAPBOX_KEY;
console.log(mapboxgl.accessToken)
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
<!--            <script>showMap()</script>-->
            <div id='map' style='width: 400px; height: 300px;'></div>
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
                  <h6 style="font-size: small; text-align: center">${event.date}</h6>
                  <button type="button"  id="location" style="font-size: small; text-align: center">${event.location}</button>
            </div>
        </div>
    `

    // add location, date/time, and map
}

// export function mapBox(){
//     return new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v9',
//         center: [-96.283496, 37.230328],
//         zoom: 4
//     })
// }

export function mapBox() {
    $(document).ready(function () {
        if (document.getElementById("map") !== null) {
            mapboxgl.accessToken = MAPBOX_KEY;
            let map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                zoom: 4,
                center: [-97.922, 39.381]
            });

            const geocode = (input) => {
                fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?&access_token=${MAPBOX_KEY}`)
                    .then(res => res.json())
                    .then(data => {
                        try {
                            map.flyTo({center: data.features[0].center, essential: true, zoom: 15})
                        } catch (e) {
                            console.log(e);
                        }
                    })
            }
            $(document).on("click", "#location", function () {
                geocode(this.innerText)
            })
        }
    })
}


