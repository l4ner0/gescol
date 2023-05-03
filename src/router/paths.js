import { PATHS } from '@/utils/routeConstants';

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
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/public/LoginPage`
      ),
  },
];
