import { ReactNode, useEffect, useRef } from 'react';
import pingService from './ping.service';
import { observer } from 'mobx-react-lite';

interface AuthProviderProps {
  children: ReactNode;
}

function PingProvider({ children }: AuthProviderProps) {
  const ping = useRef(false);

  useEffect(() => {
    const id = setInterval(pingingUntilBackendIsDown(), 10000);

    return () => clearInterval(id);
  }, []);

  const pingingUntilBackendIsDown = () => {
    if (ping.current === false) {
      pingService.ping().then((success) => (ping.current = success));
    }
    return pingingUntilBackendIsDown;
  };

  return <div>{children}</div>;
}

export default observer(PingProvider);
