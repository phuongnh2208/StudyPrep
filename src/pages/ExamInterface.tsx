import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Timer, 
  Flag, 
  HelpCircle, 
  Send,
  Volume2,
  BookOpen,
  Layout,
  Maximize2,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

interface Question {
  id: number;
  part: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  passage?: string;
  audioUrl?: string;
}

const ExamInterface: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [currentPart, setCurrentPart] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Mock questions for demonstration
  const questions: Question[] = [
    { 
      id: 1, 
      part: 1, 
      text: "Look at the picture marked number 1 in your test book. What can you see?", 
      options: ["A man is working at a desk.", "A woman is opening a window.", "They are sitting in a circle.", "The room is empty."], 
      correctAnswer: 0,
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    { 
      id: 2, 
      part: 1, 
      text: "Look at the picture marked number 2. What is the woman doing?", 
      options: ["She is walking her dog.", "She is riding a bicycle.", "She is reading a newspaper.", "She is carrying a bag."], 
      correctAnswer: 2,
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      id: 101,
      part: 5,
      text: "Customer service is our top ________, and we strive to provide the best experience possible.",
      options: ["prioritize", "priority", "prioritized", "prioritizing"],
      correctAnswer: 1
    },
    {
      id: 151,
      part: 7,
      passage: "Dear Mr. Henderson,\n\nWe are pleased to inform you that your application for the Senior Developer position has been accepted. Your starting date will be June 1st. Please confirm your attendance by replying to this email.\n\nBest regards,\nHR Department",
      text: "What is the purpose of the email?",
      options: ["To schedule an interview", "To offer a job", "To request a resume", "To postpone a start date"],
      correctAnswer: 1
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const toggleFlag = (questionId: number) => {
    setFlagged((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleSubmit = () => {
    if (confirm("Bạn có chắc chắn muốn nộp bài thi?")) {
      navigate('/exam/results', { state: { answers, correctCount: 3, total: 200 } });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={cn(
      "min-h-screen bg-slate-50 flex flex-col",
      isFullscreen && "fixed inset-0 z-50 overflow-hidden"
    )}>
      {/* Exam Header */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm sticky top-0 z-40">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-50 rounded-lg text-slate-500">
            <X size={20} />
          </button>
          <div className="h-6 w-[1px] bg-slate-200"></div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 leading-none">TOEIC Full Practice Test #142</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Đề thi chính thức 2024</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-xl border border-primary/20">
            <Timer size={18} className="text-primary animate-pulse" />
            <span className={cn(
              "text-lg font-mono font-bold tabular-nums",
              timeLeft < 300 ? "text-red-600" : "text-primary"
            )}>
              {formatTime(timeLeft)}
            </span>
          </div>

          <button 
            onClick={handleSubmit}
            className="btn-primary py-2 px-6 flex items-center space-x-2 shadow-lg shadow-primary/20"
          >
            <Send size={16} />
            <span>Nộp bài</span>
          </button>
        </div>
      </header>

      {/* Main Content Area: Split View */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left: Content (Questions/Passages) */}
        <div className="flex-1 overflow-auto bg-white border-r border-slate-200 p-8 custom-scrollbar">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-3 mb-8">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase">Phần {currentQuestion.part}</span>
              <div className="h-1 w-1 rounded-full bg-slate-300"></div>
              <span className="text-sm font-bold text-slate-500">Câu hỏi {currentQuestionIndex + 1}</span>
            </div>

            {/* Passage Display if available */}
            {currentQuestion.passage && (
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8 font-serif leading-relaxed text-slate-700 whitespace-pre-wrap shadow-inner">
                {currentQuestion.passage}
              </div>
            )}

            {/* Audio Display if available */}
            {currentQuestion.audioUrl && (
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-8 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <Volume2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Listening Audio</h4>
                    <p className="text-xs text-slate-500">Audio will play automatically</p>
                  </div>
                </div>
                <audio controls className="h-8 max-w-[200px]">
                  <source src={currentQuestion.audioUrl} type="audio/mpeg" />
                </audio>
              </div>
            )}

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 leading-relaxed">
                {currentQuestion.text}
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleAnswerSelect(currentQuestion.id, idx)}
                    className={cn(
                      "flex items-center p-5 rounded-xl border transition-all text-left group",
                      answers[currentQuestion.id] === idx
                        ? "bg-primary/5 border-primary shadow-sm"
                        : "bg-white border-slate-200 hover:border-primary/50"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm mr-4 transition-colors",
                      answers[currentQuestion.id] === idx
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
                    )}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className={cn(
                      "font-medium",
                      answers[currentQuestion.id] === idx ? "text-primary font-bold" : "text-slate-700"
                    )}>
                      {option}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => toggleFlag(currentQuestion.id)}
                  className={cn(
                    "p-3 rounded-xl border flex items-center space-x-2 text-sm font-bold transition-all",
                    flagged[currentQuestion.id] 
                      ? "bg-amber-50 border-amber-200 text-amber-600" 
                      : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                  )}
                >
                  <Flag size={18} fill={flagged[currentQuestion.id] ? "currentColor" : "none"} />
                  <span>Đánh dấu câu này</span>
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button 
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                  className="btn-secondary py-3 px-8 disabled:opacity-30 disabled:pointer-events-none"
                >
                  Câu trước
                </button>
                <button 
                  disabled={currentQuestionIndex === questions.length - 1}
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  className="btn-primary py-3 px-8 disabled:opacity-30 disabled:pointer-events-none"
                >
                  Câu tiếp theo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Answer Sheet Grid */}
        <div className="w-[360px] bg-slate-50 flex flex-col border-l border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
              Bản ghi câu trả lời
              <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                {Object.keys(answers).length}/200 HOÀN THÀNH
              </span>
            </h3>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-primary rounded"></div>
                <span className="text-[10px] font-bold text-slate-400">ĐÃ LÀM</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-white border border-slate-300 rounded"></div>
                <span className="text-[10px] font-bold text-slate-400">CHƯA LÀM</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-amber-400 rounded"></div>
                <span className="text-[10px] font-bold text-slate-400">ĐÃ ĐÁNH DẤU</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {/* Parts Navigation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[1, 2, 3, 4, 5, 6, 7].map(part => (
                <button 
                  key={part}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                    currentPart === part ? "bg-slate-900 text-white" : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-100"
                  )}
                  onClick={() => setCurrentPart(part)}
                >
                  Part {part}
                </button>
              ))}
            </div>

            {/* Questions Grid */}
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: 200 }).map((_, i) => (
                <button
                  key={i}
                  id={`q-btn-${i + 1}`}
                  onClick={() => setCurrentQuestionIndex(i % questions.length)}
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold font-mono transition-all border",
                    currentQuestionIndex === (i % questions.length) 
                      ? "ring-2 ring-primary bg-primary text-white border-primary"
                      : flagged[questions[i % questions.length]?.id]
                      ? "bg-amber-400 text-white border-amber-400 shadow-sm"
                      : answers[questions[i % questions.length]?.id] !== undefined
                      ? "bg-primary/10 text-primary border-primary/20"
                      : "bg-white text-slate-500 border-slate-200 hover:border-primary/50"
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white border-t border-slate-200">
            <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Dành cho phần luyện tập</p>
                <p className="text-sm font-bold text-slate-800">Hiển thị đáp án ngay</p>
              </div>
              <div className="w-10 h-6 bg-slate-300 rounded-full p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamInterface;
