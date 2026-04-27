import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, BookOpen, Users, Trophy, Star, Facebook } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">StudyPrep</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-primary transition-colors">Khóa học</a>
            <a href="#" className="hover:text-primary transition-colors">Đề thi</a>
            <a href="#" className="hover:text-primary transition-colors">Về chúng tôi</a>
            <Link to="/pricing" className="hover:text-primary transition-colors">Bảng giá</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-primary">Đăng nhập</Link>
            <Link to="/login" className="btn-primary py-2 px-5 text-sm rounded-lg">Đăng ký</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-6">
              Giải pháp luyện thi số 1
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Luyện thi online <span className="text-primary italic">hiệu quả</span> cùng StudyPrep
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Hệ thống cung cấp hàng ngàn đề thi thử sát với thực tế, giúp bạn tự tin chinh phục mọi kỳ thi quan trọng với lộ trình cá nhân hóa.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard" className="btn-primary py-4 px-8 rounded-xl flex items-center justify-center space-x-3 text-lg">
                <Play className="w-5 h-5 fill-current" />
                <span>Bắt đầu học ngay</span>
              </Link>
              <button className="btn-secondary py-4 px-8 rounded-xl flex items-center justify-center space-x-3 text-lg text-slate-700">
                <span>Khám phá đề thi</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-2xl font-bold text-slate-900">10k+</p>
                <p className="text-sm text-slate-500">Học sinh</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-slate-900">5k+</p>
                <p className="text-sm text-slate-500">Đề thi</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-200"></div>
              <div className="flex items-center space-x-1 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <p className="text-2xl font-bold text-slate-900">4.9</p>
                <p className="text-sm text-slate-500 ml-1">(Đánh giá)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl opacity-50"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60" 
              alt="Student" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border-[12px] border-white"
            />
            
            {/* Stats floating cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 border border-slate-100 backdrop-blur-sm"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Trophy className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Top 1%</p>
                <p className="text-sm font-bold text-slate-900">Thủ khoa đầu vào</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-1/4 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 border border-slate-100 backdrop-blur-sm"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="text-primary w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Active</p>
                <p className="text-sm font-bold text-slate-900">2,492 học viên</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Exams Header */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Đề thi nổi bật</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Chọn bộ đề thi phù hợp với mục tiêu của bạn. Dữ liệu được cập nhật hàng tuần giúp bạn bắt kịp xu hướng ra đề mới nhất.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "TOEIC Full Practice 2024", icon: "🎧", count: "1,240 đề", players: "15.5k" },
              { title: "IELTS Academic Mock Test", icon: "🌍", count: "450 đề", players: "12k" },
              { title: "IELTS General Training", icon: "📖", count: "320 đề", players: "5.2k" },
              { title: "TOEIC Part 5 & 6 Intensive", icon: "📝", count: "890 đề", players: "8k" },
              { title: "IELTS Speaking Assistant", icon: "🗣️", count: "150 đề", players: "4.8k" },
              { title: "TOEIC Bridge Basic", icon: "📚", count: "210 đề", players: "3k" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="card p-6 cursor-pointer hover:border-primary/30 group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span className="flex items-center"><BookOpen className="w-3 h-3 mr-1" /> {item.count}</span>
                  <span className="flex items-center"><Users className="w-3 h-3 mr-1" /> {item.players} lượt học</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn-secondary">Xem tất cả đề thi</button>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-800/50 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
          
          <h2 className="text-4xl font-extrabold mb-6 relative z-10">Sẵn sàng để bứt phá điểm số?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto relative z-10">Gia nhập cộng đồng 100,000+ học viên đang luyện tập mỗi ngày để đạt được mục tiêu học tập của mình.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
            <button className="bg-white text-primary font-bold py-4 px-10 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">Đăng ký hoàn toàn miễn phí</button>
            <button className="bg-primary-hover/50 border border-white/30 font-bold py-4 px-10 rounded-xl hover:bg-primary-hover transition-colors">Tư vấn chọn lộ trình</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">StudyPrep</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">Giải pháp công nghệ giáo dục toàn diện dành cho kỳ thi tuyển sinh và chứng chỉ quốc tế.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Nền tảng</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Tính năng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Đề thi mẫu</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog chia sẻ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cộng đồng</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Công ty</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Báo chí</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Pháp lý</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Điều khoản</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bảo mật</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">© 2024 StudyPrep. All rights reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <div className="w-5 h-5 border border-slate-400 rounded flex items-center justify-center text-[10px] hover:text-white cursor-pointer font-bold">X</div>
            <div className="w-5 h-5 border border-slate-400 rounded flex items-center justify-center text-[10px] hover:text-white cursor-pointer font-bold">In</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
