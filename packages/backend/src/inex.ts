import express from 'express';
import cors from 'cors';
import { db } from './db';
import { posts } from './db/schema';
import { eq } from 'drizzle-orm';

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어
app.use(cors());
app.use(express.json());

// 모든 게시물 가져오기
app.get('/api/posts', async (_req, res) => {
  try {
    const allPosts = await db.select().from(posts).orderBy(posts.id);
    res.json(allPosts);
  } catch (error) {
    console.error('게시물 조회 오류:', error);
    res.status(500).json({ error: '게시물 조회 실패' });
  }
});

// 특정 게시물 가져오기
app.get('/api/posts/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const post = await db.select().from(posts).where(eq(posts.id, id));
    if (post.length === 0) {
      return res.status(404).json({ error: '게시물을 찾을 수 없습니다' });
    }
    res.json(post[0]);
  } catch (error) {
    console.error('게시물 조회 오류:', error);
    res.status(500).json({ error: '게시물 조회 실패' });
  }
});

// 게시물 생성
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: '제목과 내용이 필요합니다' });
  }

  try {
    const newPost = await db.insert(posts).values({ title, content }).returning();
    res.status(201).json(newPost[0]);
  } catch (error) {
    console.error('게시물 생성 오류:', error);
    res.status(500).json({ error: '게시물 생성 실패' });
  }
});

// 게시물 수정
app.put('/api/posts/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  if (!title && !content) {
    return res.status(400).json({ error: '수정할 내용이 필요합니다' });
  }

  try {
    const updateData: { title?: string; content?: string } = {};
    if (title) updateData.title = title;
    if (content) updateData.content = content;

    const updatedPost = await db.update(posts).set(updateData).where(eq(posts.id, id)).returning();

    if (updatedPost.length === 0) {
      return res.status(404).json({ error: '게시물을 찾을 수 없습니다' });
    }

    res.json(updatedPost[0]);
  } catch (error) {
    console.error('게시물 수정 오류:', error);
    res.status(500).json({ error: '게시물 수정 실패' });
  }
});

// 게시물 삭제
app.delete('/api/posts/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const deletedPost = await db.delete(posts).where(eq(posts.id, id)).returning();

    if (deletedPost.length === 0) {
      return res.status(404).json({ error: '게시물을 찾을 수 없습니다' });
    }

    res.json({ message: '게시물이 삭제되었습니다' });
  } catch (error) {
    console.error('게시물 삭제 오류:', error);
    res.status(500).json({ error: '게시물 삭제 실패' });
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
