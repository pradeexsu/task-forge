import { ReactNode, useEffect } from 'react';
import authStore from './auth.store';
import { observer } from 'mobx-react-lite';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const { persistUserMetaData } = authStore;

  useEffect(() => {
    persistUserMetaData();
  }, []);

  return <div>{children}</div>;
}

export default observer(AuthProvider);
