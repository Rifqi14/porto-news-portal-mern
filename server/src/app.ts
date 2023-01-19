import express, { Express } from 'express';

export default class App {
  public app: Express;
  private app_url: string = process.env.APP_URL ?? 'http://0.0.0.0';
  private app_port: number = parseInt(<string>process.env.APP_PORT ?? 3000);

  constructor(appInit: { plugins: any; routes: any }) {
    this.app = express();
    this.register(appInit.plugins);
    this.routes(appInit.routes);
  }

  private register = (middlewares: {
    forEach: (arg0: (middlewares: any) => void) => void;
  }): void => {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  };

  private routes = (routes: {
    forEach: (arg0: (routes: any) => void) => void;
  }): void => {
    routes.forEach((route) => {
      const router = new route();
      this.app.use(router.prefixRoute, router.routes());
    });
  };

  public listen = (): void => {
    this.app.listen(this.app_port, () => {
      console.log(`App listening on the ${this.app_url}:${this.app_port} 🌟`);
    });
  };
}
