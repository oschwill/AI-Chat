/* CSS */
import './MainHeader.css';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="main_header_logo">
        <Link to="/">
          <img src="/images/logo.png" alt="OS CHAT LOGO" />
          <span>O.S. AI CHAT</span>
        </Link>
      </div>
      <nav className="main_header_navigation">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
};

export default MainHeader;
