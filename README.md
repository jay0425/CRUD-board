# CRUD-board

# monorepo 구조

## 폴더구조

```bash
CRUD_BOARD_2025/
│── apps/
│   ├── backend/      # Node.js + Express + TypeScript (Drizzle + PostgreSQL)
│   ├── frontend/     # React + Vite + Shadcn + React Query
│── packages/         # 공유 패키지 (공통 유틸, 타입, ESLint 설정 등)
│   ├── db/           # Drizzle 스키마 및 데이터베이스 관련 코드
│   ├── ui/           # 프론트엔드에서 공유할 UI 컴포넌트 (shadcn 기반)
│   ├── utils/        # 백엔드 및 프론트엔드에서 공통으로 사용할 유틸 함수
│── .github/          # GitHub Actions (CI/CD 설정)
│── .eslintrc.json    # 공통 ESLint 설정
│── .prettierrc       # Prettier 설정
│── package.json      # Monorepo 전체 package.json (workspace 설정)
│── turbo.json        # TurboRepo 설정 (선택 사항)
│── pnpm-workspace.yaml # pnpm workspace 설정 (선택 사항)
│── tsconfig.base.json # 공통 TypeScript 설정
│── README.md         # 프로젝트 문서
```

<br/>

## 폴더별 설명

- `apps/` → 실제 실행되는 애플리케이션 폴더
  - `backend/` → Express + Drizzle + PostgreSQL API 서버
  - `frontend/` → React + Vite + Shadcn + React Query 기반의 프론트엔드
- `packages/` → 여러 애플리케이션에서 공유할 코드
  - `db/` → Drizzle ORM 스키마, 마이그레이션 관리 (backend에서 import)
  - `ui/` → frontend에서 재사용할 UI 컴포넌트 모음
  - `utils/` → 공통 유틸 함수 및 타입 정의

<br/>

## Monorepo 툴링 선택

- **pnpm workspace** → 패키지 간의 의존성 관리를 쉽게 할 수 있음
- **TurboRepo** → 빌드 캐싱 및 실행 속도 최적화
