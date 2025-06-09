import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  category: string;
}

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: 'all', name: '전체' },
  { id: 'event', name: '이벤트' },
  { id: 'promotion', name: '프로모션' },
  { id: 'exhibition', name: '전시회' },
  { id: 'conference', name: '컨퍼런스' },
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: '글로벌 테크 컨퍼런스',
    description: '세계 각국의 IT 전문가들이 참여한 대규모 컨퍼런스 운영',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    ],
    tags: ['컨퍼런스', '글로벌', 'IT'],
    category: 'conference',
  },
  // Add more portfolio items here
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleItemCount, setVisibleItemCount] = useState<number>(12);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isExpandedView, setIsExpandedView] = useState<boolean>(false);

  const filteredPortfolio = portfolioItems
    .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
    .slice(0, visibleItemCount);

  const hasMoreItems = visibleItemCount < portfolioItems.length;

  const loadMore = () => {
    setVisibleItemCount(prev => prev + 12);
  };

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsExpandedView(false);
  };

  const toggleExpandedView = () => {
    setIsExpandedView(!isExpandedView);
  };

  const changeImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const prevImage = () => {
    if (selectedItem) {
      setSelectedImageIndex(prev => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  const nextImage = () => {
    if (selectedItem) {
      setSelectedImageIndex(prev => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
              alt="Portfolio Hero Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">포트폴리오</h1>
              <p className="text-xl mb-8">전문성과 신뢰를 바탕으로 완성한 다양한 프로젝트와 성공 사례를 소개합니다</p>
            </div>
          </div>
        </section>

        {/* Portfolio Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button 
                  key={category.id}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setVisibleItemCount(12);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map(item => (
                <div 
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  {/* Image */}
                  <div className="aspect-w-16">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMoreItems && (
              <div className="text-center mt-12">
                <button 
                  onClick={loadMore}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  더보기
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Portfolio Modal */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="p-6 border-b flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <div className="relative group cursor-pointer" onClick={toggleExpandedView}>
                  <img 
                    src={selectedItem.images[selectedImageIndex]} 
                    alt={selectedItem.title}
                    className="w-full rounded-lg mb-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-medium">클릭하여 확대</span>
                  </div>
                </div>

                {/* Expanded Image Viewer */}
                {isExpandedView && (
                  <div 
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={(e) => {
                      if (e.target === e.currentTarget) toggleExpandedView();
                    }}
                  >
                    <div className="relative max-w-6xl w-full">
                      <button 
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
                        onClick={prevImage}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <img 
                        src={selectedItem.images[selectedImageIndex]} 
                        alt={selectedItem.title}
                        className="w-full max-h-[80vh] object-contain rounded-lg"
                      />
                      
                      <button 
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
                        onClick={nextImage}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <button 
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
                        onClick={toggleExpandedView}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Image Gallery */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {selectedItem.images.map((img, index) => (
                    <div 
                      key={index}
                      className="relative cursor-pointer group"
                      onClick={() => changeImage(index)}
                    >
                      <img 
                        src={img} 
                        alt={`${selectedItem.title} - 이미지 ${index + 1}`}
                        className={`w-full h-20 object-cover rounded-lg transition-opacity duration-300 ${
                          selectedImageIndex !== index ? 'opacity-50' : ''
                        }`}
                      />
                      <div 
                        className={`absolute inset-0 bg-black/20 rounded-lg transition-opacity duration-300 ${
                          selectedImageIndex === index ? 'opacity-0' : ''
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">{selectedItem.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Portfolio CTA Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20 text-center">
            <h2 className="text-3xl font-bold mb-8">지금 바로 SOL과 함께 성공적인 프로젝트를 시작하세요</h2>
            <p className="text-xl text-gray-600 mb-8">수많은 성공 사례로 검증된 솔루션과 노하우로, 귀사의 비전을 현실로 만들어드리겠습니다</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio; 