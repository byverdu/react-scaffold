export interface API {
  get: (url: string) => any;
  post: (url: string, data: any) => any;
  patch: (url: string, data: any) => any;
}

export enum HTTPVerbs {
  get = 'GET',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE'
}
