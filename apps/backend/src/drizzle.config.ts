// drizzle.config.ts는 설정 파일로, 마이그레이션, 데이터베이스 연결 설정 등을 관리한다.

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts', // 스키마 파일 경로
  out: './migrations', // 마이그레이션 경로
  driver: 'pg', // PostgreSQL 드라이버
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // 환경 변수로 DB 연결
  },
});
