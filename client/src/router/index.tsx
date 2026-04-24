import { createBrowserRouter } from 'react-router-dom';

import pingServer from '../utils/pingServer';

import Layout from '../components/Layout/Layout';
import Loader from '../components/Loader/Loader';
import PageError from '../pages/PageError/PageError';
import PostCreate from '../pages/PostCreate/PostCreate';
import PostRead from '../pages/PostRead/PostRead';
import Posts from '../pages/Posts/Posts';
import PostUpdate from '../pages/PostUpdate/PostUpdate';

const routes = [
  {
    path: '/',
    element: <Layout />,
    // функция (root/children) - выполняется ДО рендера element (загрузка данных, проверка сервера):
    loader: pingServer,
    // UI (только для root!) - показывается ДО того, как React Router полностью поднимет приложение:
    hydrateFallbackElement: <Loader />,
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

export default router;
