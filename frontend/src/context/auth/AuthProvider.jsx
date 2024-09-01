import { useAuth } from '@clerk/clerk-react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';

export const AuthProvider = ({ children }) => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  return (
    <AuthContext.Provider value={{ userId, isLoaded, navigate }}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};
