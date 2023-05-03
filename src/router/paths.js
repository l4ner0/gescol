import { PATHS } from '@/utils/routeConstants';
import auth from '@/middleware/auth';
import redirectHome from '@/middleware/redirectHome';

export default [
  {
    path: '/',
    meta: {},
    name: 'Root',
    redirect: {
      name: 'DashboardPage',
    },
  },

  /* ############################# */
  /*         PRIVATE PAGES         */
  /* ############################# */

  {
    path: PATHS.dashboard.pathBase,
    name: 'DashboardPage',
    meta: {
      private: true,
      middleware: auth,
    },
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/private/DashboardPage`
      ),
  },

  /* Ticket */
  {
    path: PATHS.ticket.pathBase,
    name: 'TicketPage',
    meta: {
      private: true,
      middleware: auth,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: "routes" */
          /* webpackMode: "lazy-once" */
          `@/pages/private/ticket`
        ),
    },
    children: [
      {
        path: PATHS.ticket.generateTicket,
        name: 'GenerateTicket',
        meta: {
          private: true,
          middleware: auth,
        },
        components: {
          default: () =>
            import(
              /* webpackChunkName: "routes" */
              /* webpackMode: "lazy-once" */
              `@/pages/private/ticket/GenerateTicket`
            ),
        },
      },
    ],
  },
  /* Monitor */
  {
    path: PATHS.monitor.pathBase,
    name: 'MonitorPage',
    meta: {
      private: true,
      middleware: auth,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: "routes" */
          /* webpackMode: "lazy-once" */
          `@/pages/private/monitor`
        ),
    },
    children: [
      {
        path: PATHS.monitor.assignmentMonitor,
        name: 'AssignmentMonitor',
        meta: {
          private: true,
          middleware: auth,
        },
        components: {
          default: () =>
            import(
              /* webpackChunkName: "routes" */
              /* webpackMode: "lazy-once" */
              `@/pages/private/monitor/AssignmentMonitor`
            ),
        },
      },
      {
        path: PATHS.monitor.attentionMonitor,
        name: 'AttentionMonitor',
        meta: {
          private: true,
          middleware: auth,
        },
        components: {
          default: () =>
            import(
              /* webpackChunkName: "routes" */
              /* webpackMode: "lazy-once" */
              `@/pages/private/monitor/AttentionMonitor`
            ),
        },
      },
    ],
  },

  /* Box */
  {
    path: PATHS.box.pathBase,
    name: 'BoxPage',
    meta: {
      private: true,
      middleware: auth,
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: "routes" */
          /* webpackMode: "lazy-once" */
          `@/pages/private/box`
        ),
    },
    children: [
      {
        path: PATHS.box.assignmentBox,
        name: 'AssignmentBox',
        meta: {
          private: true,
          middleware: auth,
        },
        components: {
          default: () =>
            import(
              /* webpackChunkName: "routes" */
              /* webpackMode: "lazy-once" */
              `@/pages/private/box/AssignmentBox`
            ),
        },
      },
      {
        path: PATHS.box.attentionBox,
        name: 'AttentionBox',
        meta: {
          private: true,
          middleware: auth,
        },
        components: {
          default: () =>
            import(
              /* webpackChunkName: "routes" */
              /* webpackMode: "lazy-once" */
              `@/pages/private/box/AttentionBox`
            ),
        },
      },
    ],
  },

  /* ############################# */
  /*         PUBLIC PAGES          */
  /* ############################# */

  {
    path: PATHS.login.pathBase,
    name: 'LoginPage',
    meta: {
      middleware: redirectHome,
    },
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/public/LoginPage`
      ),
  },
];
