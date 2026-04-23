const DEV_HOSTS = ['localhost', '127.0.0.1'];

const isDev = DEV_HOSTS.includes(window.location.hostname);

export const API_URL = isDev
  ? 'http://localhost:7070' // локальный сервер
  : 'https://ra-router-crud-backend-yimc.onrender.com'; // сервер на render.com
