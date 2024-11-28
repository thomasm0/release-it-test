import type { RouteObject } from 'react-router-dom';
import App from '@/containers/App/App';
import Home from '@/pages/Home/Home';
import Contact from '@/pages/Contact/Contact';

const children: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
];

const routes = [
  {
    element: <App />,
    children,
  },
];

export default routes;
