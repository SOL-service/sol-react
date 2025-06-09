import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// CSS 스타일 추가
const styles = {
  transform: {
    transition: 'transform 0.2s ease-in-out',
  },
  modalOpen: {
    overflow: 'hidden',
  },
  modalClosed: {
    overflow: 'auto',
  },
  aspectRatio43: {
    aspectRatio: '4/3',
  },
  height80vh: {
    height: '80vh',
  },
  faqAnswer: {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    maxHeight: '0',
    opacity: '0',
    transform: 'translateY(-10px)',
    overflow: 'hidden',
  },
  faqAnswerOpen: {
    maxHeight: '500px',
    opacity: '1',
    transform: 'translateY(0)',
  }
};

const Home: React.FC = () => {
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
    userNote: '',
    privacyAgreement: false
  });
  const slidesVisible = 4;

  const clients = [
    { name: '신세계', logo: '/IMG/clientsLog/신세계.png' },
    { name: '롯데백화점', logo: '/IMG/clientsLog/롯데백화점.png' },
    { name: '기업은행', logo: '/IMG/clientsLog/기업은행.gif' },
    { name: '동부건설', logo: '/IMG/clientsLog/동부건설.png' },
    { name: '녹십자', logo: '/IMG/clientsLog/녹십자.png' },
    { name: '카스', logo: '/IMG/clientsLog/카스.png' },
    { name: '코웨이', logo: '/IMG/clientsLog/코웨이.png' },
    { name: 'bmw', logo: '/IMG/clientsLog/bmw.png' },
    { name: '렌드로버', logo: '/IMG/clientsLog/렌드로버.png' },
    { name: '올리브영', logo: '/IMG/clientsLog/올리브영.png' },
    { name: '티파니앤코', logo: '/IMG/clientsLog/티파니앤코.png' },
    { name: '샤넬', logo: '/IMG/clientsLog/샤넬.png' },
    { name: '까르띠에', logo: '/IMG/clientsLog/까르띠에.png' },
    { name: '불가리', logo: '/IMG/clientsLog/불가리.png' },
    { name: '버버리', logo: '/IMG/clientsLog/버버리.png' },
    { name: 'hwamiju_logo', logo: '/IMG/clientsLog/hwamiju_logo.gif' },
    { name: '설화수', logo: '/IMG/clientsLog/설화수.png' },
    { name: '키엘', logo: '/IMG/clientsLog/키엘.webp' },
    { name: '프리메라', logo: '/IMG/clientsLog/프리메라.webp' },
    { name: '비오템', logo: '/IMG/clientsLog/비오템.png' },
    { name: '비디비치', logo: '/IMG/clientsLog/비디비치.png' },
    { name: '닥터자르트', logo: '/IMG/clientsLog/닥터자르트.jpg' },
    { name: '킬리안', logo: '/IMG/clientsLog/킬리안.png' },
    { name: 'age20', logo: '/IMG/clientsLog/age20.jpg' },
    { name: '오리진스', logo: '/IMG/clientsLog/오리진스.png' },
    { name: '델라라나', logo: '/IMG/clientsLog/델라라나.png' },
    { name: '헬레나루빈스타인', logo: '/IMG/clientsLog/헬레나루빈스타인.webp' },
    { name: '쇼메', logo: '/IMG/clientsLog/쇼메.webp' },
    { name: '로미스토리', logo: '/IMG/clientsLog/로미스토리.png' },
    { name: '게임문화재단', logo: '/IMG/clientsLog/게임문화재단.png' },
    { name: '경상남도관광공사', logo: '/IMG/clientsLog/경상남도관광공사.png' },
    { name: '대동대학교', logo: '/IMG/clientsLog/대동대학교.png' },
    { name: '동의대학교', logo: '/IMG/clientsLog/동의대학교.png' },
    { name: '부산관광공사', logo: '/IMG/clientsLog/부산관광공사.png' },
    { name: '부산영화의전당', logo: '/IMG/clientsLog/부산영화의전당.png' },
    { name: '뷰티셀렉션', logo: '/IMG/clientsLog/뷰티셀렉션.webp' },
    { name: '뷰티플러스메거진', logo: '/IMG/clientsLog/뷰티플러스메거진.jpg' },
    { name: '유한양행', logo: '/IMG/clientsLog/유한양행.png' },
    { name: '전남고흥관광공사', logo: '/IMG/clientsLog/전남고흥관광공사.jpg' },
    { name: '제네시스', logo: '/IMG/clientsLog/제네시스.png' },
    { name: '오렌지라이프', logo: '/IMG/clientsLog/오렌지라이프.jpg' },
    { name: '아모레퍼시픽', logo: '/IMG/clientsLog/아모레퍼시픽.png' },
  ];

  const nextSlide = () => {
    if (currentSlide < Math.ceil(clients.length / slidesVisible) - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    } else {
      setCurrentSlide(Math.ceil(clients.length / slidesVisible) - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // API 호출 로직 구현
      alert('문의가 성공적으로 전송되었습니다.');
      setFormData({
        userName: '',
        userPhone: '',
        userEmail: '',
        userNote: '',
        privacyAgreement: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '80vh' }}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">" For Your Success "<br/>with Agency & Marketing</h1>
              <p className="text-xl mb-8">전국 모든 행사 기획부터 섭외까지 한방에 해결!<br/>분야별 전문 모델부터 스탭까지</p>
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

        {/* Management Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">연락 한 번으로 기획부터 제작, 물자 렌탈, 운영 인력 배치까지</h2>
                <p className="text-gray-600 mb-6">
                  '고객의 니즈를 빠르게 파악하는 매년 꾸준히 우상향하는 기업'
                </p>
                <p className="text-gray-600">
                  10년 이상의 전문성을 바탕으로<br/>
                  '원스톱' 프로모션 서비스의 편리함과 합리적인 견적으로<br/>
                  어떠한 상황에서도 우수한 결과를 도출할 수 있는 유연성을<br/>
                  제공하여 클라이언트의 성공을 이끌어 드립니다.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                  alt="Business Meeting" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">당신의 성공을 위한 솔루션</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80" 
                    alt="기획 및 연출" 
                    className="w-full object-cover transform group-hover:scale-110 transition duration-500"
                    style={styles.aspectRatio43}
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">기획 및 연출</h2>
                  <p className="text-gray-600 mb-4">전문적인 기획력과 차별화된 연출로 성공적인 행사 진행</p>
                  <div className="flex justify-center flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#행사용품 렌탈</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#시스템</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#인력</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#디자인</span>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1560523159-6b681a1e1852?auto=format&fit=crop&q=80" 
                    alt="BTL 프로모션" 
                    className="w-full object-cover transform group-hover:scale-110 transition duration-500"
                    style={styles.aspectRatio43}
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">BTL 프로모션</h2>
                  <p className="text-gray-600 mb-4">현장 프로모션부터 대규모 행사까지 차별화된 마케팅 솔루션 제공</p>
                  <div className="flex justify-center flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#팝업 & 백화점 행사</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#페스티벌</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#전시 & 세미나</span>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80" 
                    alt="아웃소싱" 
                    className="w-full object-cover transform group-hover:scale-110 transition duration-500"
                    style={styles.aspectRatio43}
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">아웃소싱</h2>
                  <p className="text-gray-600 mb-4">전문성과 신뢰성을 바탕으로 한 맞춤형 인력 아웃소싱 서비스 제공</p>
                  <div className="flex justify-center flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#명품관 서비스가드</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#기업 업무 보조인력</span>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" 
                    alt="전문 모델" 
                    className="w-full object-cover transform group-hover:scale-110 transition duration-500"
                    style={styles.aspectRatio43}
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">전문 모델</h2>
                  <p className="text-gray-600 mb-4">패션쇼, 광고, 방송 등 다양한 분야의 전문 모델 매칭 서비스 제공</p>
                  <div className="flex justify-center flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#패션쇼</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#광고참여</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#영화 & 드라마</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#잡지촬영</span>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80" 
                    alt="인플루언서 마케팅" 
                    className="w-full object-cover transform group-hover:scale-110 transition duration-500"
                    style={styles.aspectRatio43}
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">인플루언서 마케팅</h2>
                  <p className="text-gray-600 mb-4">소셜 미디어 영향력자와 함께하는 효과적인 브랜드 마케팅 솔루션 제공</p>
                  <div className="flex justify-center flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#SNS 마케팅</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#셀럽 & 인플루언서 초청 행사</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
              alt="Management Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">성공적인 마케팅을 위한 최고의 파트너</h2>
            <p className="text-center text-gray-200 mb-12">
              폭넓고 세분화된 DB관리로 견적 그 이상의 현장니즈에 걸맞는 인원배치로 광고주의 만족과 깔끔한 현장분위기를 추구합니다.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Professional Service" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-4">전문적인 서비스</h3>
                <p className="text-gray-200">각 분야 전문가들의 체계적인 관리로 최상의 서비스를 제공합니다.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Customized Solutions" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-4">맞춤형 솔루션</h3>
                <p className="text-gray-200">클라이언트의 니즈에 맞는 최적화된 솔루션을 제공합니다.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                  alt="Reliable Partnership" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-4">신뢰할 수 있는 파트너십</h3>
                <p className="text-gray-200">지속적인 협력과 성장을 통해 신뢰를 쌓아갑니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full mb-4">FAQ</div>
              <h2 className="text-3xl font-bold">자주 묻는 질문</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {/* FAQ Items */}
              {[
                {
                  question: "대행사 견적은 어떻게 받을 수 있나요?",
                  answer: "견적 문의는 전화, 이메일, 홈페이지 문의 등 다양한 채널로 가능합니다. 행사 규모, 일정, 필요 인력 등 상세 내용을 알려주시면 24시간 이내 상세 견적을 제공해드립니다."
                },
                {
                  question: "모델 섭외는 어떤 방식으로 진행되나요?",
                  answer: "패션쇼, 방송, 프로모션 등 각 분야별 전문 모델 풀을 보유하고 있습니다. 클라이언트의 요구사항에 맞는 포트폴리오를 제공하며, 최적의 모델을 추천해드립니다."
                },
                {
                  question: "행사 당일 진행은 어떻게 되나요?",
                  answer: "전담 매니저가 행사 시작부터 종료까지 전 과정을 관리합니다. 현장 스태프 교육, 타임테이블 관리, 긴급 상황 대응 등 모든 상황에 대처할 수 있는 시스템을 갖추고 있습니다."
                },
                {
                  question: "결과 보고서는 어떻게 받을 수 있나요?",
                  answer: "행사 종료 후 48시간 이내에 상세 결과 보고서를 제공해드립니다. 현장 사진, 참여자 피드백, 개선점 등이 포함된 전문적인 보고서로 향후 행사 기획에 도움을 드립니다."
                },
                {
                  question: "긴급 상황 발생 시 대처는 어떻게 되나요?",
                  answer: "24시간 긴급 연락망을 운영하고 있으며, 백업 인력 및 장비를 항시 대기시켜 어떠한 상황에서도 행사가 차질 없이 진행될 수 있도록 지원합니다."
                },
                {
                  question: "당일 긴급 인력 섭외도 가능한가요?",
                  answer: "네, 가능합니다. 당사는 풍부한 인력풀을 보유하고 있어 긴급 상황에서도 신속한 인력 섭외가 가능합니다. 행사 규모와 성격에 맞는 검증된 인력을 즉시 배치해드립니다."
                },
                {
                  question: "행사 기획부터 섭외까지 모든 과정이 원스톱으로 진행되나요?",
                  answer: "네, 맞습니다. 초기 기획 단계부터 인력 섭외, 장비 렌탈, 현장 운영까지 모든 과정을 전담 매니저가 통합 관리합니다. 클라이언트는 한 번의 미팅으로 모든 준비 과정을 진행하실 수 있어 시간과 비용을 절약하실 수 있습니다."
                }
              ].map((faq, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <svg 
                      className={`w-6 h-6 transform transition-transform duration-150 ${openFaqs[index] ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`px-6 bg-gray-50 overflow-hidden transition-all duration-150 ease-out ${
                      openFaqs[index] ? 'h-auto opacity-100' : 'h-0 opacity-0'
                    }`}
                  >
                    <div className="py-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Development Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              alt="Management Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">미팅, 기획, 실행, 업무보고까지 알아서 신뢰로써 발전해나가는 기업</h2>
            <p className="text-center text-gray-200 mb-12">
              분야별 전문 모델부터 스탭까지, 전문적인 매니지먼트
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black bg-opacity-60 p-8 rounded-lg backdrop-filter backdrop-blur-sm hover:bg-black hover:bg-opacity-70 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
                  alt="Planning" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-white">어떤 상황에든 대처가능한 플랜이 있나요?</h3>
                <p className="text-gray-300">
                  '걱정하지 마세요!'<br/>
                  전문 모델부터 스탭까지 다양한 인력풀 보유로<br/>
                  긴급 상황에도 즉시 대응이 가능합니다.
                </p>
              </div>

              <div className="bg-black bg-opacity-60 p-8 rounded-lg backdrop-filter backdrop-blur-sm hover:bg-black hover:bg-opacity-70 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                  alt="Professional Team" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-white">각 분야별 전문 인재, 선택지 제공 되나요?</h3>
                <p className="text-gray-300">
                  '네, 물론입니다!'<br/>
                  패션쇼, 프로모션, 방송 등 각 분야별<br/>
                  전문 모델과 인재풀을 보유하고 있습니다.
                </p>
              </div>

              <div className="bg-black bg-opacity-60 p-8 rounded-lg backdrop-filter backdrop-blur-sm hover:bg-black hover:bg-opacity-70 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
                  alt="Management" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-white">지속적인 관리가 가능한가요?</h3>
                <p className="text-gray-300">
                  '네, 걱정마세요!'<br/>
                  전담 매니저가 배정되어 지속적인 관리와<br/>
                  피드백을 제공해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">함께하는 파트너사</h2>
            
            <div className="relative max-w-6xl mx-auto">
              {/* Previous Button */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 -mt-3 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                onClick={prevSlide}
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Slider Container */}
              <div className="overflow-hidden mx-12">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * (100 / slidesVisible)}%)` }}
                >
                  {clients.map((client, index) => (
                    <div 
                      key={index} 
                      style={{ flex: `0 0 ${100 / slidesVisible}%` }} 
                      className="px-4"
                    >
                      <div className="bg-gray-50 rounded-lg p-6 h-32 flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 -mt-3 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                onClick={nextSlide}
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.ceil(clients.length / slidesVisible) }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Contact Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">견적 문의</h2>
            
            {/* Contact Info & Form */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Company Info */}
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white border-opacity-20">
                  <h3 className="text-2xl font-bold mb-8 text-white">Contact Us</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      <span className="text-lg">010-9313-3108</span>
                    </div>
                    <div className="flex items-center space-x-4 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      <span className="text-lg">070-8121-2997</span>
                    </div>
                    <div className="flex items-center space-x-4 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span className="text-lg">solag1@naver.com</span>
                    </div>
                    <div className="flex items-center space-x-4 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span className="text-lg">서울특별시 강남구 테헤란로 20길 18, 2층</span>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white border-opacity-20">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-white font-semibold mb-2">성함</label>
                      <input 
                        value={formData.userName}
                        onChange={(e) => setFormData(prev => ({ ...prev, userName: e.target.value }))}
                        type="text" 
                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70" 
                        placeholder="이름을 입력해주세요" 
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">연락처</label>
                      <input 
                        value={formData.userPhone}
                        onChange={(e) => setFormData(prev => ({ ...prev, userPhone: e.target.value }))}
                        type="tel" 
                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70" 
                        placeholder="연락처를 입력해주세요" 
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">이메일</label>
                      <input 
                        value={formData.userEmail}
                        onChange={(e) => setFormData(prev => ({ ...prev, userEmail: e.target.value }))}
                        type="email" 
                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70" 
                        placeholder="이메일을 입력해주세요" 
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">문의내용</label>
                      <textarea 
                        value={formData.userNote}
                        onChange={(e) => setFormData(prev => ({ ...prev, userNote: e.target.value }))}
                        className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70 h-32" 
                        placeholder="문의 내용을 입력해주세요" 
                        required 
                      />
                    </div>

                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        checked={formData.privacyAgreement}
                        onChange={(e) => setFormData(prev => ({ ...prev, privacyAgreement: e.target.checked }))}
                        className="mt-1 mr-2" 
                        required
                      />
                      <label className="text-sm text-white/80">
                        개인정보 수집 및 이용에 동의합니다. 
                        <button 
                          type="button" 
                          className="text-white underline hover:text-white/80"
                          onClick={() => setShowPrivacyModal(true)}
                        >
                          자세히 보기
                        </button>
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-white text-blue-600 py-3 rounded-md font-semibold hover:bg-white/90 transition duration-300"
                    >
                      문의하기
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Modal */}
        {showPrivacyModal && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            style={styles.transform}
          >
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">개인정보 수집 및 이용 동의</h3>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPrivacyModal(false)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">1. 수집하는 개인정보 항목</h4>
                  <p className="text-gray-600">
                    - 필수항목: 성명, 연락처, 이메일<br/>
                    - 선택항목: 없음
                  </p>

                  <h4 className="font-semibold text-lg">2. 개인정보의 수집 및 이용목적</h4>
                  <p className="text-gray-600">
                    - 견적 문의에 대한 답변<br/>
                    - 서비스 제공을 위한 연락 및 안내<br/>
                    - 고객 맞춤형 서비스 제공
                  </p>

                  <h4 className="font-semibold text-lg">3. 개인정보의 보유 및 이용기간</h4>
                  <p className="text-gray-600">
                    - 문의 접수 후 3년간 보관<br/>
                    - 이용자의 삭제 요청 시 즉시 파기
                  </p>

                  <h4 className="font-semibold text-lg">4. 동의 거부권 및 거부 시 불이익</h4>
                  <p className="text-gray-600">
                    - 개인정보 수집 및 이용에 대한 동의를 거부할 수 있으나, 거부 시 견적 문의 등 서비스 이용이 제한될 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="p-6 border-t bg-gray-50">
                <button 
                  className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                  onClick={() => setShowPrivacyModal(false)}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home; 