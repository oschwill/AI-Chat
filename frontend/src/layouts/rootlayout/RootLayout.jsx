import { Outlet } from 'react-router-dom';
import MainHeader from '../../components/header/MainHeader';
import './RootLayout.css';

const RootLayout = () => {
  return (
    <div className="root_layout">
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
