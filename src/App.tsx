import { Route, Routes } from 'react-router-dom';
import { AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES } from './router';
import { useEffect, useState } from 'react';
import authStore from './modules/Auth/auth.store';

function App() {
  const { isAuthenticated } = authStore;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );

  if (!isAuthenticated) {
    return (
      <Routes>
        {UNAUTHENTICATED_ROUTES.map(({ href, Element }) => (
          <Route key={href} path={href} element={<Element />} />
        ))}
      </Routes>
    );
  }
  return (
    <Routes>
      {AUTHENTICATED_ROUTES.map(({ href, Element }) => (
        <Route key={href} path={href} element={<Element />} />
      ))}
    </Routes>
  );
}

export default App;
