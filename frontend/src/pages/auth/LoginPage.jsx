import { SignIn } from '@clerk/clerk-react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login">
      <SignIn path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
};

export default LoginPage;
