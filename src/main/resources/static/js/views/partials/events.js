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
            </div>
        </div>
    `

    // add location, date/time, and map
}

// function showMap() {
//
//     return `<div id="map" style='width: 400px; height: 300px;'></div>
// <Script>
//     mapboxgl.accessToken = MAPBOX_KEY;
//     console.log(mapboxgl.accessToken)
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v9',
//         zoom: 4,
//         center: [-97.922, 39.381]
//     })</Script>
//
// `
// }


// mapboxgl.accessToken = MAPBOX_KEY;
//     console.log(mapboxgl.accessToken)
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v9',
//         zoom: 4,
//         center: [-97.922, 39.381]
//     });

// export function createMapbox(){
//     let map = mapBox();
//
// }

export function mapBox(){
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-96.283496, 37.230328],
        zoom: 4
    })
}