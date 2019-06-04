import axios, { AxiosResponse, AxiosError } from 'axios';

const sendHttpRequest = (url, method, data?: any) =>
  axios
    .request({ url, method, data })
    .then((resp: AxiosResponse) => resp.data)
    .catch((error: AxiosError) => Error(error.message));

const get = async (url: string): Promise<any> => {
  const res = await sendHttpRequest(url, 'GET');

  return res;
};

const post = async (url: string, data): Promise<any> => {
  const res = await sendHttpRequest(url, 'POST', data);

  return res;
};

export { get, post };
