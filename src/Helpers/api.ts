import axios, { AxiosResponse, AxiosError } from 'axios';
import { HTTPVerbs } from 'Models/Api';

const sendHttpRequest = (url: string, method: HTTPVerbs, data?: any) =>
  axios
    .request({ url, method, data })
    .then((resp: AxiosResponse) => resp.data)
    .catch((error: AxiosError) => Error(error.message));

const get = async (url: string): Promise<any> => {
  const res = await sendHttpRequest(url, HTTPVerbs.get);

  return res;
};

const post = async (url: string, data): Promise<any> => {
  const res = await sendHttpRequest(url, HTTPVerbs.post, data);

  return res;
};

const patch = async (url: string, data): Promise<any> => {
  const res = await sendHttpRequest(url, HTTPVerbs.patch, data);

  return res;
};

export { get, post, patch };
