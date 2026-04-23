[![Client CI/CD](https://github.com/professor-severus-snape/posts-router/actions/workflows/client.yml/badge.svg)](https://github.com/professor-severus-snape/posts-router/actions/workflows/client.yml)
[![Server CI/CD](https://github.com/professor-severus-snape/posts-router/actions/workflows/server.yml/badge.svg)](https://github.com/professor-severus-snape/posts-router/actions/workflows/server.yml)

# Посты с реализацией роутинга

Небольшое SPA-приложение для работы с постами, реализованное с использованием React Router и REST API.

Проект демонстрирует клиент-серверное взаимодействие и реализацию полного CRUD-цикла (создание, просмотр, редактирование и удаление данных).

## Демо

Посмотреть демо можно [здесь](https://professor-severus-snape.github.io/posts-router/).

## Возможности

- Просмотр списка постов
- Создание нового поста
- Просмотр отдельного поста
- Редактирование поста
- Удаление поста
- Навигация без перезагрузки страницы (SPA)
- Работа с динамическими маршрутами

## Технологии

- React v19
  - JSX
  - functional components
  - props
  - hooks (useState, useEffect)
- React Router v7
  - createBrowserRouter
  - RouterProvider
  - Outlet
  - Link
  - hooks (useLocation, useNavigate, useParams)
- типизация - TypeScript v6
- линтинг - ESLint v10
- сборка - Vite v8
- Node.js + Express v5
- REST API

## CI/CD

- GitHub Actions — линтинг и сборка клиентской и серверной частей приложения
- GitHub Pages — деплой клиентской части приложения
- Render.com — хостинг серверной части приложения

## Архитектура

Приложение построено по классической клиент-серверной модели:

- Клиент управляет интерфейсом и маршрутизацией
- Сервер предоставляет REST API для работы с постами

## Структура проекта

- `client/` — клиентская часть (frontend)
- `server/` — серверная часть (backend)

## Документация

- [Frontend](./client/README.md)
- [Backend](./server/README.md)
