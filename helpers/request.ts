import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { RequestBody, RequestPathname } from '../domain/request';

interface IRequest {}

type Config = AxiosRequestConfig & {
  body?: RequestBody;
};

class Request implements IRequest {
  get = (pathname: RequestPathname): Promise<any> => {
    return this.send(pathname, 'get', null);
  };

  post = (pathname: RequestPathname, config: Config) => {
    return this.send(pathname, 'post', config);
  };

  put = (pathname: RequestPathname, config: Config) => {
    return this.send(pathname, 'put', config);
  };

  delete = (pathname: RequestPathname, config: Config) => {
    return this.send(pathname, 'delete', config);
  };

  private send = async (
    pathname: RequestPathname,
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
