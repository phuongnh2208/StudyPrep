import React from 'react';
import Sidebar from '../components/Sidebar';
import UserNavbar from '../components/UserNavbar';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { 
  Users, 
  BookCopy, 
  DollarSign, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp,
  Search,
  Filter
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'T2', users: 400, revenue: 2400 },
  { name: 'T3', users: 300, revenue: 1398 },
  { name: 'T4', users: 200, revenue: 9800 },
  { name: 'T5', users: 278, revenue: 3908 },
  { name: 'T6', users: 189, revenue: 4800 },
  { name: 'T7', users: 239, revenue: 3800 },
  { name: 'CN', users: 349, revenue: 4300 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F9FF]">
      <Sidebar isAdmin={true} />
      <div className="flex-1 flex flex-col">
        <UserNavbar />
        
        <main className="p-8 flex-1 overflow-auto custom-scrollbar">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Quản trị hệ thống</h1>
            <p className="text-slate-500 mt-1">Tổng quan về hiệu suất hoạt động của StudyPrep.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: 'Tổng người dùng', value: '12,482', change: '+12%', up: true, icon: <Users className="text-blue-600" />, bg: 'bg-blue-50' },
              { label: 'Đề thi đang chạy', value: '450', change: '+5', up: true, icon: <BookCopy className="text-purple-600" />, bg: 'bg-purple-50' },
              { label: 'Doanh thu tháng', value: '$42,500', change: '+18.2%', up: true, icon: <DollarSign className="text-green-600" />, bg: 'bg-green-50' },
              { label: 'Tỷ lệ thoát', value: '14.2%', change: '-2.1%', up: false, icon: <Activity className="text-amber-600" />, bg: 'bg-amber-50' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={cn("p-2.5 rounded-xl", stat.bg)}>
                    {stat.icon}
                  </div>
                  <div className={cn(
                    "flex items-center text-xs font-bold px-2 py-1 rounded-full",
                    stat.up ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                  )}>
                    {stat.up ? <ArrowUpRight size={12} className="mr-1" /> : <ArrowDownRight size={12} className="mr-1" />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-1">{stat.value}</h2>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Lưu lượng truy cập</h3>
                  <p className="text-sm text-slate-500">Thống kê 7 ngày gần nhất</p>
                </div>
                <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold outline-none focus:ring-2 focus:ring-primary/20">
                  <option>7 Ngày qua</option>
                  <option>30 Ngày qua</option>
                </select>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="users" fill="#B90018" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Hoạt động hệ thống</h3>
              <div className="space-y-6">
                {[
                  { user: 'Admin 01', action: 'Cập nhật đề TOEIC #124', time: '10 phút trước' },
                  { user: 'Hệ thống', action: 'Tự động sao lưu dữ liệu', time: '1 giờ trước' },
                  { user: 'Mod_Nam', action: 'Duyệt bài đăng cộng đồng', time: '3 giờ trước' },
                  { user: 'Admin 02', action: 'Thiết lập tỷ giá mới', time: '5 giờ trước' },
                  { user: 'Hệ thống', action: 'Cập nhật chứng chỉ TLS', time: 'Hôm qua' },
                ].map((log, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-500 text-xs shrink-0">{log.user.split(' ')[0]}</div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-tight">{log.action}</p>
                      <p className="text-[10px] text-slate-400 font-medium uppercase mt-1">{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 btn-secondary py-3 text-xs">Xem toàn bộ log</button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="font-bold text-slate-900">Bài thi được thực hiện nhiều nhất</h3>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input type="text" placeholder="Tìm đề thi..." className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-primary/20 transition-all w-full md:w-auto" />
                  </div>
                  <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50"><Filter size={14} /></button>
                </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">ID Đề</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Tên Đề thi</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Danh mục</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Lượt thi</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { id: '#EX2941', name: 'Toeic Economy Vol 5 Test 1', cat: 'Toeic', plays: '12,492', status: 'Hoạt động' },
                    { id: '#EX2942', name: 'IELTS Cambridge 18 Test 2', cat: 'IELTS', plays: '8,210', status: 'Hoạt động' },
                    { id: '#EX2943', name: 'TOEIC New Economy 2024', cat: 'Toeic', plays: '5,100', status: 'Hoạt động' },
                    { id: '#EX2944', name: 'IELTS Writing Task 2 Pro', cat: 'IELTS', plays: '3,840', status: 'Hoạt động' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-slate-400">{row.id}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-800">{row.name}</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 uppercase">{row.cat}</span></td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-600">{row.plays}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "flex items-center space-x-1.5 text-xs font-bold",
                          row.status === 'Hoạt động' ? "text-green-500" : "text-amber-500"
                        )}>
                          <div className={cn("w-1.5 h-1.5 rounded-full", row.status === 'Hoạt động' ? "bg-green-500" : "bg-amber-500")}></div>
                          <span>{row.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
