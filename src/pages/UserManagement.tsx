import React from 'react';
import Sidebar from '../components/Sidebar';
import UserNavbar from '../components/UserNavbar';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  UserPlus, 
  Download,
  Mail,
  ShieldAlert
} from 'lucide-react';
import { cn } from '../lib/utils';

const UserManagement: React.FC = () => {
  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'anv@example.com', role: 'Premium', status: 'Active', joined: '12/05/2023' },
    { id: 2, name: 'Trần Thị B', email: 'btt@example.com', role: 'Basic', status: 'Active', joined: '15/06/2023' },
    { id: 3, name: 'Lê Văn C', email: 'clv@example.com', role: 'Admin', status: 'Banned', joined: '01/01/2023' },
    { id: 4, name: 'Phạm Minh D', email: 'dpm@example.com', role: 'Premium', status: 'Active', joined: '20/07/2023' },
    { id: 5, name: 'Hoàng Anh E', email: 'eha@example.com', role: 'Basic', status: 'Inactive', joined: '10/08/2023' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FF]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <UserNavbar />
        
        <main className="p-8 flex-1 overflow-auto custom-scrollbar">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Người dùng</h1>
              <p className="text-slate-500 mt-1">Quản lý tài khoản và phân quyền thành viên.</p>
            </div>
            <div className="flex space-x-3">
              <button className="btn-secondary flex items-center space-x-2 py-2.5 px-4 text-sm font-bold">
                <Download size={16} />
                <span>Xuất CSV</span>
              </button>
              <button className="btn-primary flex items-center space-x-2 py-2.5 px-6 text-sm font-bold shadow-lg shadow-primary/20">
                <UserPlus size={16} />
                <span>Thêm người dùng</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                   <input 
                     type="text" 
                     placeholder="Tìm tên, email..." 
                     className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm w-full outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                   />
                </div>
                <button className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors">
                  <Filter size={18} className="text-slate-500" />
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-slate-600">8.2k Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  <span className="text-slate-600">420 Inactive</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Thành viên</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gói dịch vụ</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ngày tham gia</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trạng thái</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                            {user.name.charAt(0)}
                          </div>
                          <span className="text-sm font-bold text-slate-900">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{user.email}</td>
                      <td className="px-6 py-4">
                         <span className={cn(
                           "px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase",
                           user.role === 'Premium' ? "bg-amber-100 text-amber-700" : 
                           user.role === 'Admin' ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
                         )}>
                           {user.role}
                         </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-mono italic">{user.joined}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                           {user.status === 'Active' ? <CheckCircle2 size={14} className="text-green-500" /> : 
                            user.status === 'Banned' ? <ShieldAlert size={14} className="text-red-500" /> : <Clock size={14} className="text-slate-400" />}
                           <span className={cn(
                             "text-xs font-bold",
                             user.status === 'Active' ? "text-green-600" : 
                             user.status === 'Banned' ? "text-red-600" : "text-slate-500"
                           )}>{user.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                         <div className="flex items-center space-x-1">
                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-colors"><Mail size={16} /></button>
                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-colors"><MoreVertical size={16} /></button>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
               <p className="text-xs text-slate-500 font-medium tracking-tight">Hiển thị <span className="font-bold text-slate-900">5</span> trong tổng số <span className="font-bold text-slate-900">12,482</span> người dùng</p>
               <div className="flex space-x-2">
                  <button className="p-2 px-4 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-400 cursor-not-allowed">Trước</button>
                  <button className="p-2 px-4 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 hover:bg-slate-50">Sau</button>
               </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserManagement;
