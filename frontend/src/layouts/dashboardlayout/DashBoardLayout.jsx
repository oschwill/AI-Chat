/* CSS */
import './DashBoardLayout.css';

import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingSpinner from '../../components/general/LoadingSpinner';
import { useAuthContext } from '../../context/auth/AuthContext';

const DashBoardLayout = () => {
  const { userId, isLoaded, navigate } = useAuthContext();

  useEffect(() => {
    // Checken ob wir eingeloggt sind, falls nicht dann redirtecten zu sign in Page
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return <LoadingSpinner />;

  return (
    <div className="dash_layout">
      <div className="dash_menu">MENU</div>
      <div className="dash_content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
