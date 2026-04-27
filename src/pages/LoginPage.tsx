import React from 'react';
import { motion } from 'motion/react';
import { LogIn, ChevronRight, BookOpen, User, Facebook } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as any).querySelector('input[type="text"]').value.toLowerCase();
    const password = (e.target as any).querySelector('input[type="password"]').value;

    if (password === '123') {
      let role = '';
      let dashboard = '';
      let name = '';

      if (email === 'user') {
        role = 'student';
        dashboard = '/dashboard';
        name = 'Học viên Demo';
      } else if (email === 'teacher') {
        role = 'teacher';
        dashboard = '/teacher/dashboard';
        name = 'Giáo viên Demo';
      } else if (email === 'admin') {
        role = 'admin';
        dashboard = '/admin/dashboard';
        name = 'Quản trị viên';
      }

      if (role) {
        localStorage.setItem('user', JSON.stringify({ name, email, role }));
        navigate(dashboard);
        return;
      }
    }
    alert('Sai thông tin đăng nhập! Gợi ý: user/123, teacher/123, admin/123');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
            <BookOpen className="text-white w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">StudyPrep</h1>
          <p className="text-slate-500 text-sm mt-1">Đăng nhập để tiếp tục học tập</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider ml-1">Tên đăng nhập</label>
            <input 
              type="text" 
              placeholder="user, teacher hoặc admin"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider ml-1">Mật khẩu</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              defaultValue="123"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
              <span className="text-xs text-slate-600">Ghi nhớ đăng nhập</span>
            </label>
            <button type="button" className="text-xs text-primary font-semibold hover:underline">Quên mật khẩu?</button>
          </div>

          <button 
            type="submit" 
            className="w-full btn-primary py-3 flex items-center justify-center space-x-2 group"
          >
            <span>Đăng nhập ngay</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-medium">Hoặc đăng nhập với</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
              <span className="text-xs font-semibold text-slate-600">Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-2.5 bg-[#1877F2] text-white rounded-lg hover:bg-[#166fe5] transition-colors">
              <Facebook className="w-4 h-4 fill-current" />
              <span className="text-xs font-semibold">Facebook</span>
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Chưa có tài khoản?{' '}
          <Link to="/" className="text-primary font-bold hover:underline">Đăng ký thành viên</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
