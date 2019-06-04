export interface API {
  get: (url: string) => any;
  post: (url: string, data: any) => any;
  patch: (url: string) => any;
}
