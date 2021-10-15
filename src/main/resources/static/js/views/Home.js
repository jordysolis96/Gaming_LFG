export default function Home(props) {
    return `
            <header>
                <h1 style="text-align: center; margin-top: 75px; font-size: 75px">LFG & EVENTS FOR GAMERS</h1>
            </header>
            <main>
                <div style="text-align: center; margin-top: 75px;">
                    <img src="../../img/darkSouls.png" alt="Dark Souls" class="img">
                    <h3>Find teammates for any game</h3>
                </div>
                <div style="text-align: center; margin-top: 75px">
                <img src="../../img/gaming.png" alt="gaming" width="760" height="428" class="img">
                    <h3>Make your gaming events know by posting details</h3>
                </div>
                <div style="text-align: center; margin-top: 75px">
                    <img src="../../img/tekken-7-tournament.png" alt="TekkenTourney" width="760" height="428" class="img">
                    <h3>Discover tournaments to compete in</h3>
                </div>  
                <div style="text-align: center; margin-top: 75px">
                    <img src="../../img/destiny.png" alt="Destiny" width="760" height="428" class="img">
                    <h3 style="margin-bottom: 75px">
                        <a href="/register">Register</a> to find a group today!
                    </h3>    
                </div>
        </main>
    `;

}