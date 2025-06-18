import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './store';
import { initializeAuth } from './features/auth/authSlice';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import BandDetails from './pages/BandDetails';
import RehearsalDetails from './pages/RehearsalDetails';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />

        {/* Protected routes */}
        <Route path="dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="bands/:bandId" element={isAuthenticated ? <BandDetails /> : <Navigate to="/login" />} />
        <Route path="rehearsals/:rehearsalId" element={isAuthenticated ? <RehearsalDetails /> : <Navigate to="/login" />} />
        <Route path="profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;