import AdminBroExpress from "@admin-bro/express";
import { adminBro } from "./controllers";

export const routerAdmin = AdminBroExpress.buildRouter(adminBro);
export const rootPath = adminBro.options.rootPath;
