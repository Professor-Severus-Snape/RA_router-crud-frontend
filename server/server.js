import cors from 'cors';
import express from 'express';

const app = express(); // создаём объект приложения Express
app.use(cors()); // разрешаем запросы с других доменов
app.use(express.json()); // парсим JSON из тела запроса (request.body)

// проверка подключения к серверу:
app.get('/ping', (_request, response) => {
  response.status(204).end();
});

// массив с постами:
const posts = [
  {
    id: 0,
    content:
      'Maxime quo iure nostrum atque voluptate rerum dolores quisquam. ' +
      'Inventore deleniti aut corrupti perferendis a odit, maiores facilis, ' +
      'vel nobis quam asperiores labore possimus? ' +
      'Qui officiis accusamus deleniti illum dolore.',
    created: Date.now(),
  },
];

let nextId = 1; // для создания id постов

// получение всех постов:
app.get('/posts', (_request, response) => {
  const sortedPosts = [...posts].sort((a, b) => b.created - a.created);
  response.status(200).json(sortedPosts);
});

// получение одного конкретного поста по его id (динамический параметр):
app.get('/posts/:id', (request, response) => {
  const postId = Number(request.params.id);

  if (Number.isNaN(postId)) {
    return response.status(400).json({ error: 'Invalid id' });
  }

  const foundPost = posts.find((post) => post.id === postId);

  if (!foundPost) {
    return response.status(404).json({ error: 'Post not found' });
  }

  response.status(200).json({ post: foundPost });
});

// создание нового поста (поле 'content' обязательно):
app.post('/posts', (request, response) => {
  const { content } = request.body;

  if (!content || content.trim() === '') {
    return response.status(400).json({ error: 'Content is required' });
  }

  const newPost = { id: nextId++, content, created: Date.now() };
  posts.push(newPost);

  response.status(201).json(newPost);
});

// редактирование текста поста по его id (динамический параметр):
app.patch('/posts/:id', (request, response) => {
  const postId = Number(request.params.id);

  if (Number.isNaN(postId)) {
    return response.status(400).json({ error: 'Invalid id' });
  }

  const updatedPost = posts.find((post) => post.id === postId);

  if (!updatedPost) {
    return response.status(404).json({ error: 'Post not found' });
  }

  const { content } = request.body;

  if (content && content.trim()) {
    updatedPost.content = content.trim(); // мутируем объект только, если текст передан
  }

  response.status(200).json({ post: updatedPost });
});

// удаление одного конкретного поста по его id (динамический параметр):
app.delete('/posts/:id', (request, response) => {
  const postId = Number(request.params.id);

  if (Number.isNaN(postId)) {
    return response.status(400).json({ error: 'Invalid id' });
  }

  const index = posts.findIndex((post) => post.id === postId);

  if (index === -1) {
    return response.status(404).json({ error: 'Post not found' });
  }

  posts.splice(index, 1);
  response.status(204).end();
});

const port = process.env.PORT || 7070;

app.listen(port, () => console.log(`Server running on port ${port}`)).on('error', console.error);
