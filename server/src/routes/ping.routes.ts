import express, { Router, Response, Request } from 'express';

export default class HealthCheckRoutes {
  public prefixRoute: string = '/ping';
  public route: Router;

  constructor(router: Router) {
    this.route = express.Router();
  }

  public routes = (): Router => {
    this.route.get('', this.ping);

    return this.route;
  };

  private ping = (req: Request, res: Response): Response => {
    return res.send('Pong!');
  };
}
