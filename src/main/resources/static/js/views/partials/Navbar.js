export default function Navbar(props) {
    // let accessToken = localStorage.getItem("access_token")
    if(localStorage.getItem("access_token")) {
        return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand nav-link" href="/profile" data-link><img src="../../../img/dawey.png" alt="Dawey" width="62" height="50"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/" data-link>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about" data-link>About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                LFG
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="/createLfg" data-link>Requests team</a></li>
                                <li><a class="dropdown-item" href="/lfg" data-link>Find team</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="/createEvent" data-link>Make an Event</a></li>
                                <li><a class="dropdown-item" href="/events" data-link>Discover Events</a></li>
                            </ul>
                        </li>
                        <li class="nav-item px-3">
                                            <a class="nav-link" href="/logout" data-link><i class="bi bi-box-arrow-right"></i></i> Signout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    }else{
    //     return `
    //         <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    //         <div class="container-fluid">
    //             <a class="navbar-brand" href="#"><img src="../../../img/dawey.png" alt="Dawey" width="62" height="50"></a>
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    //                     data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
    //                     aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //         <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //             <ul class="navbar-nav">
    //                 <li class="nav-item">
    //                     <a class="nav-link active" aria-current="page" href="/" data-link>Home</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" href="/about" data-link>About</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" href="/login" data-link>Login</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" href="/register" data-link>Register</a>
    //                 </li>
    //                 <li class="nav-item dropdown">
    //                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
    //                        data-bs-toggle="dropdown" aria-expanded="false">
    //                         Dropdown link
    //                     </a>
    //                     <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //                         <li><a class="dropdown-item" href="#">Action</a></li>
    //                         <li><a class="dropdown-item" href="#">Another action</a></li>
    //                         <li><a class="dropdown-item" href="#">Something else here</a></li>
    //                     </ul>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>
    //     `;


        return `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/" data-link><img src="../../../img/dawey.png" alt="Dawey" width="62" height="50"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/" data-link>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about" data-link>About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link auth-link" href="/login" data-link>Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link auth-link" href="/register" data-link>Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        `;
    }

}