import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import UserNavbar from '../components/UserNavbar';
import { 
  ArrowLeft, 
  Save, 
  Upload, 
  PlusCircle, 
  Trash2, 
  FileText, 
  Settings,
  HelpCircle,
  Type,
  CheckCircle2,
  Mic,
  Image as ImageIcon
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

const CreateExam: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen bg-[#F8F9FF]">
      <Sidebar isAdmin={true} />
      <div className="flex-1 flex flex-col">
        <UserNavbar />
        
        <main className="p-8 flex-1 overflow-auto custom-scrollbar flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate(-1)} className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500 transition-colors">
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Tạo đề thi mới</h1>
                <div className="flex items-center text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                  <span>Bước {step}/3</span>
                  <div className="h-1 w-1 bg-slate-300 rounded-full mx-2"></div>
                  <span>{step === 1 ? 'Thông tin chung' : step === 2 ? 'Cấu trúc câu hỏi' : 'Cấu hình thời gian'}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="btn-secondary py-2.5 px-6">Lưu nháp</button>
              <button className="btn-primary py-2.5 px-6 flex items-center space-x-2">
                <Save size={18} />
                <span>Xuất bản đề thi</span>
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-4xl w-full mx-auto">
            {/* Steps Progress */}
            <div className="flex items-center mb-10">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center flex-1 last:flex-none">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-2",
                    step >= num ? "bg-primary border-primary text-white" : "bg-white border-slate-200 text-slate-400"
                  )}>
                    {step > num ? <CheckCircle2 size={18} /> : num}
                  </div>
                  {num < 3 && <div className={cn("h-[2px] flex-1 mx-4 transition-colors", step > num ? "bg-primary" : "bg-slate-200")}></div>}
                </div>
              ))}
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-sm mb-12">
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Tên đề thi *</label>
                      <input type="text" placeholder="Ví dụ: Toeic Full Test 142" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Danh mục đề thi *</label>
                      <select className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-medium appearance-none">
                        <option>Chọn danh mục</option>
                        <option>TOEIC</option>
                        <option>IELTS</option>
                        <option>THPT Quốc Gia</option>
                        <option>JLPT</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Mô tả ngắn</label>
                    <textarea rows={4} placeholder="Nhập mô tả về kỳ thi hoặc hướng dẫn thí sinh..." className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-medium resize-none"></textarea>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col items-center text-center group cursor-pointer hover:bg-primary/5 hover:border-primary/20 transition-all">
                       <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary mb-4 transition-colors">
                          <Upload size={24} />
                       </div>
                       <p className="text-xs font-bold text-slate-600">Thumbnail Đề thi</p>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col items-center text-center group cursor-pointer hover:bg-primary/5 hover:border-primary/20 transition-all">
                       <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary mb-4 transition-colors">
                          <Mic size={24} />
                       </div>
                       <p className="text-xs font-bold text-slate-600">Audio (Listening)</p>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col items-center text-center group cursor-pointer hover:bg-primary/5 hover:border-primary/20 transition-all">
                       <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary mb-4 transition-colors">
                          <FileText size={24} />
                       </div>
                       <p className="text-xs font-bold text-slate-600">Tài liệu tham khảo</p>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">Danh sách câu hỏi (0 câu)</h3>
                    <button className="text-primary font-bold text-sm flex items-center hover:underline">
                      <PlusCircle size={16} className="mr-2" />
                      Thêm câu hỏi
                    </button>
                  </div>
                  
                  <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                      <Settings size={32} className="text-slate-300 animate-spin-slow" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">Chưa có câu hỏi nào</h4>
                    <p className="text-sm text-slate-500 max-w-xs mb-8">Bạn có thể thêm câu hỏi thủ công hoặc sử dụng template Excel để nhập hàng loạt.</p>
                    <div className="flex space-x-4">
                      <button className="btn-primary px-6 py-3 text-sm">Thêm câu hỏi lẻ</button>
                      <button className="btn-secondary px-6 py-3 text-sm">Import Excel</button>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between">
                <button 
                  disabled={step === 1}
                  onClick={() => setStep(prev => prev - 1)}
                  className="px-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 disabled:opacity-30 transition-all"
                >
                  Quay lại
                </button>
                <button 
                  onClick={() => {
                    if (step < 3) setStep(prev => prev + 1);
                    else navigate('/admin/exams');
                  }}
                  className="btn-primary py-3 px-12"
                >
                  {step === 3 ? 'Hoàn tất & Lưu' : 'Tiếp tục'}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateExam;
