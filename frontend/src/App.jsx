import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import DashBoardPage from './pages/dashboard/DashBoardPage';
import ChatPage from './pages/chat/ChatPage';
import LoadingSpinner from './components/general/LoadingSpinner';
import RootLayout from './layouts/rootlayout/RootLayout';
import DashBoardLayout from './layouts/dashboardlayout/DashBoardLayout';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sign-in/*',
        element: <LoginPage />,
      },
      {
        path: '/sign-up/*',
        element: <SignUpPage />,
      },
      {
        element: <DashBoardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <DashBoardPage />,
          },
          {
            path: '/dashboard/chats/:id',
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />;
}

export default App;
