import {AxiosInstance} from 'axios';

export interface Headers {
  [key: string]: any;
}

export class HttpRequest {
  constructor(private axios: AxiosInstance, private getHttpOptions?: () => { headers?: Headers }) {}
  private getOptions(): { headers?: Headers } {
    if (this.getHttpOptions) {
      return this.getHttpOptions();
    } else {
      const httpOptions = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };
      return httpOptions;
    }
  }

  get<T>(url: string, options?: {headers?: Headers}): Promise<T> {
    return Promise.resolve(this.axios.get<T>(url, options ? options : this.getOptions()).then(({data}) => data));
  }

  delete<T>(url: string, options?: {headers?: Headers}): Promise<T> {
    return Promise.resolve(this.axios.delete(url, options ? options : this.getOptions()).then(({data}) => data));
  }

  post<T>(url: string, obj: any, options?: {headers?: Headers}): Promise<T> {
    return Promise.resolve(this.axios.post(url, obj, options ? options : this.getOptions()).then(({data}) => data));
  }

  put<T>(url: string, obj: any, options?: {headers?: Headers}): Promise<T> {
    return Promise.resolve(this.axios.put(url, obj, options ? options : this.getOptions()).then(({data}) => data));
  }

  patch<T>(url: string, obj: any, options?: {headers?: Headers}): Promise<T> {
    return Promise.resolve(this.axios.patch<T>(url, obj, options ? options : this.getOptions()).then(({data}) => data));
  }
}
