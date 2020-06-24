import Dashboard from "../views/dashboard";
import Settings from "../views/settings/index";
import Calendar from "../views/calendar/index";
import Sprint from "../views/sprint/index";
import SprintTasks from "../views/sprint/sprintTasks";

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/settings',
            component: Settings
        },
        {
            path: '/calendar',
            component: Calendar
        },
        {
            path: '/sprint',
            component: Sprint
        },
        {
            path: '/sprint-tasks',
            component: SprintTasks
        }
    ]
}
