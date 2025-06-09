import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Business: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">한 번의 연락, 모든 과정 해결</h1>
              <p className="text-xl mb-8">스타트업부터 글로벌 대기업까지,<br/>수많은 기업들이 선택한 신뢰할 수 있는 파트너로서 지속적인 성장을 함께하고 있습니다.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">체계적인 시스템</h2>
                <p className="text-gray-600 mb-8">체계적인 중간보고 시스템과 현장 관리로 마케팅 목표를 달성하며, 데이터 기반의 업무 평가를 통해 최적화된 인력으로 최상의 서비스를 제공합니다.</p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="System Overview" 
                  className="rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="Reasonable Price" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">합리적 단가</h3>
                <p className="text-gray-600 mb-4">합리적인 가격으로 최적의 서비스를 제공합니다</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    합리적인 단가
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    최고의 구성
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                    alt="Expertise" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">숙련된 노하우</h3>
                <p className="text-gray-600 mb-4">숙련된 노하우로 최고의 퀄리티를 제공합니다.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    실시간 상황을 반영한 유연한 현장관리 및 인원관리
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    최적화된 인력 투입 (외모, 서비스 마인드, 숙련된 업무 능력)
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    신속한 현장파악 후 빠른 대처
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                    alt="Human Resource Management" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">인력 관리</h3>
                <p className="text-gray-600 mb-4">인력 관리를 통해 현장에 최적화된 인력을 투입합니다.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    행사별 전문 담당자 배치 (직접 근무자들 컨디션, 근태 관리)
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    기상, 출근 보고로 인한 현장 관리 효율화
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    현장 분위기에 맞는 그루밍 및 행사 진행
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
                    alt="Satisfaction" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">만족도 높은 결과</h3>
                <p className="text-gray-600 mb-4">만족도 높은 결과를 위한 체계적인 운영 시스템</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    마케팅 목표 달성 이행 추구
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    수치화된 업무보고를 통한 객관적 결과 검토
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✓</span>
                    만족도 증대를 통한 높은 재의뢰율 추구
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
              alt="FAQ Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center mb-16">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4">PROMISE</span>
              <h2 className="text-4xl font-bold text-white">언제나 만족스러운 결과물을 약속드립니다.</h2>
            </div>

            <div className="max-w-4xl mx-auto grid gap-8">
              {/* FAQ Item 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">갑작스런 인원 증원 시?</h3>
                      <p className="text-white/80">SOL 은 하루전, 당일 긴급 인원 섭외 요청 시 즉각적으로 인원 섭외가 가능합니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">모든 과정은 2시간내로 마무리 가능!</h3>
                      <p className="text-white/80">행사에 적합한 SOL DB 인원 탐색. 분야별 필요한 업무 메뉴얼 상시 교육. 어떠한 환경에서도 준비된 업무능력으로 빠르게 현장 투입!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold mb-8">운영 프로세스</h2>
                  <p className="text-gray-600">
                    체계적인 프로세스와 전문적인 팀으로 구성되어 있어, 모든 프로젝트에 최적화된 인력을 배치할 수 있습니다.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
                    alt="Process" 
                    className="rounded-lg shadow-xl transform hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Business; 