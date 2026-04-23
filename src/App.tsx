import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import PageError from './pages/PageError/PageError';
import Posts from './pages/Posts/Posts';
import PostRead from './pages/PostRead/PostRead';
import PostCreate from './pages/PostCreate/PostCreate';
import PostUpdate from './pages/PostUpdate/PostUpdate';

const App = () => {
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
