import { Route, Routes } from 'react-router-dom';
import { AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES } from './router';
import { useAuthStore } from './store';

function App() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return (
      <Routes>
        {AUTHENTICATED_ROUTES.map(({ href, Element }) => (
          <Route key={href} path={href} element={<Element />} />
        ))}
      </Routes>
    );
  }
  return (
    <Routes>
      {UNAUTHENTICATED_ROUTES.map(({ href, Element }) => (
        <Route key={href} path={href} element={<Element />} />
      ))}
    </Routes>
  );
}

export default App;
