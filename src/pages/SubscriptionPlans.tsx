import React from 'react';
import { motion } from 'motion/react';
import { Check, BookOpen, Star, Trophy, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubscriptionPlans: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-primary/5 -skew-y-3 origin-top-left -z-10"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
        >
          <Star className="text-primary w-4 h-4 fill-current" />
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Pricing Platforms</span>
        </motion.div>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Gói dịch vụ phù hợp cho <span className="text-primary italic">mọi người</span></h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">Chọn lộ trình nâng cấp kiến thức của bạn ngay hôm nay. Hàng ngàn học viên đã bắt đầu bứt phá chỉ với chi phí bằng một cốc café mỗi ngày.</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Basic Plan */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col hover:border-primary/20 transition-all"
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Basic Plan</h3>
            <p className="text-sm text-slate-400 font-medium">Bắt đầu học tập tự do & miễn phí</p>
          </div>
          
          <div className="mb-10">
            <span className="text-5xl font-extrabold text-slate-900">$0</span>
            <span className="text-slate-400 font-bold ml-2">/ vĩnh viễn</span>
          </div>

          <div className="space-y-5 mb-12 flex-1">
            {[
              "Làm 5 đề thi mỗi tuần",
              "Truy cập kho tài liệu cơ bản",
              "Thống kê điểm số cơ bản",
              "Tham gia cộng đồng học tập",
              "Hỗ trợ qua Email"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                  <Check size={14} />
                </div>
                <span className="text-sm font-medium text-slate-600">{feature}</span>
              </div>
            ))}
          </div>

          <Link to="/login" className="btn-secondary py-4 text-center font-bold rounded-2xl block">Sử dụng ngay</Link>
        </motion.div>

        {/* Premium Plan */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-primary/20 flex flex-col relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl opacity-50"></div>
          
          <div className="mb-8 relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white mb-2">Premium Member</h3>
              <div className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider animate-pulse">Phổ biến nhất</div>
            </div>
            <p className="text-sm text-white/40 font-medium">Full quyền truy cập & AI hỗ trợ</p>
          </div>
          
          <div className="mb-10 relative z-10">
            <span className="text-5xl font-extrabold text-white">199k</span>
            <span className="text-white/40 font-bold ml-2">/ tháng</span>
            <p className="text-xs text-primary font-bold mt-2 tracking-wide uppercase">Tiết kiệm 50% khi đăng ký 1 năm</p>
          </div>

          <div className="space-y-5 mb-12 flex-1 relative z-10">
            {[
              "Không giới hạn số lượt thi",
              "Mở khóa toàn bộ 1000+ đề cao cấp",
              "AI phân tích lỗi sai chi tiết",
              "Xem đáp án & giải thích video",
              "Hỗ trợ 24/7 trực tiếp",
              "Ưu tiên cập nhật đề thi mới nhất"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                  <Check size={14} />
                </div>
                <span className="text-sm font-medium text-white/80">{feature}</span>
              </div>
            ))}
          </div>

          <Link to="/login" className="bg-primary text-white font-bold py-5 text-center rounded-2xl hover:bg-primary-hover transition-colors shadow-lg relative z-10">Nâng cấp Premium ngay</Link>
          
          <div className="mt-8 grid grid-cols-3 gap-4 relative z-10 border-t border-white/10 pt-8">
             <div className="text-center">
                <ShieldCheck className="mx-auto text-primary w-5 h-5 mb-2" />
                <p className="text-[10px] font-bold text-white/40 uppercase">Bảo mật</p>
             </div>
             <div className="text-center">
                <Zap className="mx-auto text-primary w-5 h-5 mb-2" />
                <p className="text-[10px] font-bold text-white/40 uppercase">Nhanh chóng</p>
             </div>
             <div className="text-center">
                <Trophy className="mx-auto text-primary w-5 h-5 mb-2" />
                <p className="text-[10px] font-bold text-white/40 uppercase">Cam kết</p>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 text-center text-slate-400">
        <p className="text-sm font-medium">Bạn có câu hỏi? <a href="#" className="text-primary font-bold hover:underline">Liên hệ tư vấn viên</a></p>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
