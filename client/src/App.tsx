import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { API_URL } from './config';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';

import PageError from './pages/PageError/PageError';
import Posts from './pages/Posts/Posts';
import PostRead from './pages/PostRead/PostRead';
import PostCreate from './pages/PostCreate/PostCreate';
import PostUpdate from './pages/PostUpdate/PostUpdate';

const App = () => {
  const [isServerReady, setIsServerReady] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 500);

    const pingServer = async () => {
      try {
        await fetch(API_URL + '/ping');
      } catch (err) {
        console.error('Ping failed: ', err);
      } finally {
        clearTimeout(timer);
        setIsServerReady(true);
      }
    };

    pingServer();

    return () => clearTimeout(timer);
  }, []);

  if (!isServerReady) {
    return showLoader ? <Loader /> : null;
  }

  const routes = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <PageError />,
      children: [
        { index: true, element: <Posts /> },
        { path: 'posts/:id', element: <PostRead /> },
        { path: 'posts/new', element: <PostCreate /> },
        { path: 'posts/update/:id', element: <PostUpdate /> },
      ],
    },
  ];

  const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL }); // 'base' vite

  return <RouterProvider router={router} />;
};

export default App;
