import AdminBroExpress from "@admin-bro/express";
import { adminBro, authenticationOptions } from "./controllers";

export const routerAdmin = AdminBroExpress.buildAuthenticatedRouter(
  adminBro,
  authenticationOptions,
  null,
  {
    resave: true,
    saveUninitialized: true,
  }
);

export const rootPath = adminBro.options.rootPath;
