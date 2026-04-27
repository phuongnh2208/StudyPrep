import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Search, Filter, ChevronRight, Users, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExamListPage: React.FC = () => {
  const exams = [
    { id: 1, title: "TOEIC Full Practice 2024", category: "TOEIC", questions: 200, time: 120, players: "15.5k", premium: false },
    { id: 2, title: "IELTS Academic Mock Test", category: "IELTS", questions: 40, time: 60, players: "12k", premium: true },
    { id: 3, title: "IELTS General Training", category: "IELTS", questions: 40, time: 60, players: "5.2k", premium: false },
    { id: 4, title: "TOEIC Part 5 & 6 Intensive", category: "TOEIC", questions: 52, time: 30, players: "8k", premium: true },
    { id: 5, title: "IELTS Speaking Assistant", category: "IELTS", questions: 3, time: 15, players: "4.8k", premium: true },
    { id: 6, title: "TOEIC Bridge Basic", category: "TOEIC", questions: 100, time: 60, players: "3k", premium: false },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Simple Header */}
      <nav className="bg-white border-b border-slate-100 h-16 flex items-center px-4 md:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">StudyPrep</span>
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Kho đề thi</h1>
            <p className="text-slate-500">Hệ thống đề thi sát với thực tế, cập nhật liên tục.</p>
          </div>
          
          <div className="flex w-full md:w-auto space-x-3">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Tìm đề thi..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-medium text-sm"
              />
            </div>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={20} className="text-slate-600" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam) => (
            <motion.div 
              key={exam.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
            >
              {exam.premium && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-8 py-1 rotate-45 translate-x-8 translate-y-3 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  Pro
                </div>
              )}
              
              <div className="flex justify-between items-start mb-6">
                 <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                   {exam.category}
                 </div>
                 <div className="flex items-center space-x-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-slate-700">4.9</span>
                 </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{exam.title}</h3>
              
              <div className="flex items-center space-x-4 text-xs text-slate-500 mb-8 border-b border-slate-50 pb-6">
                 <div className="flex items-center"><BookOpen size={14} className="mr-1.5" /> {exam.questions} Câu</div>
                 <div className="flex items-center"><Clock size={14} className="mr-1.5" /> {exam.time} Phút</div>
                 <div className="flex items-center"><Users size={14} className="mr-1.5" /> {exam.players} lượt thi</div>
              </div>

              <Link 
                to={`/exam/${exam.id}`}
                className="w-full flex items-center justify-between py-3 px-6 bg-slate-50 group-hover:bg-primary group-hover:text-white rounded-2xl font-bold text-sm transition-all"
              >
                <span>Vào thi ngay</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExamListPage;
