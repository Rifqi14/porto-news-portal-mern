import * as dotenv from 'dotenv';
import App from './app';
import { isDev } from './libs/env.lib';
import CorsLib from './plugins/cors.plugin';
import Logger from './plugins/log.plugin';
import HealthCheckRoutes from './routes/ping.routes';

isDev() && dotenv.config();

const boot = new App({
  plugins: [Logger.logging(), new CorsLib().build()],
  routes: [HealthCheckRoutes],
});

boot.listen();
