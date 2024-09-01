import { Outlet } from 'react-router-dom';
import MainHeader from '../../components/header/MainHeader';
import './RootLayout.css';
import { AuthProvider } from '../../context/auth/AuthProvider';

const RootLayout = () => {
  return (
    <AuthProvider>
      <div className="root_layout">
        <MainHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </AuthProvider>
  );
};

export default RootLayout;
