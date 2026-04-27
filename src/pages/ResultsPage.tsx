import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Trophy, 
  ArrowLeft, 
  RefreshCcw, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  Clock,
  LayoutDashboard,
  BrainCircuit,
  Share2
} from 'lucide-react';
import { cn } from '../lib/utils';

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state || { correctCount: 8, total: 200, answers: {} };

  const score = Math.round((results.correctCount / results.total) * 990); // Simple TOEIC score mapping

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-slate-500 hover:text-primary transition-colors font-bold text-sm"
          >
            <ArrowLeft size={16} className="mr-2" />
            Trở về bảng điều khiển
          </button>
          
          <div className="flex space-x-3">
             <button className="btn-secondary px-4 py-2 text-sm flex items-center space-x-2">
               <Share2 size={16} />
               <span>Chia sẻ kết quả</span>
             </button>
          </div>
        </div>

        {/* Results Banner */}
        <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20"
              >
                <Trophy size={32} className="text-white" />
              </motion.div>
              <h1 className="text-4xl font-extrabold mb-4">Chúc mừng bạn!</h1>
              <p className="text-white/60 text-lg max-w-sm mb-8">Bạn đã hoàn thành bài thi với kết quả khá tốt. Hãy tiếp tục duy trì phong độ này nhé.</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 <Link to="/exam/142" className="btn-primary py-4 px-8 rounded-xl flex items-center space-x-3">
                    <RefreshCcw size={18} />
                    <span>Luyện tập lại</span>
                 </Link>
                 <Link to="/dashboard" className="bg-white/10 hover:bg-white/20 border border-white/20 py-4 px-8 rounded-xl font-bold flex items-center space-x-3 transition-colors">
                    <LayoutDashboard size={18} />
                    <span>Xem thống kê</span>
                 </Link>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 flex flex-col items-center">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Ước tính điểm Toeic</p>
              <h2 className="text-[120px] leading-none font-extrabold text-primary mb-4 drop-shadow-2xl">
                {score}
              </h2>
              <div className="grid grid-cols-2 gap-8 w-full border-t border-white/10 pt-8 mt-4">
                <div className="text-center">
                  <p className="text-sm font-bold text-white">{results.correctCount}/{results.total}</p>
                  <p className="text-[10px] text-white/40 uppercase">Đúng</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white">01:52:12</p>
                  <p className="text-[10px] text-white/40 uppercase">Thời gian</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid md:grid-cols-3 gap-8">
           <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Phân tích chi tiết</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Listening Part 1', score: '6/6', icon: <CheckCircle2 className="text-green-500" />, desc: 'Kiến thức vững chắc' },
                  { title: 'Listening Part 2', score: '20/25', icon: <CheckCircle2 className="text-green-500" />, desc: 'Cần chú ý bẫy' },
                  { title: 'Reading Part 5', score: '22/30', icon: <Clock className="text-amber-500" />, desc: 'Thiếu thời gian' },
                  { title: 'Reading Part 7', score: '35/54', icon: <XCircle className="text-red-500" />, desc: 'Cần luyện thêm từ vựng' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-center space-x-4">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <div className="flex items-center justify-between w-full min-w-[140px]">
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <span className="text-sm font-mono font-bold text-primary">{item.score}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/10 p-8 rounded-3xl mt-12 flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                  <BrainCircuit className="text-white" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">AI Tư vấn lộ trình</h3>
                   <p className="text-slate-600 leading-relaxed mb-6">Dựa trên kết quả này, AI nhận thấy bạn đang gặp khó khăn ở phần **Reading Part 7 (Đọc hiểu)** do vốn từ vựng chuyên ngành còn hạn chế. Chúng tôi khuyên bạn nên tập trung vào khóa học "Từ vựng Toeic 900+ cấp tốc".</p>
                   <button className="btn-primary py-3 px-8 text-sm">Gia nhập lộ trình đề xuất</button>
                </div>
              </div>
           </div>

           <div className="space-y-8">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-6">Kết quả theo phần</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Listening', value: 85, color: 'bg-green-500' },
                    { label: 'Grammar', value: 72, color: 'bg-blue-500' },
                    { label: 'Vocabulary', value: 54, color: 'bg-amber-500' },
                    { label: 'Speed', value: 92, color: 'bg-primary' },
                  ].map((stat, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">
                        <span>{stat.label}</span>
                        <span>{stat.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={cn("h-full rounded-full", stat.color)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <button className="w-full btn-secondary mb-4 flex items-center justify-between group">
                    <span>Xem lời giải chi tiết</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full btn-secondary flex items-center justify-between group">
                    <span>Lưu bài về PDF</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
