import cors, { CorsOptions, CorsRequest } from 'cors';

export default class CorsLib {
  private config!: CorsOptions;

  public origin = (
    origin: boolean | string | RegExp | (boolean | string | RegExp)[] = '*',
  ): this => {
    this.config.origin = origin;
    return this;
  };

  public method = (
    method: string | string[] | undefined = 'GET,HEAD,PUT,PATCH,POST,DELETE',
  ): this => {
    this.config.methods = method;
    return this;
  };

  public allowedHeaders = (headers?: string | string[] | undefined): this => {
    this.config.allowedHeaders = headers;
    return this;
  };

  public exposedHeaders = (headers?: string | string[] | undefined): this => {
    this.config.exposedHeaders = headers;
    return this;
  };

  public credentials = (credential?: boolean | undefined): this => {
    this.config.credentials = credential;
    return this;
  };

  public build = (): ((
    req: CorsRequest,
    res: {
      statusCode?: number | undefined;
      setHeader(key: string, value: string): any;
      end(): any;
    },
    next: (err?: any) => any,
  ) => void) => {
    return cors(this.config);
  };
}
