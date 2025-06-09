import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const About: React.FC = () => {
  const [showAllHistory, setShowAllHistory] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">회사 소개</h1>
              <p className="text-xl mb-8">전문성과 체계적인 인력 관리로, 모델부터 진행 스태프까지 최적화된 인력을 제공하여 완벽한 행사 운영을 보장합니다.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-8">비전과 미션</h2>
                    <p className="text-gray-600 mb-6">
                      솔라지는 10년 이상의 전문성을 바탕으로 행사 기획과 인력 관리의 새로운 기준을 제시하는 기업입니다.
                      우리는 차별화된 원스톱 서비스를 통해 고객사의 성공적인 행사 운영을 지원합니다.
                    </p>
                    <p className="text-gray-600 mb-6">
                      체계적인 인력 관리 시스템과 검증된 전문 인력 풀을 보유하고 있으며, 고객 중심의 서비스로 신뢰할 수 있는 파트너가 되겠습니다.
                    </p>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
                      alt="Vision and Mission" 
                      className="rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-8 mt-12">핵심 가치</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg group">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                        alt="Professional" 
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4">프로페셔널</h3>
                    <p className="text-gray-600">전문성과 풍부한 경험을 바탕으로 어떠한 상황에서도 흔들림 없이 대처 가능한 완벽한 플랜을 제공합니다.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg group">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                        alt="Human Resource Management" 
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4">인력 관리</h3>
                    <p className="text-gray-600">체계적인 인력 관리 시스템과 전문성 있는 인재 풀을 바탕으로, 현장의 요구사항에 최적화된 인력을 배치하여 고객사의 높은 만족도와 완벽한 행사 운영을 보장합니다.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg group">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                        alt="Convenient" 
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4">편리한</h3>
                    <p className="text-gray-600">초기 기획 단계부터 인력 섭외, 장비 렌탈, 현장 운영까지 모든 과정을 전담 매니저가 통합 관리하며, 투입 인력 2배의 프로필을 사전에 제시하여 최적의 인력 선발이 가능합니다.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg group">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                        alt="Valuable" 
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4">가치있는</h3>
                    <p className="text-gray-600">체계적인 성과 평가 시스템을 통해 현장 업무의 품질을 지속적으로 모니터링하고, 인재 파견 후에도 정기적인 피드백과 교육을 제공합니다. 고객사의 요구사항에 신속하게 대응하며, 데이터 기반의 개선 활동을 통해 서비스 품질을 끊임없이 향상시킵니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">조직도</h2>
            <div className="max-w-4xl mx-auto relative">
              {/* 대표이사 및 선 */}
              <div className="flex flex-col items-center mb-12 relative">
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block min-w-[240px] relative z-10">
                  <h3 className="text-xl font-bold text-blue-600">대표이사</h3>
                </div>
                {/* 중앙 수직선 */}
                <div className="hidden md:block w-0.5 h-12 bg-gray-200 mt-0"></div>
                {/* 수평선 */}
                <div className="hidden md:block w-full h-0.5 bg-gray-200"></div>
              </div>

              {/* 두 개의 메인 부서 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* BTL 프로모션 */}
                <div className="relative">
                  <div className="w-0.5 h-12 bg-gray-200 absolute left-1/2 -top-12"></div>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6 h-[80px] flex items-center justify-center relative z-10">
                    <h4 className="text-xl font-bold text-blue-600">BTL 프로모션</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg h-[80px] flex items-center justify-center relative z-10">
                      <p className="text-gray-600 text-center font-medium">백화점 팝업 사업부</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg h-[80px] flex items-center justify-center relative z-10">
                      <p className="text-gray-600 text-center font-medium">전시,컨퍼런스 사업부</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg h-[80px] flex items-center justify-center relative z-10">
                      <p className="text-gray-600 text-center font-medium">이벤트 대행 사업부</p>
                    </div>
                  </div>
                </div>

                {/* 아웃소싱 & 매니지먼트 */}
                <div className="relative">
                  <div className="w-0.5 h-12 bg-gray-200 absolute left-1/2 -top-12"></div>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6 h-[80px] flex items-center justify-center relative z-10">
                    <h4 className="text-xl font-bold text-blue-600">아웃소싱 & 매니지먼트</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg h-[80px] flex items-center justify-center relative z-10" style={{ height: 72 }}>
                      <p className="text-gray-600 text-center font-medium">셀럽, 인플루언서<br/>마케팅 사업부</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg h-[80px] flex items-center justify-center relative z-10">
                      <p className="text-gray-600 text-center font-medium">모델 마케팅 사업부</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg h-[80px] flex items-center justify-center relative z-10">
                      <p className="text-gray-600 text-center font-medium">명품관 사업부</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-8">연혁</h2>
                    <p className="text-gray-600">
                      10년 이상의 경험과 성공적인 프로젝트를 통해 쌓아온 신뢰와 전문성을 바탕으로 성장해왔습니다.
                    </p>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
                      alt="History" 
                      className="rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {/* 2025 */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">2025</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>서비스 가드 운영 (샤넬, 까르띠에, 불가리, 버버리, 티파니, 피아제, 쇼메)</li>
                      <li>IBK 기업은행 수원월드컵 경기장 입크 페스티벌</li>
                      <li>IBK 기업은행 VVIP 초청 조수미 콘서트</li>
                      <li>게임 문화재단 리터러시</li>
                      <li>부산, 경남, 고흥, 서울, 경기 캠페인 및 홍보영상</li>
                      <li>I am Model 선발 대회</li>
                      <li>제네시스 찾아 가는 무빙 라운지 시승 장기 행사</li>
                      <li>부산 국제 형화제 제네시스 전시 행사 프로모션</li>
                      <li>COWEY 연도시상식</li>
                    </ul>
                  </div>

                  {/* 2024 */}
                  <div className="mb-6 relative">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">2024</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>외신기자 송년의 밤</li>
                      <li>라프레리 송년의 밤</li>
                      <li>로미스토리 홍대점 그랜드 오픈</li>
                      <li>신세계 백화점 동대구점 오픈기념 프로모션</li>
                      <li>ING 오렌지라이프 김원효, 심진화 토크쇼</li>
                      <li>닥터제로 바이럴 촬영</li>
                      <li>올리브영 닥터자르트</li>
                      <li>금산 인삼 축제 진행</li>
                      <li>제주 서귀포 감귤 박람회</li>
                    </ul>
                    {!showAllHistory && (
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
                    )}
                  </div>

                  {/* Hidden Years */}
                  <div className={`transition-all duration-500 ${showAllHistory ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                    {/* 2023 */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-blue-600 mb-4">2023</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>당차 가수 은가은 전속계약 촬영 및 공연</li>
                        <li>유한양행, 녹십자 바이오계열 로드프모션</li>
                        <li>뷰티셀렉션 팝업스토어</li>
                        <li>현대건설 방배5구역 조합총회</li>
                        <li>동부건설 선트레빌 여주 교동마을 조합총회</li>
                        <li>헬레나루빈스타인, 비디비치, 아리따움, 키엘, 비오템, COSMETIC 계열 프로모션</li>
                        <li>오리진스, 킬리안, 프리메라, 설화수, 해피바스, COSMETIC 계열 프로모션</li>
                        <li>BMW 시승식</li>
                        <li>부산 G-STAR 게임대상</li>
                      </ul>
                    </div>

                    {/* 2022 */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-blue-600 mb-4">2022</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>부산 K 광장맥주페스티벌 CASS 부스</li>
                        <li>랜드로버1 시승회 프로모션</li>
                        <li>델라라나 VIP 쇼퍼 스타일클레스</li>
                        <li>UMFVVIP 라운지 운영</li>
                        <li>2016 현대 제네시스 EQ900 프로모션</li>
                        <li>뷰티플러스 메거진 팝업 스토어</li>
                        <li>부산 영화의 전당 크리스마스 마을</li>
                        <li>마산, 진주, 거제 웨딩박람회 드레스 패션쇼</li>
                        <li>롯데, 현대, 신세계 백화점 패션쇼</li>
                      </ul>
                    </div>
                  </div>

                  {/* Show More Button */}
                  <div className="text-center mt-8 flex justify-center">
                    <button 
                      onClick={() => setShowAllHistory(!showAllHistory)}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <span>{showAllHistory ? '숨기기' : '더보기'}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${showAllHistory ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="CTA Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">지금 바로 견적 상담해 보세요!</h1>
              <p className="text-xl mb-8">차별화된 원스톱 서비스를 지금 경험해 보세요 <br/>최고의 서비스를 제공해드립니다</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                  견적문의
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                  더 알아보기
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 