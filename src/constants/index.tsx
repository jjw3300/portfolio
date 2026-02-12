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
        rating: 2,
        description:
          "정적 타이핑과 고급 타입을 활용해 독립적인 모듈 설계 및 디버깅 가능",
      },
      {
        name: "JavaScript",
        rating: 2,
        description:
          "ES6+ 문법과 비동기 처리에 숙달되어 복잡한 비즈니스 로직을 독립적으로 구현",
      },
      {
        name: "Python",
        rating: 2,
        description:
          "언어 특성을 이해하고 라이브러리를 활용해 데이터 처리 및 기능 구현 가능",
      },
      {
        name: "C++",
        rating: 2,
        description:
          "STL 및 객체지향 개념을 숙지하여 효율적인 알고리즘 및 데이터 구조 구현",
      },
      {
        name: "Java",
        rating: 1,
        description:
          "기초 문법과 객체지향의 기본 개념을 이해하며 기초적인 코드 해석 및 작성 가능",
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
        rating: 2,
        description:
          "컴포넌트 생명주기와 다양한 Hook을 활용하여 요구사항에 맞는 UI 기능을 독립적으로 구현 가능",
      },
      {
        name: "Tailwind",
        rating: 2,
        description:
          "커스텀 설정과 유틸리티 클래스를 조합하여 반응형 웹 UI를 신속하게 빌드 및 유지보수 가능",
      },
      {
        name: "Framer Motion",
        rating: 2,
        description:
          "선언적 API와 제스처 이벤트를 숙달하여 생동감 있는 인터랙션 및 애니메이션 구현 가능",
      },
      {
        name: "Zustand",
        rating: 2,
        description:
          "중앙 집중식 상태 관리 저장소를 구축하고 컴포넌트 간 데이터 흐름을 안정적으로 제어 가능",
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
        description:
          "실시간 데이터베이스 및 인증 시스템을 독립적으로 구축하고 운영 가능",
      },
      {
        name: "Git",
        rating: 2,
        description:
          "브랜치 전략을 숙지하여 협업 과정에서의 형상 관리 및 충돌 문제 해결 경험",
      },
      {
        name: "Vercel",
        rating: 1,
        description:
          "제공되는 플랫폼 기능을 활용하여 프로젝트 배포 및 기본 환경 설정 수행 가능",
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
        description:
          "디자인 시스템의 원리를 이해하고 변수와 컴포넌트를 활용한 효율적인 설계 구현 가능",
      },
      {
        name: "DaVinci Resolve",
        rating: 2,
        description:
          "편집 툴의 기능을 숙달하여 독립적인 영상 컷 편집 및 효과 적용 가능",
      },
      {
        name: "Aseprite",
        rating: 1,
        description:
          "기초적인 툴 사용법을 익혀 가이드라인에 따른 도트 그래픽 에셋 제작 가능",
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
