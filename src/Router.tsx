import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Root from './App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/home',
                element: <Home />
            }

        ]
    },
])