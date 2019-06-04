import axios, { AxiosResponse, AxiosError } from 'axios';

const sendHttpRequest = (url, method) =>
  axios
    .request({ url, method })
    .then((resp: AxiosResponse) => resp.data)
    .catch((error: AxiosError) => Error(error.message));

const get = async (url: string): Promise<any> => {
  const res = await sendHttpRequest(url, 'GET');

  return res;
};

export { get };
