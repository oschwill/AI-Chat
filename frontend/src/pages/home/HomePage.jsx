/* CSS */
import { useEffect, useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { useAuthContext } from '../../context/auth/AuthContext';
import LoadingSpinner from '../../components/general/LoadingSpinner';

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState('human1');

  const { userId, isLoaded, navigate } = useAuthContext();

  useEffect(() => {
    // Wenn eingeloggt dann zur Dahsboard Seite leiten
    if (isLoaded && userId) {
      navigate('/dashboard');
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return <LoadingSpinner />;

  return (
    <div className="home">
      <img src="/images/orbital_alternative.png" alt="bg_orbital" className="orbital" />
      <div className="left">
        <h1>O.S. AI CHAT</h1>
        <h2>Steigern Sie Ihre Kreativität und Produktivität</h2>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sunt, voluptatem excepturi
          quisquam reiciendis minima harum voluptatum ratione corrupti commodi doloribus repellat
          deserunt libero, soluta repellendus hic. Doloremque incidunt at animi blanditiis autem,
          unde laborum.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/images/bot_alternative.png" alt="Bot" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === 'human1'
                  ? '/images/human1.jpeg'
                  : typingStatus === 'human2'
                  ? '/images/human2.jpeg'
                  : '/images/bot.png'
              }
              alt="profile"
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Mensch: Ist die Erde rund oder flach?',
                1500,
                () => {
                  setTypingStatus('bot');
                },
                'AI: Die Erde ist natürlich viereckig mein Freund.',
                1500,
                () => {
                  setTypingStatus('human2');
                },
                'Mensch: Kann man das Internet löschen?',
                1500,
                () => {
                  setTypingStatus('bot');
                },
                'AI: Ja man kann versehentlich das Internet löschen, indem Sie...',
                1500,
                () => {
                  setTypingStatus('human1');
                },
              ]}
              wrapper="span"
              style={{ fontSize: '1.25rem', display: 'inline-block' }}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/images/logo.png" alt="Logo" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
