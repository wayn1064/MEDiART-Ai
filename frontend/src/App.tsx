import React from 'react';
import { Home } from './features/home/Home';
import { Routes, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-app-bg text-app-text flex flex-col font-sans">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center pr-8 border-r border-gray-100">
              <Link to="/" className="font-extrabold text-2xl tracking-tighter text-medical-deep-blue flex items-center gap-1">
                <span className="bg-medical-deep-blue text-white w-8 h-8 rounded-lg flex items-center justify-center text-lg">+</span>
                MEDiART-Ai
              </Link>
            </div>
            <nav className="hidden md:flex flex-1 ml-8 space-x-6">
              <Link to="/" className="text-medical-deep-blue font-bold px-3 py-2 text-sm border-b-2 border-medical-deep-blue">홈</Link>
              <a href="#" className="text-app-subtext hover:text-medical-deep-blue font-medium px-3 py-2 text-sm transition-colors">이미지</a>
              <a href="#" className="text-app-subtext hover:text-medical-deep-blue font-medium px-3 py-2 text-sm transition-colors">동영상</a>
              <a href="#" className="text-app-subtext hover:text-medical-deep-blue font-medium px-3 py-2 text-sm transition-colors">템플릿/PPT</a>
              <a href="#" className="text-app-subtext hover:text-medical-deep-blue font-medium px-3 py-2 text-sm transition-colors text-amber-600">스쿨라이선스</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium text-app-subtext hover:text-app-text">로그인</button>
              <button className="text-sm font-bold text-white bg-medical-deep-blue px-4 py-2 rounded-full hover:bg-blue-800 transition-colors">회원가입</button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2026 MEDiART-Ai. 클립아트코리아 벤치마킹 POC (WAYN-Ai Ecosystem)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
