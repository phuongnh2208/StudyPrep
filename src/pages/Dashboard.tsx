import React from 'react';
import Sidebar from '../components/Sidebar';
import UserNavbar from '../components/UserNavbar';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  ChevronRight, 
  Play, 
  Star,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F9FF]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <UserNavbar />
        
        <main className="p-8 flex-1 overflow-auto custom-scrollbar">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Chào buổi sáng, A!</h1>
              <p className="text-slate-500 mt-1">Đã đến lúc bắt đầu luyện tập cho mục tiêu hôm nay.</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 flex items-center shadow-sm">
                <Target className="text-primary w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Mục tiêu: 8.0 IELTS</span>
              </div>
              <div className="bg-primary text-white px-4 py-2 rounded-xl flex items-center shadow-md shadow-primary/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">Chuỗi học: 12 ngày</span>
              </div>
            </div>
          </div>

          {/* Statistics Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="p-3 bg-blue-50 rounded-xl w-fit">
                <Trophy className="text-blue-600 w-6 h-6" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500">Trung bình điểm</p>
                <h2 className="text-3xl font-extrabold text-slate-900">745</h2>
              </div>
              <div className="mt-4 flex items-center text-xs font-bold text-green-500">
                <TrendingUp size={14} className="mr-1" />
                <span>+15.2% tháng này</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="p-3 bg-purple-50 rounded-xl w-fit">
                <Target className="text-purple-600 w-6 h-6" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500">Đề thi đã làm</p>
                <h2 className="text-3xl font-extrabold text-slate-900">42</h2>
              </div>
              <div className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Mục tiêu: 100 đề
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="p-3 bg-amber-50 rounded-xl w-fit">
                <Clock className="text-amber-600 w-6 h-6" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500">Thời gian học</p>
                <h2 className="text-3xl font-extrabold text-slate-900">124h</h2>
              </div>
              <div className="mt-4 flex items-center text-xs font-bold text-slate-500">
                <span>Duy trì 2h/ngày</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-primary p-6 rounded-2xl shadow-lg shadow-primary/20 flex flex-col justify-between text-white"
            >
              <div className="p-3 bg-white/20 rounded-xl w-fit">
                <Star className="text-white w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Xếp hạng</p>
                <h2 className="text-3xl font-extrabold">Top 5%</h2>
              </div>
              <button className="mt-4 text-xs font-bold underline text-white/90">Xem bảng xếp hạng</button>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Continue Learning */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Tiếp tục luyện tập</h3>
                  <button className="text-sm font-bold text-primary hover:underline">Xem lịch sử</button>
                </div>
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Đang làm dở</p>
                      <h4 className="text-2xl font-bold mb-2">TOEIC Practice Test #142</h4>
                      <p className="text-white/60 text-sm mb-6 max-w-sm">Bạn đã hoàn thành phần Listening. Còn 01:12:00 cho phần Reading.</p>
                      <div className="flex space-x-4 mb-2">
                        <Link to="/exam/142" className="btn-primary flex items-center space-x-2 py-3">
                          <Play size={16} fill="white" />
                          <span>Tiếp tục ngay</span>
                        </Link>
                        <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-bold text-sm transition-colors border border-white/10">Lưu sau</button>
                      </div>
                    </div>
                    <div className="mt-8 md:mt-0 relative flex items-center justify-center">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                        <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364.4" strokeDashoffset="182.2" className="text-primary" />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-2xl font-bold">50%</span>
                        <span className="text-[10px] text-white/40 uppercase">Xong</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recommended Exams */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Gợi ý cho bạn</h3>
                  <button className="text-sm font-bold text-primary hover:underline">Khám phá kho đề</button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center space-x-4 group cursor-pointer hover:border-primary/20"
                    >
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-primary/10 transition-colors shrink-0">
                        {i % 2 === 0 ? '🎧' : '📖'}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h4 className="font-bold text-slate-800 truncate">IELTS Reading Mock #{i+10}</h4>
                        <div className="flex items-center text-xs text-slate-500 space-x-3 mt-1">
                          <span>40 Câu hỏi</span>
                          <span>60 Phút</span>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-8">
              {/* Daily Goal Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center justify-between">
                  Mục tiêu hôm nay
                  <span className="bg-green-100 text-green-700 text-[10px] py-1 px-2 rounded-full font-bold">2/3 DONE</span>
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Học 10 từ vựng mới', done: true },
                    { label: 'Làm 1 đề thi thử Reading', done: true },
                    { label: 'Nghe Podcast Tiếng Anh', done: false },
                  ].map((goal, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={cn(
                        "w-5 h-5 rounded-md flex items-center justify-center border transition-colors",
                        goal.done ? "bg-green-500 border-green-500 text-white" : "border-slate-300"
                      )}>
                        {goal.done && <CheckCircle2 size={14} />}
                      </div>
                      <span className={cn("text-sm font-medium", goal.done ? "text-slate-400 line-through" : "text-slate-600")}>{goal.label}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-500 border border-slate-200 hover:bg-slate-100 transition-colors">Tùy chỉnh mục tiêu</button>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Hoạt động gần đây</h3>
                <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                  {[
                    { title: 'Tăng 0.5% Reading rate', time: '2 giờ trước', color: 'bg-primary' },
                    { title: 'Hoàn thành đề Listening #12', time: '6 giờ trước', color: 'bg-blue-500' },
                    { title: 'Nhận huy hiệu "Chăm chỉ 10 ngày"', time: 'Hôm qua', color: 'bg-amber-500' },
                  ].map((act, idx) => (
                    <div key={idx} className="flex space-x-4 relative">
                      <div className={cn("w-6 h-6 rounded-full border-4 border-white shadow-sm shrink-0", act.color)}></div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 leading-none mb-1">{act.title}</p>
                        <p className="text-xs text-slate-500">{act.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advertisement / Pro card */}
              <div className="bg-gradient-to-br from-primary to-red-600 p-6 rounded-3xl text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                 <Star className="absolute -right-2 -top-2 w-24 h-24 text-white/10 rotate-12" />
                 <h4 className="text-lg font-bold mb-2">Trở thành thành viên Pro</h4>
                 <p className="text-white/80 text-xs mb-6">Mở khóa vĩnh viễn toàn bộ kho đề thi từ các trung tâm hàng đầu.</p>
                 <Link to="/pricing" className="block w-full bg-white text-primary font-bold py-3 rounded-xl text-center text-xs hover:scale-[1.02] transition-transform">Nâng cấp chỉ 199k/tháng</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
