import { createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContext;
