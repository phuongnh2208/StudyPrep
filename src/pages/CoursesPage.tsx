import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Search, Filter, Play, Star, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesPage: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Khóa học TOEIC 750+ Cấp tốc",
      instructor: "Ms. Hoa",
      rating: 4.8,
      students: 1240,
      price: "499k",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=60",
      category: "TOEIC"
    },
    {
      id: 2,
      title: "Luyện thi IELTS Academic 8.0",
      instructor: "Mr. Đặng",
      rating: 4.9,
      students: 850,
      price: "1.299k",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&auto=format&fit=crop&q=60",
      category: "IELTS"
    },
    {
      id: 3,
      title: "Giao tiếp Tiếng Anh từ con số 0",
      instructor: "Ms. Lan",
      rating: 4.7,
      students: 2100,
      price: "299k",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=60",
      category: "Giao tiếp"
    },
    {
      id: 4,
      title: "Ngữ pháp IELTS chuyên sâu",
      instructor: "Mr. Tuấn",
      rating: 4.6,
      students: 1500,
      price: "399k",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=60",
      category: "IELTS"
    },
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
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Khóa học trực tuyến</h1>
            <p className="text-slate-500">Nâng tầm kỹ năng với lộ trình tối ưu từ chuyên gia.</p>
          </div>
          
          <div className="flex w-full md:w-auto space-x-3">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Tìm khóa học..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-medium text-sm"
              />
            </div>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={20} className="text-slate-600" />
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 custom-scrollbar">
          {['Tất cả', 'TOEIC', 'IELTS', 'Giao tiếp', 'Từ vựng', 'Ngữ pháp'].map((cat) => (
            <button key={cat} className="px-5 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:border-primary hover:text-primary transition-all whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors h-12 overflow-hidden underline-offset-4 decoration-2">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4">{course.instructor}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-slate-700">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Users size={14} />
                    <span className="text-xs font-bold">{course.students}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-xl font-extrabold text-slate-900">{course.price}</span>
                  <button className="btn-primary p-2.5 rounded-xl shadow-lg shadow-primary/20">
                    <Play size={16} fill="white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
