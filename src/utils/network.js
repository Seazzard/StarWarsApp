import { HTTP, HTTPS } from '@constants/api';

/**
 * изменяет url с http на https
 * @param {string} url - url для изменения
 * @returns {string} - url с HTTPS
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

/**
 * Отправляет запрос fetch
 * @param {string} url -url для запроса
 * @returns {Promise} - Промис с результатом запроса
 */

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error('Could not fetch.', res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
};

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );
  return res;
};
