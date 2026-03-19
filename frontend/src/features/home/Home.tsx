import React from 'react';
import { HomeHero } from './components/HomeHero';
import { ContentGrid } from '../content/components/ContentGrid';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <HomeHero />
      <div className="bg-white">
        <ContentGrid 
          title="핫이슈 메디컬 키워드" 
          subtitle="스스로 사고하고 실행하는 에이전틱 AI 시대의 개막, 병원 콘텐츠의 혁신"
        />
      </div>
      <div className="bg-app-bg border-t border-gray-100">
        <ContentGrid 
          title="취향대로 골라보는 의료 템플릿" 
          subtitle="카테고리별 추천 작품들을 한 눈에 살펴보세요!"
        />
      </div>
    </div>
  );
};
