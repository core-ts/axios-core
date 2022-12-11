import {AxiosInstance} from 'axios';

export interface Headers {
  [key: string]: any;
}

export class HttpRequest {
  constructor(private axios: AxiosInstance, private getHttpOptions?: () => Promise<{ headers?: Headers }>) {
    this.get = this.get.bind(this);
    this.delete = this.delete.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.patch = this.patch.bind(this);
  }
  private getOptions(): Promise<{ headers?: Headers }> {
    if (this.getHttpOptions) {
      return this.getHttpOptions();
    } else {
      const httpOptions = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };
      return Promise.resolve(httpOptions);
    }
  }
  get<T>(url: string, options?: {headers?: Headers}): Promise<T> {
    if (options) {
      return Promise.resolve(this.axios.get<T>(url, options).then(({data}) => data));
    } else {
      return this.getOptions().then(opts => Promise.resolve(this.axios.get<T>(url, opts).then(({data}) => data)));
    }
  }
  delete<T>(url: string, options?: {headers?: Headers}): Promise<T> {
    if (options) {
      return Promise.resolve(this.axios.delete(url, options).then(({data}) => data));
    } else {
      return this.getOptions().then(opts => Promise.resolve(this.axios.delete(url, opts).then(({data}) => data)));
    }
  }
  post<T>(url: string, obj: any, options?: {headers?: Headers}): Promise<T> {
    if (options) {
      return Promise.resolve(this.axios.post(url, obj, options).then(({data}) => data));
    } else {
      return this.getOptions().then(opts => Promise.resolve(this.axios.post(url, obj, opts).then(({data}) => data)));
    }
  }
  put<T>(url: string, obj: any, options?: {headers?: Headers}): Promise<T> {
    if (options) {
      return Promise.resolve(this.axios.put(url, obj, options).then(({data}) => data));
    } else {
      return this.getOptions().then(opts => Promise.resolve(this.axios.put(url, obj, opts).then(({data}) => data)));
    }
    
  }
  patch<T>(url: string, obj: any, options?: {headers?: Headers}): Promise<T> {
    if (options) {
      return Promise.resolve(this.axios.patch<T>(url, obj, options).then(({data}) => data));
    } else {
      return this.getOptions().then(opts => Promise.resolve(this.axios.patch<T>(url, obj, opts).then(({data}) => data)));
    }
  }
}
