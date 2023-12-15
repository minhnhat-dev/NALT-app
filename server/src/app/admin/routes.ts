import AdminBroExpress from "@admin-bro/express";
import { adminBro } from "./controllers";
import bcrypt from "bcrypt";
import { User } from "../users/models";

export const routerAdmin = AdminBroExpress.buildAuthenticatedRouter(
  adminBro,
  {
    cookieName: "adminBro",
    cookiePassword: "nalt",
    authenticate: async (email, password) => {
      const user = await User.findOne({ where: { email: email } });
      if (user) {
        const matched = await bcrypt.compare(
          password,
          user.dataValues.password
        );
        if (matched) {
          return user;
        }
      }
      return false;
    },
  },
  null,
  {
    resave: true,
    saveUninitialized: true,
  }
);

// export const routerAdmin = AdminBroExpress.buildRouter(adminBro);

export const rootPath = adminBro.options.rootPath;
