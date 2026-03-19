import React from 'react';
import { checkAccess } from '../../../shared/lib/auth';
import { Lock } from 'lucide-react';
import { mockPubSub } from '../../../shared/lib/pubsub';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
  premium: boolean;
}

const dummyContents: ContentItem[] = [
  { id: '1', title: '임플란트 수술 3D 모션', type: 'VIDEO', premium: true, imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80' },
  { id: '2', title: '봄맞이 치과 배너 디자인', type: 'DESIGN', premium: false, imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80' },
  { id: '3', title: '뇌 구조 일러스트레이션', type: 'IMAGE', premium: true, imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80' },
  { id: '4', title: '병원 로비 배경 사진', type: 'IMAGE', premium: false, imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80' },
];

interface ContentGridProps {
  title: string;
  subtitle?: string;
}

export const ContentGrid: React.FC<ContentGridProps> = ({ title, subtitle }) => {
  const handleContentClick = (item: ContentItem) => {
    if (item.premium && !checkAccess('premium_content')) {
      mockPubSub.publish('SHOW_TOAST', { message: '접근 권한이 없습니다. 상위 멤버십이 필요합니다.', type: 'error' });
      alert('🔒 접근 권한이 없습니다! (Custom Claim 확인됨)');
      return;
    }
    mockPubSub.publish('NAVIGATE', `/content/${item.id}`);
    console.log('Navigating to content detail:', item.id);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-app-text">{title}</h2>
          {subtitle && <p className="text-app-subtext mt-1">{subtitle}</p>}
        </div>
        <button className="text-sm font-medium text-medical-deep-blue hover:underline">더보기 〉</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyContents.map((item) => {
          const hasAccess = !(item.premium && !checkAccess('premium_content'));
          
          return (
            <div 
              key={item.id} 
              className={`group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 bg-white
                ${!hasAccess ? 'opacity-80' : ''}`}
              onClick={() => handleContentClick(item)}
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${!hasAccess ? 'grayscale' : ''}`}
                />
                {!hasAccess && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                    <Lock className="text-white w-10 h-10 opacity-80 mb-2" />
                  </div>
                )}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-white/90 text-medical-deep-blue rounded backdrop-blur-sm">
                    {item.type}
                  </span>
                  {item.premium && (
                    <span className="px-2 py-1 text-xs font-semibold bg-amber-500/90 text-white rounded backdrop-blur-sm shadow-sm border border-amber-400">
                      PREMIUM
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-app-text truncate text-sm">{item.title}</h3>
                <div className="mt-2 flex items-center justify-between text-xs text-app-subtext">
                  <span>MEDiART-Ai 오리지널</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
