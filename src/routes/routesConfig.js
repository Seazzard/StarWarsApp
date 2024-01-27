import HomePage from '@Containers/HomePage';
import PeoplePage from '@Containers/PeoplePage';
import PersonPage from '@Containers/PersonPage';
import NotFoundPage from '@Containers/NotFoundPage';
import FavoritesPage from '@Containers/FavoritesPage';
import SearchPage from '@Containers/SearchPage';
import ErrorMessage from '@Components/ErrorMessage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/people',
    element: <PeoplePage />,
  },
  {
    path: '/people/:id',
    element: <PersonPage />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/fail',
    element: <ErrorMessage />,
  },
  {
    path: '/not-found',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routesConfig;
