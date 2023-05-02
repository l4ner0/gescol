import { PATHS } from "@/utils/routeConstants";

export default [
    {
        path: '/',
        meta: {},
        name: 'Root',
        redirect: {
            name: 'Dashboard'
        }
    },
    {
        path: `${PATHS.dashboard.pathBase}`,
        name: 'Dashboard',
        component: () => import(
            /* webpackChunkName: "routes" */
            /* webpackMode: "lazy-once" */
            `@/pages/DashboardPage`
        )
    },

    /* Ticket */
    {
        path: `${PATHS.ticket.pathBase}${PATHS.ticket.generateTicket}`,
        name: 'GenerateTicket',
        props: true,
        components: {
            default: () => import(
                /* webpackChunkName: "routes" */
                /* webpackMode: "lazy-once" */
                `@/pages/ticket/GenerateTicket`
            ),
        }
    },
    /* Monitor */
    {
        path: `${PATHS.monitor.pathBase}${PATHS.monitor.assignmentMonitor}`,
        name: 'AssignmentMonitor',
        props: true,
        components: {
            default: () => import(
                /* webpackChunkName: "routes" */
                /* webpackMode: "lazy-once" */
                `@/pages/monitor/AssignmentMonitor`
            ),
        }
    },
    {
        path: `${PATHS.monitor.pathBase}${PATHS.monitor.attentionMonitor}`,
        name: 'AttentionMonitor',
        props: true,
        components: {
            default: () => import(
                /* webpackChunkName: "routes" */
                /* webpackMode: "lazy-once" */
                `@/pages/monitor/AttentionMonitor`
            ),
        }
    },

    /* Box */
    {
        path: `${PATHS.box.pathBase}${PATHS.box.assignmentBox}`,
        name: 'AssignmentBox',
        props: true,
        components: {
            default: () => import(
                /* webpackChunkName: "routes" */
                /* webpackMode: "lazy-once" */
                `@/pages/box/AssignmentBox`
            ),
        }
    },
    {
        path: `${PATHS.box.pathBase}${PATHS.box.attentionBox}`,
        name: 'AttentionBox',
        props: true,
        components: {
            default: () => import(
                /* webpackChunkName: "routes" */
                /* webpackMode: "lazy-once" */
                `@/pages/box/AttentionBox`
            ),
        }
    },
]