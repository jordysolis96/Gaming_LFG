import Home from "./views/Home.js";
import Register, {registerListener} from "./views/Register.js";
import Login from "./views/login.js";
import LoginEvent, {LogoutEvent} from "./auth.js";
/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: registerListener
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: 'login',
            viewEvent: LoginEvent
        },
        '/logout': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: LogoutEvent
        }
    };

    return routes[URI];
}

