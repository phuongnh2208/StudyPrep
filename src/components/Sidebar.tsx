import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  History, 
  Award, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface SidebarProps {
  isAdmin?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isAdmin = false }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const menuItems = isAdmin ? [
    { icon: LayoutDashboard, label: 'Thống kê', path: '/admin/dashboard' },
    { icon: BookOpen, label: 'Quản lý đề thi', path: '/admin/exams' },
    { icon: ShieldCheck, label: 'Người dùng', path: '/admin/users' },
  ] : [
    { icon: LayoutDashboard, label: 'Tổng quan', path: '/dashboard' },
    { icon: BookOpen, label: 'Kho đề thi', path: '/exams' },
    { icon: History, label: 'Lịch sử thi', path: '/history' },
    { icon: Award, label: 'Chứng chỉ', path: '/certificates' },
  ];

  return (
    <motion.aside 
      initial={false}
      animate={{ width: isCollapsed ? '80px' : '260px' }}
      className="h-screen bg-white border-r border-slate-200 flex flex-col sticky top-0 transition-all duration-300 z-30"
    >
      <div className="p-6 flex items-center justify-between mb-4">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">StudyPrep</span>
          </div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
              isActive 
                ? "bg-primary text-white shadow-md shadow-primary/20" 
                : "text-slate-500 hover:bg-slate-50 hover:text-primary"
            )}
          >
            <item.icon size={20} className={cn("flex-shrink-0", isCollapsed ? "mx-auto" : "mr-3")} />
            {!isCollapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 space-y-1">
        <NavLink
          to="/settings"
          className={({ isActive }) => cn(
            "flex items-center px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium",
            isActive ? "bg-slate-100 text-primary" : "text-slate-500 hover:bg-slate-50"
          )}
        >
          <Settings size={20} className={cn("flex-shrink-0", isCollapsed ? "mx-auto" : "mr-3")} />
          {!isCollapsed && <span>Cài đặt</span>}
        </NavLink>
        <button className="w-full flex items-center px-4 py-3 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-sm font-medium">
          <LogOut size={20} className={cn("flex-shrink-0", isCollapsed ? "mx-auto" : "mr-3")} />
          {!isCollapsed && <span>Đăng xuất</span>}
        </button>
      </div>

      {!isCollapsed && (
        <div className="m-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Phiên bản Pro</p>
          <p className="text-xs text-slate-600 mb-3">Mở khóa 1000+ đề cao cấp</p>
          <button className="w-full bg-white border border-slate-200 py-2 rounded-lg text-xs font-bold text-slate-700 hover:scale-[1.02] transition-transform">Nâng cấp ngay</button>
        </div>
      )}
    </motion.aside>
  );
};

export default Sidebar;
