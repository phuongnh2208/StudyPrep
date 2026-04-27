import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ExamInterface from './pages/ExamInterface';
import ResultsPage from './pages/ResultsPage';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';
import ExamManagement from './pages/ExamManagement';
import CreateExam from './pages/CreateExam';
import SubscriptionPlans from './pages/SubscriptionPlans';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import ExamListPage from './pages/ExamListPage';
import { AnimatePresence } from 'motion/react';

// Simple mock auth guard
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pricing" element={<SubscriptionPlans />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/exams-list" element={<ExamListPage />} />
          
          {/* Student Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['student']}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/exams" element={
             <ProtectedRoute allowedRoles={['student']}>
               <ExamListPage />
             </ProtectedRoute>
          } />
          
          {/* Exam Interface (Accessible from Landing as demo or after login) */}
          <Route path="/exam/:id" element={<ExamInterface />} />
          <Route path="/exam/results" element={<ResultsPage />} />
          
          {/* Teacher Routes */}
          <Route path="/teacher/dashboard" element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <ExamManagement />
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <UserManagement />
            </ProtectedRoute>
          } />
          <Route path="/admin/exams" element={
            <ProtectedRoute allowedRoles={['teacher', 'admin']}>
              <ExamManagement />
            </ProtectedRoute>
          } />
          <Route path="/admin/exams/create" element={
            <ProtectedRoute allowedRoles={['teacher', 'admin']}>
              <CreateExam />
            </ProtectedRoute>
          } />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
