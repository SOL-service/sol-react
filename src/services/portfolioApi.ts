// Portfolio API Service
export interface PortfolioApiResponse {
  // API 응답 타입 정의 (실제 응답 구조에 맞게 수정 필요)
  data: unknown[];
  success: boolean;
  message?: string;
}

export interface GroupedPortfolioData {
  [category: string]: {
    data: unknown[];
    success: boolean;
    message?: string;
    count: number;
  };
}

export interface FolderGroupedData {
  [category: string]: {
    [folderName: string]: {
      mainImage?: string;
      subImages: string[];
      folderPath: string;
    };
  };
}

const BASE_URL = 'https://www.sol-company.kr/api';

export const fetchPortfolioList = async (category: string): Promise<PortfolioApiResponse> => {
  try {
    const url = `${BASE_URL}/files/list?Category=${category}`;
    // console.log(`🌐 API 호출 URL: ${url}`);
    
    const response = await fetch(url);
    // console.log(`📡 ${category} HTTP 상태:`, response.status, response.statusText);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    // console.log(`📦 ${category} 파싱된 JSON 데이터:`, data);
    
    // 응답 구조 확인
    // console.log(`📊 ${category} 데이터 구조 분석:`);
    // console.log(`  - 타입: ${typeof data}`);
    // console.log(`  - 키들: ${Object.keys(data)}`);
    
    // API 응답이 배열인 경우와 객체인 경우를 모두 처리
    if (Array.isArray(data)) {
    //   console.log(`✅ ${category} 응답이 배열입니다. 길이: ${data.length}`);
      return {
        data: data,
        success: true,
        message: 'Success'
      };
    } else if (data && typeof data === 'object') {
    //   console.log(`✅ ${category} 응답이 객체입니다.`);
      return {
        data: data.data || data,
        success: data.success !== false,
        message: data.message || 'Success'
      };
    } else {
      console.warn(`⚠️ ${category} 예상치 못한 응답 형태:`, data);
      return {
        data: [],
        success: false,
        message: 'Unexpected response format'
      };
    }
  } catch (error) {
    console.error(`❌ ${category} Portfolio API 호출 중 오류 발생:`, error);
    throw error;
  }
};

// URL에서 폴더명 추출하는 함수
const extractFolderName = (url: string): string => {
  try {
    const urlParts = url.split('/');
    // upload/Category/folderName/ 형식에서 folderName 추출
    const categoryIndex = urlParts.findIndex(part => part === 'upload');
    if (categoryIndex !== -1 && urlParts[categoryIndex + 2]) {
      return urlParts[categoryIndex + 2];
    }
    return 'unknown';
  } catch (error) {
    console.error('폴더명 추출 실패:', error);
    return 'unknown';
  }
};

// URL에서 이미지 타입 추출하는 함수
const getImageType = (url: string): 'main' | 'sub' => {
  const fileName = url.split('/').pop() || '';
  return fileName.startsWith('main') ? 'main' : 'sub';
};

// API 응답 데이터를 폴더별로 그룹화하는 함수
const groupDataByFolder = (data: unknown[]): { [folderName: string]: { mainImage?: string; subImages: string[]; folderPath: string } } => {
  const folderGroups: { [folderName: string]: { mainImage?: string; subImages: string[]; folderPath: string } } = {};
  
  data.forEach((item: unknown) => {
    if (typeof item === 'string' && item.includes('/upload/')) {
      const folderName = extractFolderName(item);
      const imageType = getImageType(item);
      
      if (!folderGroups[folderName]) {
        folderGroups[folderName] = {
          mainImage: undefined,
          subImages: [],
          folderPath: item.split('/').slice(0, -1).join('/') // 폴더 경로
        };
      }
      
      if (imageType === 'main') {
        folderGroups[folderName].mainImage = item;
      } else {
        folderGroups[folderName].subImages.push(item);
      }
    }
  });
  
  return folderGroups;
};

// 모든 카테고리 데이터를 한번에 가져와서 폴더별로 그룹화하는 함수
export const fetchAllPortfolioDataGrouped = async (categories: string[]): Promise<FolderGroupedData> => {
  const groupedResults: FolderGroupedData = {};
  
  try {
    const promises = categories.map(async (category) => {
      try {
        // console.log(`\n🔍 ${category} 카테고리 API 호출 중...`);
        const response = await fetchPortfolioList(category);
        // console.log(`${category} 원본 API 응답:`, response);
        
        // 응답 구조 확인
        // console.log(`${category} 응답 타입:`, typeof response);
        // console.log(`${category} response.success:`, response.success);
        // console.log(`${category} response.data 타입:`, typeof response.data);
        // console.log(`${category} response.data:`, response.data);
        
        if (response.data && Array.isArray(response.data)) {
        //   console.log(`${category} 데이터 배열 길이:`, response.data.length);
          
          // 폴더별로 데이터 그룹화
          const folderGroups = groupDataByFolder(response.data);
          groupedResults[category] = folderGroups;
          
        //   console.log(`${category} 카테고리 폴더 그룹화 결과:`, folderGroups);
        } else {
          console.warn(`${category} 카테고리 데이터가 올바르지 않습니다:`, response);
          console.warn(`${category} response.data가 배열이 아닙니다:`, typeof response.data);
          groupedResults[category] = {};
        }
        
        return { category, data: response };
      } catch (error) {
        console.error(`${category} 카테고리 데이터 가져오기 실패:`, error);
        groupedResults[category] = {};
        return { category, error: true };
      }
    });
    
    await Promise.all(promises);
    // console.log('\n🎯 최종 그룹화 결과:', groupedResults);
    return groupedResults;
  } catch (error) {
    console.error('전체 포트폴리오 데이터 가져오기 실패:', error);
    throw error;
  }
};

// 모든 카테고리 데이터를 한번에 가져와서 그룹화하는 함수
export const fetchAllPortfolioData = async (categories: string[]): Promise<GroupedPortfolioData> => {
  const groupedResults: GroupedPortfolioData = {};
  
  try {
    const promises = categories.map(async (category) => {
      try {
        const response = await fetchPortfolioList(category);
        
        // 카테고리별로 데이터 그룹화
        groupedResults[category] = {
          data: response.data || [],
          success: response.success,
          message: response.message,
          count: Array.isArray(response.data) ? response.data.length : 0
        };
        
        return { category, data: response };
      } catch (error) {
        console.error(`${category} 카테고리 데이터 가져오기 실패:`, error);
        groupedResults[category] = {
          data: [],
          success: false,
          message: (error as Error).message,
          count: 0
        };
        return { category, error: true };
      }
    });
    
    await Promise.all(promises);
    return groupedResults;
  } catch (error) {
    console.error('전체 포트폴리오 데이터 가져오기 실패:', error);
    throw error;
  }
};

// 특정 카테고리의 데이터만 가져오는 함수
export const fetchPortfolioByCategory = async (category: string): Promise<GroupedPortfolioData> => {
  try {
    const response = await fetchPortfolioList(category);
    
    return {
      [category]: {
        data: response.data || [],
        success: response.success,
        message: response.message,
        count: Array.isArray(response.data) ? response.data.length : 0
      }
    };
  } catch (error) {
    console.error(`${category} 카테고리 데이터 가져오기 실패:`, error);
    return {
      [category]: {
        data: [],
        success: false,
        message: (error as Error).message,
        count: 0
      }
    };
  }
}; 