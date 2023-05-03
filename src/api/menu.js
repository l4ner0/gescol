import { PATHS } from '@/utils/routeConstants';

const Menu = [
  { header: 'Apps' },
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'mdi-view-dashboard',
    name: 'dashboard',
    to: PATHS.dashboard.pathBase,
  },
  { divider: true },
  { header: 'Recepción' },
  {
    title: 'Generar Tickets',
    group: 'tickets',
    icon: 'mdi-ticket-account',
    name: 'generar-tickets',
    to: `${PATHS.ticket.pathBase}${PATHS.ticket.generateTicket}`,
  },
  { header: 'Monitor' },
  {
    title: 'Monitor de espera',
    group: 'monitor',
    icon: 'mdi-monitor-multiple',
    items: [
      {
        name: 'asignacion',
        title: 'Asignacion',
        to: `${PATHS.monitor.pathBase}${PATHS.monitor.assignmentMonitor}`,
      },
      {
        name: 'atencion',
        title: 'Atención',
        to: `${PATHS.monitor.pathBase}${PATHS.monitor.attentionMonitor}`,
      },
    ],
  },
  { header: 'Asesor' },
  {
    title: 'Asignacion de box',
    group: 'box',
    icon: 'mdi-account-box',
    items: [
      {
        name: 'asignacion',
        title: 'Asignacion',
        to: `${PATHS.box.pathBase}${PATHS.box.assignmentBox}`,
      },
      {
        name: 'atencion',
        title: 'Atención',
        to: `${PATHS.box.pathBase}${PATHS.box.attentionBox}`,
      },
    ],
  },
  { divider: true },
  { header: 'Extras' },
  {
    title: 'Pages',
    group: 'extra',
    icon: 'mdi-format-list-bulleted',
    items: [
      { name: 'Login', title: 'Login', to: PATHS.login.pathBase },
      { name: '404', title: '404', component: 'NotFound' },
      { name: '403', title: '403', component: 'AccessDenied' },
      { name: '500', title: '500', component: 'ServerError' },
    ],
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
});

export default Menu;
