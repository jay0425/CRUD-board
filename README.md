# CRUD-board

CRUD_BOARD_2025/
│── apps/
│ ├── backend/ # Node.js + Express + TypeScript (Drizzle + PostgreSQL)
│ ├── frontend/ # React + Vite + Shadcn + React Query
│── packages/ # 공유 패키지 (공통 유틸, 타입, ESLint 설정 등)
│ ├── db/ # Drizzle 스키마 및 데이터베이스 관련 코드
│ ├── ui/ # 프론트엔드에서 공유할 UI 컴포넌트 (shadcn 기반)
│ ├── utils/ # 백엔드 및 프론트엔드에서 공통으로 사용할 유틸 함수
│── .github/ # GitHub Actions (CI/CD 설정)
│── .eslintrc.json # 공통 ESLint 설정
│── .prettierrc # Prettier 설정
│── package.json # Monorepo 전체 package.json (workspace 설정)
│── turbo.json # TurboRepo 설정 (선택 사항)
│── pnpm-workspace.yaml # pnpm workspace 설정 (선택 사항)
│── tsconfig.base.json # 공통 TypeScript 설정
│── README.md # 프로젝트 문서
