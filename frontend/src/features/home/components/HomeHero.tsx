import React, { useState } from 'react';
import { Search, Image as ImageIcon, Video, FileText } from 'lucide-react';

export const HomeHero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery); // 모의 검색
  };

  return (
    <div className="relative bg-medical-deep-blue overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-deep-blue to-blue-800 opacity-90"></div>
      
      {/* 백그라운드 장식용 패턴 (의료 느낌) */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block mb-2">당신의 에이전틱 AI 시대를 위한</span>
          <span className="block text-medical-light-blue">의료 전문 스톡 플랫폼 1위</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          고화질의 수술영상, 해부학 일러스트, 병원 템플릿, 그리고 모션·동영상으로 완벽한 프레젠테이션과 홈페이지를 완성해보세요. (클립아트코리아 벤치마킹)
        </p>

        {/* 통합 검색창 */}
        <div className="mt-10 max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex bg-white rounded-full shadow-lg p-2 items-center">
            <div className="hidden sm:block pl-4 pr-3 text-app-subtext border-r border-gray-200">
              <select className="bg-transparent border-none focus:ring-0 outline-none cursor-pointer">
                <option>전체</option>
                <option>이미지</option>
                <option>동영상</option>
                <option>디자인소스</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="상세 검색이 필요하다면 AND / OR / NOT 을 이용해보세요"
              className="flex-grow px-4 py-3 bg-transparent border-none focus:ring-0 outline-none text-app-text w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-medical-deep-blue text-white rounded-full p-3 hover:bg-blue-800 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* 퀵 카테고리 */}
        <div className="mt-8 flex justify-center space-x-6 sm:space-x-12">
          <button className="flex flex-col items-center group">
            <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition backdrop-blur-sm">
              <ImageIcon className="text-white w-8 h-8" />
            </div>
            <span className="mt-2 text-sm text-blue-50">이미지</span>
          </button>
          <button className="flex flex-col items-center group">
            <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition backdrop-blur-sm">
              <Video className="text-white w-8 h-8" />
            </div>
            <span className="mt-2 text-sm text-blue-50">동영상</span>
          </button>
          <button className="flex flex-col items-center group">
            <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-white/20 transition backdrop-blur-sm">
              <FileText className="text-white w-8 h-8" />
            </div>
            <span className="mt-2 text-sm text-blue-50">템플릿/PPT</span>
          </button>
        </div>
      </div>
    </div>
  );
};
