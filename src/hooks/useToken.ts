import { useEffect } from 'react';
import { UserMetaData } from '../typeings';
import { useJwt } from 'react-jwt';
import { useAuthStore } from '../store';

export default function useToken() {
  const { token, setToken, authenticate, unAuthenticate, setUserMetaData } =
    useAuthStore();

  const { decodedToken, isExpired } = useJwt(token || '');

  useEffect(() => {
    if (!isExpired && decodedToken) {
      setUserMetaData(decodedToken as UserMetaData);
      authenticate();
    } else {
      setUserMetaData(undefined);
      unAuthenticate();
    }
  }, [authenticate, decodedToken, isExpired, setUserMetaData, unAuthenticate]);

  async function persistUserMetaData() {
    const userToken = sessionStorage.getItem('userToken');
    userToken && setToken(userToken);
    authenticate();
  }

  return {
    persistUserMetaData,
  };
}
