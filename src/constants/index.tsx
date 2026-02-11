import { Code2, Layout, Database, Image } from "lucide-react";
import type { ReactNode } from "react";
import portmatchVideo from "../assets/video/portmatch.mp4";
import giterraVideo from "../assets/video/giterra.mp4";

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  features: string[];
  techStack: string[];
  video: string;
}

export interface TechItem {
  name: string;
  rating: 1 | 2 | 3;
  description: string;
}

export interface TechCategory {
  title: string;
  icon: ReactNode;
  color: string;
  items: TechItem[];
}

export const PROJECT_DATA: Project[] = [
  {
    title: "Portmatch",
    subtitle: "포트폴리오 기반 매칭 플랫폼",
    period: "2026.01 ~ 2026.02 (6주)",
    description:
      "구직자와 기업을 포트폴리오로 연결하며, 면접부터 취업까지 해결하는 플랫폼입니다. 실시간 데이터 동기화를 통해 채용 프로세스 과정을 간편화 했습니다.",
    features: [
      "Firestore onSnapshot 기반 실시간 일정 동기화",
      "240개 파티클 모핑 애니메이션 인트로",
    ],
    techStack: ["React", "TS", "Zustand", "Firebase"],
    video: portmatchVideo,
  },
  {
    title: "Giterra",
    subtitle: "GitHub 데이터 3D 시각화",
    period: "2026.02 ~ 진행 중",
    description:
      "GitHub 활동 데이터를 우주 속 행성 컨셉으로 재해석한 몰입형 프로파일러입니다. 텍스트 데이터를 3D 인터랙션으로 변환하여 시각적 즐거움을 제공합니다.",
    features: [
      "CSS3D Perspective 활용 원통형 드래그 UI",
      "스캔라인 및 네온 글로우 효과 시스템 구축",
    ],
    techStack: ["React", "TS", "Tailwind", "Framer Motion"],
    video: giterraVideo,
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    color: "text-amber-500",
    items: [
      {
        name: "TypeScript",
        rating: 3,
        description: "타입 시스템을 활용한 안정적인 대규모 아키텍처 설계 가능",
      },
      {
        name: "JavaScript",
        rating: 3,
        description: "ES6+ 문법 및 비동기 처리에 능숙하며 런타임 환경 이해",
      },
      {
        name: "C++",
        rating: 2,
        description: "자료구조와 알고리즘 기반의 성능 최적화 로직 구현 가능",
      },
      {
        name: "Python",
        rating: 1,
        description: "기본 문법 활용 및 라이브러리를 이용한 데이터 자동화 가능",
      },
    ],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    color: "text-blue-500",
    items: [
      {
        name: "React",
        rating: 3,
        description: "재사용 가능한 컴포넌트 설계 및 고성능 UI/UX 구현",
      },
      {
        name: "Zustand",
        rating: 3,
        description: "복잡한 전역 상태 관리 및 리렌더링 최적화 숙달",
      },
      {
        name: "Tailwind",
        rating: 3,
        description: "커스텀 설정과 유틸리티 클래스를 활용한 빠른 스타일링",
      },
    ],
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    color: "text-green-500",
    items: [
      {
        name: "Firebase",
        rating: 2,
        description: "인증, DB, 스토리지 등 서버리스 환경 구축 및 운영",
      },
      {
        name: "Firestore",
        rating: 2,
        description: "NoSQL 데이터 모델링 및 실시간 데이터 쿼리 최적화",
      },
    ],
  },
  {
    title: "Design",
    icon: <Image className="w-5 h-5" />,
    color: "text-red-500",
    items: [
      {
        name: "Figma",
        rating: 3,
        description: "컴포넌트 단위 디자인 시스템 구축 및 프로토타이핑",
      },
      {
        name: "Aseprite",
        rating: 2,
        description: "프레임 애니메이션 제작 및 게임용 도트 에셋 작업 가능",
      },
      {
        name: "DaVinci Resolve",
        rating: 1,
        description: "기본적인 영상 컷 편집 및 유튜브 업로드용 후보정 작업",
      },
    ],
  },
];
