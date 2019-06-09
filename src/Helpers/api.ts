import axios, { AxiosResponse, AxiosError } from 'axios';
import { HTTPVerbs } from 'Models/Enums';

export class ApiError extends Error {
  constructor(response: AxiosError) {
    super();
    const message = this.getErrorMessage(response);
    this.message = message;
  }

  getErrorMessage = ({ config, response }: AxiosError): string => {
    return `The request to ${config.url} resulted in an error: Status Code ${
      response.status
    } (${response.statusText})`;
  };
}

const sendHttpRequest = (url: string, method: HTTPVerbs, data?: any) =>
  axios
    .request({ url, method, data })
    .then((resp: AxiosResponse) => resp.data)
    .catch((error: AxiosError) => {
      throw new ApiError(error);
    });

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

const deleteItem = async (url: string): Promise<any> => {
  const res = await sendHttpRequest(url, HTTPVerbs.delete);

  return res;
};

export { get, post, patch, deleteItem };
