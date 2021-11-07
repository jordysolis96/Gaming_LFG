import Home from "./views/Home.js";
import Register, {registerListener} from "./views/Register.js";
import Login from "./views/login.js";
import LoginEvent, {LogoutEvent} from "./auth.js";
import Profile, {userEdit} from "./views/profile.js";
import createLfg, {LfgListener} from "./views/createLfg.js";
import lfg from "./views/lfg.js";
import createEvent, {EventListener} from "./views/createEvents.js";
import event, {mapBox} from "./views/partials/events.js";
/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    if(localStorage.getItem("access_token")) {
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
            },
            '/profile': {
                returnView: Profile,
                state: {
                    user: "/api/users/user"
                },
                uri: '/profile',
                title: 'profile',
                viewEvent: userEdit
            },
            '/createLfg': {
                returnView: createLfg,
                state: {},
                uri: '/createLfg',
                title: 'createLfg',
                viewEvent: LfgListener
            },
            '/lfg': {
                returnView: lfg,
                state: {
                    lfgs: '/api/lfg'
                },
                uri: '/lfg',
                title: 'lfg'
            },
            '/createEvent': {
                returnView: createEvent,
                state: {},
                uri: '/createEvent',
                title: 'createEvent',
                viewEvent: EventListener
            },
            '/events': {
                returnView: event,
                state: {
                    events: '/api/event'
                },
                uri: '/events',
                title: 'event',
                viewEvent: mapBox
            }

        };

        return routes[URI];
    }else {
        const routes = {
            '/': {
                returnView: Home,
                state: {},
                uri: '/',
                title: 'Home'
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
            },
            '/profile': {
                returnView: Home,
                state: {},
                uri: '/',
                title: 'Home'
            },
            '/createLfg': {
                returnView: Home,
                state: {},
                uri: '/',
                title: 'Home'
            },
            '/lfg': {
                returnView: Home,
                state: {},
                uri: '/',
                title: 'Home'
            },
            '/createEvent': {
                returnView: Home,
                state: {},
                uri: '/',
                title: 'Home'
            },
            '/events': {
                returnView: Home,
                state: {},
                uri: '/',
                title: 'Home'
            }

        };

        return routes[URI];
    }
}
