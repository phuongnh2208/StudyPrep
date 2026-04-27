import React from 'react';
import Sidebar from '../components/Sidebar';
import UserNavbar from '../components/UserNavbar';
import { motion } from 'motion/react';
import { 
  Search, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  BookOpen, 
  BarChart2,
  Tags,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const ExamManagement: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null') || { role: 'teacher' };

  const exams = [
    { id: 1, title: 'TOEIC Economy Vol 5 Test 1', category: 'Toeic', questions: 200, time: 120, status: 'Published', publishedDate: '2024-03-10' },
    { id: 2, title: 'IELTS Cambridge 18 Test 2', category: 'IELTS', questions: 40, time: 60, status: 'Draft', publishedDate: '2024-03-15' },
    { id: 3, title: 'TOEIC New Economy 2024 Test 5', category: 'Toeic', questions: 200, time: 120, status: 'Published', publishedDate: '2024-02-28' },
    { id: 4, title: 'IELTS Writing Task 2 Intensive', category: 'IELTS', questions: 2, time: 60, status: 'Published', publishedDate: '2024-03-01' },
    { id: 5, title: 'TOEIC Listening Part 1-4', category: 'Toeic', questions: 100, time: 45, status: 'Published', publishedDate: '2023-12-12' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FF]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <UserNavbar />
        
        <main className="p-8 flex-1 overflow-auto custom-scrollbar">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Kho đề thi</h1>
              <p className="text-slate-500 mt-1">Quản lý nội dung và cấu trúc đề thi trên hệ thống.</p>
            </div>
            <Link to="/admin/exams/create" className="btn-primary flex items-center space-x-2 py-3 px-8 text-sm font-bold shadow-lg shadow-primary/20">
              <Plus size={18} />
              <span>Tạo đề thi mới</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {exams.map((exam) => (
              <motion.div 
                key={exam.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    exam.category === 'Toeic' ? "bg-blue-100 text-blue-600" :
                    exam.category === 'IELTS' ? "bg-purple-100 text-purple-600" : "bg-slate-100 text-slate-500"
                  )}>
                    {exam.category}
                  </div>
                  <div className={cn(
                    "w-2.5 h-2.5 rounded-full ring-4 ring-white shadow-sm",
                    exam.status === 'Published' ? "bg-green-500" :
                    exam.status === 'Draft' ? "bg-amber-500" : "bg-slate-400"
                  )}></div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">{exam.title}</h3>
                
                <div className="flex items-center space-x-4 text-xs text-slate-500 mb-8 pb-6 border-b border-slate-50">
                   <div className="flex items-center"><BookOpen size={14} className="mr-1.5" /> {exam.questions} Câu</div>
                   <div className="flex items-center"><BarChart2 size={14} className="mr-1.5" /> {exam.time} Phút</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                     <button className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors"><Edit3 size={14} /></button>
                     <button className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors"><Eye size={14} /></button>
                     <button className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"><Trash2 size={14} /></button>
                  </div>
                  <button className="text-sm font-bold text-slate-800 flex items-center hover:text-primary transition-colors">
                    Chi tiết <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="max-w-lg mb-6 md:mb-0">
               <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Import từ File Excel?</h3>
               <p className="text-slate-600">Bạn có cấu trúc đề thi sẵn trong Excel? Sử dụng tool chuyển đổi của chúng tôi để tạo đề chỉ trong 30 giây.</p>
            </div>
            <button className="bg-slate-900 text-white font-bold py-4 px-10 rounded-2xl hover:bg-slate-800 transition-all flex items-center">
              <Tags size={18} className="mr-3" />
              Tải lên cấu trúc đề (.xlsx)
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExamManagement;
