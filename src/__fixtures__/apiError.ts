import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const statusText = {
  404: 'Not Found',
  500: 'Internal Server Error'
};

const mockResponseError = (status, config): AxiosResponse => ({
  data: null,
  status,
  statusText: statusText[status],
  headers: null,
  config
});

export const getAxiosResponse = (
  response: AxiosResponse,
  data: any = undefined,
  message = ''
): AxiosResponse => ({
  headers: null,
  status: response.status,
  statusText: response.statusText || statusText[response.status],
  data: {
    message
  },
  config: {
    url: '',
    data: data ? JSON.stringify(data) : data
  }
});

export const mockApiError = (
  response: AxiosResponse,
  config: AxiosRequestConfig,
  message: string
): AxiosError => ({
  isAxiosError: true,
  response: getAxiosResponse(response, null, message),
  config: {
    url: config.url
  },
  message: '',
  stack: '',
  name: ''
});

export const status500Response = (config, message?: string): AxiosError => {
  const response = mockResponseError(500, config);
  return mockApiError(response, config, message);
};

export const status404Response = (config, message?: string): AxiosError => {
  const response = mockResponseError(404, config);
  return mockApiError(response, config, message);
};
