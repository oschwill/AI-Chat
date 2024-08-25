import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default HomePage;
