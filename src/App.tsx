import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Posts from './pages/Posts/Posts';
import PostRead from './pages/PostRead/PostRead';
import PostCreate from './pages/PostCreate/PostCreate';
import PostUpdate from './pages/PostUpdate/PostUpdate';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path="/posts/:id" element={<PostRead />} />
        <Route path="/posts/new" element={<PostCreate />} />
        <Route path="/posts/update/:id" element={<PostUpdate />} />
      </Route>
    ),
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
  return (
    <RouterProvider
      router={routes}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default App;
