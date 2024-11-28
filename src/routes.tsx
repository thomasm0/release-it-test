import type { RouteObject } from 'react-router-dom';
import App from '@/containers/App/App';
import Home from '@/pages/Home/Home';
import Contact from '@/pages/Contact/Contact';
import About from '@/pages/About/About';

const children: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'about',
    element: <About />,
  },
];

const routes = [
  {
    element: <App />,
    children,
  },
];

export default routes;
