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
  link: string;
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

export interface AchievementItem {
  id: number;
  title: string;
  date?: string;
  isEmpty?: boolean;
}

export interface StyleConfig {
  iconBox: string;
  title: string;
  star: string;
}

/** * Styles & Theme Constants
 */
export const COLOR_MAP: Record<string, StyleConfig> = {
  "text-amber-500": {
    iconBox:
      "bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400",
    title: "text-amber-700 dark:text-amber-400",
    star: "text-amber-500",
  },
  "text-blue-500": {
    iconBox: "bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400",
    title: "text-blue-700 dark:text-blue-400",
    star: "text-blue-500",
  },
  "text-green-500": {
    iconBox:
      "bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400",
    title: "text-green-700 dark:text-green-400",
    star: "text-green-500",
  },
  "text-red-500": {
    iconBox: "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400",
    title: "text-red-700 dark:text-red-400",
    star: "text-red-500",
  },
};

/** * Data Constants
 */
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
    link: "https://i14d205.p.ssafy.io",
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
    link: "https://github.com/jjw3300",
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
        name: "Python",
        rating: 2,
        description: "자료구조와 알고리즘 기반의 성능 최적화 로직 구현 가능",
      },
      {
        name: "C++",
        rating: 2,
        description: "STL 활용 및 객체지향 프로그래밍 기반의 데이터 처리 가능",
      },
      {
        name: "Java",
        rating: 1,
        description:
          "기초 문법 숙지 및 객체지향 개념을 활용한 간단한 애플리케이션 개발",
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
        name: "Framer Motion",
        rating: 3,
        description:
          "선언적 API를 활용한 복잡한 인터랙션 및 마이크로 애니메이션 구현",
      },
      {
        name: "Tailwind",
        rating: 3,
        description: "커스텀 설정과 유틸리티 클래스를 활용한 빠른 스타일링",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Database className="w-5 h-5" />,
    color: "text-green-500",
    items: [
      {
        name: "Firebase",
        rating: 2,
        description: "NoSQL 기반 실시간 데이터베이스 설계 및 인증 시스템 구현",
      },
      {
        name: "Git",
        rating: 1,
        description: "Git-flow 전략을 활용한 브랜치 관리 및 충돌 해결 경험",
      },
      {
        name: "Vercel",
        rating: 2,
        description:
          "프로젝트 특성에 맞는 최적화된 배포 전략 및 CI/CD 환경 구축",
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

export const AWARDS_DATA: AchievementItem[] = [
  { id: 1, title: "SSAFY 기자단 최우수상", date: "2026.02" },
  { id: 2, title: "preparation", isEmpty: true },
  { id: 3, title: "preparation", isEmpty: true },
  { id: 4, title: "preparation", isEmpty: true },
  { id: 5, title: "preparation", isEmpty: true },
  { id: 6, title: "preparation", isEmpty: true },
  { id: 7, title: "preparation", isEmpty: true },
  { id: 8, title: "preparation", isEmpty: true },
];

export const CERTIFICATIONS_DATA: AchievementItem[] = [
  { id: 1, title: "한국사능력검정시험 1급", date: "2025.02" },
  { id: 2, title: "KBS 한국어능력시험 3+급", date: "2025.10" },
  { id: 3, title: "preparation", isEmpty: true },
  { id: 4, title: "preparation", isEmpty: true },
  { id: 5, title: "preparation", isEmpty: true },
  { id: 6, title: "preparation", isEmpty: true },
  { id: 7, title: "preparation", isEmpty: true },
  { id: 8, title: "preparation", isEmpty: true },
];
