import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { AnimatePresence } from 'motion/react';

const App: React.FC = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exam/:id" element={<ExamInterface />} />
          <Route path="/exam/results" element={<ResultsPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/exams" element={<ExamManagement />} />
          <Route path="/admin/exams/create" element={<CreateExam />} />
          <Route path="/pricing" element={<SubscriptionPlans />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
