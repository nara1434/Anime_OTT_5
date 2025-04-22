import React from 'react';
import { useRoutes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import EditProfile from './components/EditProfile';
import AddProfile from './components/AddProfile';
import History from './components/History';
import AccountSettings from './components/AccountSettings';
import DownloadPage from './components/DownloadPage';
import SignOutPage from './components/SignOut';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/ProfilePage', element: <ProfilePage /> },
    { path: '/EditProfile', element: <EditProfile /> },
    { path: '/AddProfile', element: <AddProfile /> },
    { path: '/History', element: <History /> },
    { path: '/AccountSettings', element: <AccountSettings /> },
    { path: '/DownloadPage', element: <DownloadPage /> },
    { path: '/SignOut', element: <SignOutPage /> },
  ]);

  return routes;
};

export default AppRoutes;
