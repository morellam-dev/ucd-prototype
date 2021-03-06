import Assemble from 'routes/Assemble';
import Clean from 'routes/Clean';
import Dashboard from 'routes/Dashboard';
import Print from 'routes/Print';
import NotFound from 'routes/NotFound';
import Ship from 'routes/Ship';

const RouteItems = [
  {
    title: 'Dashboard',
    icon: '',
    index: true,
    route: '/',
    element: Dashboard,
  },
  {
    title: 'Print a Part',
    icon: '๐จ',
    route: '/print',
    element: Print,
  },
  {
    title: 'Clean a Part',
    icon: '๐งผ',
    route: '/clean',
    element: NotFound,
  },
  {
    title: 'Assemble Parts',
    icon: '๐ ',
    route: '/assemble',
    element: NotFound,
  },
  {
    title: 'Print and Ship',
    icon: '๐ฆ',
    route: '/ship',
    element: NotFound,
  },
];

export default RouteItems;
