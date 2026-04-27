import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Trophy, Target, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <nav className="bg-white border-b border-slate-100 h-16 flex items-center px-4 md:px-8 sticky top-0 z-50">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">StudyPrep</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Kiến tạo <span className="text-primary italic">tương lai</span> thông qua giáo dục công nghệ
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              StudyPrep được thành lập với sứ mệnh mang lại trải nghiệm luyện thi công bằng, hiệu quả và cá nhân hóa cho mọi học viên Việt Nam. Chúng tôi tin rằng công nghệ có thể xóa nhòa khoảng cách giáo dục.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-extrabold text-slate-900">2020</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Năm thành lập</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-slate-900">100k+</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Người dùng tin tưởng</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60" alt="Team" className="rounded-[3rem] shadow-2xl relative z-10" />
             <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 z-20 hidden md:block">
                <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <ShieldCheck size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-slate-900 leading-none">Đối tác chính thức</p>
                      <p className="text-xs text-slate-500 mt-1">Của 50+ trung tâm lớn</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Giá trị cốt lõi của chúng tôi</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Chúng tôi không chỉ xây dựng một website, chúng tôi xây dựng một người bạn đồng hành.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: "Lấy học viên làm trọng tâm", desc: "Mọi tính năng đều được tối ưu dựa trên phản hồi và nhu cầu thực tế của người học." },
              { icon: Globe, title: "Công nghệ hiện đại", desc: "Áp dụng AI và Big Data để cá nhân hóa lộ trình, giúp tiết kiệm 50% thời gian ôn luyện." },
              { icon: Trophy, title: "Cam kết chất lượng", desc: "Nội dung đề thi được đội ngũ chuyên gia kiểm duyệt gắt gao, sát nhất với đề thực tế." }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-primary mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <h2 className="text-4xl font-extrabold text-white mb-6 relative z-10">Đồng hành cùng StudyPrep?</h2>
          <p className="text-white/60 text-lg mb-10 relative z-10">Chúng tôi luôn tìm kiếm những nhân tài tâm huyết với sự nghiệp giáo dục.</p>
          <button className="btn-primary py-4 px-12 relative z-10">Xem vị trí tuyển dụng</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
