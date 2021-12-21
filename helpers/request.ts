import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface IRequest {
  get: (pathname: string) => Promise<AxiosResponse>;
  post: (pathname: string, config: Config) => Promise<AxiosResponse>;
  put: (pathname: string, config: Config) => Promise<AxiosResponse>;
  delete: (pathname: string, config: Config) => Promise<AxiosResponse>;
}

type Config = AxiosRequestConfig & {
  body?: object;
};

class Request implements IRequest {
  get = (pathname: string): Promise<AxiosResponse> => {
    return this.send(pathname, 'get', null);
  };

  post = (pathname: string, config: Config): Promise<AxiosResponse> => {
    return this.send(pathname, 'post', config);
  };

  put = (pathname: string, config: Config): Promise<AxiosResponse> => {
    return this.send(pathname, 'put', config);
  };

  delete = (pathname: string, config: Config): Promise<AxiosResponse> => {
    return this.send(pathname, 'delete', config);
  };

  private send = async (
    pathname: string,
    method: string,
    config: Config = {}
  ): Promise<AxiosResponse> => {
    return new Promise(async () => {
      const { body, ...axiosConfig } = config;
      const instance: AxiosInstance = axios.create(axiosConfig);

      await instance[method](pathname, body);
    });
  };
}

const request = new Request();

export default request;
