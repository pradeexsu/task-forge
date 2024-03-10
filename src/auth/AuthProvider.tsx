import { ReactNode, useEffect } from 'react';
import useToken from '../hooks/useToken';

function AuthProvider({ children }: { children: ReactNode }) {
  const { persistUserMetaData } = useToken();
  useEffect(() => {
    persistUserMetaData();
  }, []);
  return <div>{children}</div>;
}

export default AuthProvider;
