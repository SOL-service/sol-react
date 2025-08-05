import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { fetchAllPortfolioDataGrouped } from '../services/portfolioApi';
import type { FolderGroupedData } from '../services/portfolioApi';

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
  { id: 'planning', name: '기획 및 연출' },
  { id: 'btl', name: 'BTL 프로모션 기획' },
  { id: 'outsourcing', name: '아웃소싱' },
  { id: 'model', name: '전문모델' },
  { id: 'influencer', name: '인플루언서 마케팅' }
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'planning',
    title: '2024 신년 컨퍼런스',
    description: '대규모 기업 행사 기획 및 연출',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['행사기획', '무대연출', '현장관리'],
  },
  {
    id: 2,
    category: 'btl',
    title: '럭셔리 브랜드 팝업스토어',
    description: '프리미엄 브랜드 BTL 마케팅',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['팝업스토어', '브랜드마케팅', '현장프로모션'],
  },
  {
    id: 3,
    category: 'outsourcing',
    title: '백화점 VIP 라운지',
    description: '프리미엄 서비스 전문인력 아웃소싱',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['VIP서비스', '전문인력', '서비스교육'],
  },
  {
    id: 4,
    category: 'model',
    title: '패션위크 런웨이 쇼',
    description: '전문 모델 캐스팅 및 무대 연출',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['패션쇼', '전문모델', '런웨이'],
  },
  {
    id: 5,
    category: 'influencer',
    title: '신제품 론칭 캠페인',
    description: '인플루언서 마케팅 전략 기획',
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['인플루언서', '디지털마케팅', '브랜드홍보'],
  },
  {
    id: 6,
    category: 'planning',
    title: '기업 창립 기념식',
    description: '대규모 기념행사 기획 및 운영',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['행사기획', '무대연출', '케이터링'],
  },
  {
    id: 7,
    category: 'btl',
    title: '자동차 신모델 발표회',
    description: '신차 발표회 BTL 프로모션',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['신차발표', '프로모션', '이벤트'],
  },
  {
    id: 8,
    category: 'outsourcing',
    title: '국제 컨벤션 행사',
    description: '글로벌 컨벤션 전문인력 운영',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['컨벤션', '통역', '운영인력'],
  },
  {
    id: 9,
    category: 'model',
    title: '화장품 브랜드 촬영',
    description: '뷰티 화보 전문 모델 섭외',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['뷰티모델', '화보촬영', '광고'],
  },
  {
    id: 10,
    category: 'influencer',
    title: '식품 브랜드 콜라보',
    description: '푸드 인플루언서 마케팅',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['푸드마케팅', '콜라보레이션', 'SNS'],
  },
  {
    id: 11,
    category: 'planning',
    title: '대학 축제 기획',
    description: '대규모 축제 기획 및 아티스트 섭외',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['축제기획', '공연기획', '아티스트섭외'],
  },
  {
    id: 12,
    category: 'btl',
    title: '쇼핑몰 시즌 프로모션',
    description: '대형 쇼핑몰 시즌 마케팅',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['시즌마케팅', '쇼핑몰', '프로모션'],
  },
  {
    id: 13,
    category: 'outsourcing',
    title: '호텔 뷔페 서비스',
    description: '특급호텔 서비스 인력 아웃소싱',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['호텔서비스', '뷔페', '전문인력'],
  },
  {
    id: 14,
    category: 'model',
    title: '스포츠웨어 화보',
    description: '스포츠 모델 캐스팅',
    image: 'https://images.unsplash.com/photo-1526504275103-575a4f5d0d1c?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1526504275103-575a4f5d0d1c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['스포츠모델', '화보', '광고촬영'],
  },
  {
    id: 15,
    category: 'influencer',
    title: '여행 콘텐츠 제작',
    description: '여행 인플루언서 마케팅',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['여행', '콘텐츠제작', '인플루언서'],
  },
  {
    id: 16,
    category: 'planning',
    title: '제품 론칭 쇼케이스',
    description: '신제품 발표회 기획 및 연출',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['제품론칭', '쇼케이스', '행사기획'],
  },
  {
    id: 17,
    category: 'btl',
    title: '음료 브랜드 로드쇼',
    description: '전국 순회 프로모션 진행',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['로드쇼', '시음행사', '프로모션'],
  },
  {
    id: 18,
    category: 'outsourcing',
    title: '전시회 부스 운영',
    description: '전시회 전문 인력 파견',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['전시회', '부스운영', '전문인력'],
  },
  {
    id: 19,
    category: 'model',
    title: '웨딩드레스 컬렉션',
    description: '웨딩 전문 모델 캐스팅',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['웨딩모델', '패션쇼', '촬영'],
  },
  {
    id: 20,
    category: 'influencer',
    title: '뷰티 제품 리뷰',
    description: '뷰티 인플루언서 협업',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['뷰티', '제품리뷰', '인플루언서'],
  },
  {
    id: 21,
    category: 'planning',
    title: '음악 페스티벌',
    description: '야외 페스티벌 기획 및 운영',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['페스티벌', '공연기획', '행사운영'],
  },
  {
    id: 22,
    category: 'btl',
    title: '게임 출시 이벤트',
    description: '게임 론칭 프로모션',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['게임마케팅', '론칭이벤트', '프로모션'],
  },
  {
    id: 23,
    category: 'outsourcing',
    title: '골프대회 운영',
    description: '골프대회 전문 인력 관리',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['골프대회', '이벤트', '전문인력'],
  },
  {
    id: 24,
    category: 'model',
    title: '주얼리 화보촬영',
    description: '주얼리 브랜드 전문 모델',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['주얼리', '화보모델', '광고촬영'],
  },
  {
    id: 25,
    category: 'influencer',
    title: '가전제품 리뷰',
    description: '테크 인플루언서 마케팅',
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['가전제품', '테크리뷰', '인플루언서'],
  },
  {
    id: 26,
    category: 'planning',
    title: '기업 송년회',
    description: '대규모 송년행사 기획',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['송년회', '행사기획', '공연연출'],
  },
  {
    id: 27,
    category: 'btl',
    title: '향수 브랜드 팝업',
    description: '럭셔리 향수 프로모션',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['향수', '팝업스토어', '럭셔리'],
  },
  {
    id: 28,
    category: 'outsourcing',
    title: '방송 프로그램 스태프',
    description: '방송 제작 인력 아웃소싱',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['방송제작', '스태프', '전문인력'],
  },
  {
    id: 29,
    category: 'model',
    title: '시계 브랜드 화보',
    description: '명품 시계 화보 촬영',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['시계', '화보모델', '럭셔리'],
  },
  {
    id: 30,
    category: 'influencer',
    title: '레스토랑 맛집 리뷰',
    description: '맛집 인플루언서 마케팅',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80'
    ],
    tags: ['맛집', '푸드리뷰', '인플루언서'],
  }
]

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleItemCount, setVisibleItemCount] = useState<number>(12);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isExpandedView, setIsExpandedView] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<FolderGroupedData | null>(null);
  const hasCalledApi = useRef<boolean>(false);
  const navigate = useNavigate();

  // 동적 카테고리 리스트
  const menuList = [
    'Promotion',
    'Fashion_Show',
    'Model',
    'SNS_Marketing',
    'Luxury_Shop_Guard',
  ];

  // 카테고리 매핑
  const categoryMapping = {
    'all': null, // 전체는 모든 카테고리
    'planning': 'Fashion_Show',
    'btl': 'Promotion',
    'outsourcing': 'Luxury_Shop_Guard',
    'model': 'Model',
    'influencer': 'SNS_Marketing'
  };

  // 카테고리 한글 이름 매핑
  const categoryKoreanNames = {
    'Promotion': 'BTL 프로모션',
    'Fashion_Show': '기획 및 연출',
    'Model': '전문모델',
    'SNS_Marketing': '인플루언서 마케팅',
    'Luxury_Shop_Guard': '아웃소싱'
  };

  // 태그에서 카테고리를 한글로 변환하는 함수
  const convertTagToKorean = (tag: string): string => {
    // 카테고리인지 확인하고 한글로 변환
    if (categoryKoreanNames[tag as keyof typeof categoryKoreanNames]) {
      return categoryKoreanNames[tag as keyof typeof categoryKoreanNames];
    }
    // 카테고리가 아니면 원래 태그 반환
    return tag;
  };

  // API 데이터로부터 포트폴리오 아이템 생성
  const generatePortfolioItems = (folderGroupedResults: FolderGroupedData): PortfolioItem[] => {
    const items: PortfolioItem[] = [];
    let itemId = 1;

    if (!folderGroupedResults) return [];

    // 선택된 카테고리에 따라 데이터 필터링
    const targetCategory = categoryMapping[selectedCategory as keyof typeof categoryMapping];
    
    if (selectedCategory === 'all') {
      // 전체: 모든 카테고리의 mainImage를 가져옴
      Object.entries(folderGroupedResults).forEach(([category, folders]) => {
        Object.entries(folders).forEach(([folderName, folderData]) => {
          if (folderData.mainImage) {
            items.push({
              id: itemId++,
              category: category,
              title: folderName,
              description: `${category} 카테고리의 ${folderName} 프로젝트`,
              image: folderData.mainImage,
              images: [folderData.mainImage, ...folderData.subImages],
              tags: [category, folderName]
            });
          }
        });
      });
    } else if (targetCategory && folderGroupedResults[targetCategory]) {
      // 특정 카테고리: 해당 카테고리의 mainImage만 가져옴
      Object.entries(folderGroupedResults[targetCategory]).forEach(([folderName, folderData]) => {
        if (folderData.mainImage) {
          items.push({
            id: itemId++,
            category: selectedCategory,
            title: folderName,
            description: `${targetCategory} 카테고리의 ${folderName} 프로젝트`,
            image: folderData.mainImage,
            images: [folderData.mainImage, ...folderData.subImages],
            tags: [targetCategory, folderName]
          });
        }
      });
    }

    return items;
  };

  // API 데이터 가져오기
  useEffect(() => {
    // 이미 API를 호출했으면 중복 호출 방지
    if (hasCalledApi.current || isLoading) {
      return;
    }

    const fetchPortfolioData = async () => {
      try {
        hasCalledApi.current = true;
        setIsLoading(true);
        const folderGroupedResults = await fetchAllPortfolioDataGrouped(menuList);
        
        // API 데이터 저장
        setApiData(folderGroupedResults);
        
        // 각 카테고리별 폴더 그룹화된 결과 확인
        // Object.entries(folderGroupedResults).forEach(([category, folders]) => {
        //   console.log(`\n=== ${category} 카테고리 ===`);
          
        //   Object.entries(folders).forEach(([folderName, folderData]) => {
        //     console.log(`\n📁 폴더: ${folderName}`);
        //     console.log(`   📍 경로: ${folderData.folderPath}`);
        //     console.log(`   🖼️  메인 이미지: ${folderData.mainImage || '없음'}`);
        //     console.log(`   🖼️  서브 이미지 개수: ${folderData.subImages.length}개`);
        //     console.log(`   🖼️  서브 이미지들:`, folderData.subImages);
        //   });
          
        //   console.log(`\n📊 ${category} 카테고리 총 폴더 수: ${Object.keys(folders).length}개`);
        // });

        
        // 전체 통계
        // const totalFolders = Object.values(folderGroupedResults).reduce((sum, folders) => sum + Object.keys(folders).length, 0);
        // console.log(`\n📈 전체 포트폴리오 폴더 수: ${totalFolders}개`);
        
      } catch (error) {
        console.error('포트폴리오 데이터 가져오기 실패:', error);
        hasCalledApi.current = false; // 에러 발생 시 다시 호출 가능하도록
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []); // 빈 의존성 배열로 컴포넌트 마운트 시 한 번만 실행

  // API 데이터로부터 동적 포트폴리오 아이템 생성
  const dynamicPortfolioItems = apiData ? generatePortfolioItems(apiData) : portfolioItems;

  const filteredItems = dynamicPortfolioItems.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

const filteredPortfolio = filteredItems.slice(0, visibleItemCount);

const hasMoreItems = visibleItemCount < filteredItems.length;

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

  const handleContactClick = () => {
    navigate('/');
    // 페이지 이동 후 약간의 지연을 두고 스크롤 실행
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
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
                  <div className="aspect-w-16" style={{ height: '100%' }}>
                    <img 
                      id="poi"
                      src={item.image} 
                      alt={item.title}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-60 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    {/* <p className="text-white text-opacity-90">{item.description}</p> */}
                    <p className="text-white text-opacity-90"></p>
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
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
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
                    style={{ maxHeight: '400px', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-medium opacity-50">클릭하여 확대</span>
                  </div>
                </div>

                {/* Expanded Image Viewer */}
                {isExpandedView && (
                  <div 
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={(e) => {
                      if (e.target === e.currentTarget) toggleExpandedView();
                    }}
                  >
                    <div className="relative max-w-6xl w-full">
                      <button 
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
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
                        style={{ maxHeight: '100vh', height: '100%' }}
                      />
                      
                      <button 
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
                        onClick={nextImage}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <button 
                        className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-white text-white p-2 rounded-full transition-colors duration-300"
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
                        className={`absolute inset-0 bg-black bg-opacity-20 rounded-lg transition-opacity duration-300 ${
                          selectedImageIndex === index ? 'opacity-0' : ''
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {/* <p className="text-gray-600">{selectedItem.description}</p> */}
                  <p className="text-gray-600"></p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        #{convertTagToKorean(tag)}
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
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
            <img 
              // src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              src="/IMG/item/business_2.png"
              alt="Portfolio CTA Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20 text-center">
            <h2 className="text-3xl font-bold mb-8">지금 바로 SOL과 함께 성공적인 프로젝트를 시작하세요</h2>
            <p className="text-xl text-white mb-8">수많은 성공 사례로 검증된 솔루션과 노하우로, 귀사의 비전을 현실로 만들어드리겠습니다</p>
            <button 
              onClick={handleContactClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-white/90"
            >
              상담 신청하기
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio; 