import { API_URL } from '../config';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const pingServer = async () => {
  const MAX_RETRIES = 2;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(`${API_URL}/ping`);
      if (response.ok) return null; // ранний выход из функции, если сервер проснулся
      throw new Error('Server down'); // сервер не ответил
    } catch (err) {
      if (attempt === MAX_RETRIES) throw err; // если обе попытки не удались, то и не судьба!
      await delay(1000); // повторная попытка спустя 1 сек
    }
  }
};

export default pingServer;
