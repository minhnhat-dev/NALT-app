import AdminBro, { AdminBroOptions } from "admin-bro";
import AdminBroSequelize from "@admin-bro/sequelize";
import * as views from "./views";
import bcrypt from "bcrypt";
import { User } from "../users/models";
import { AuthenticationOptions } from "@admin-bro/express";

AdminBro.registerAdapter(AdminBroSequelize);

const adminBroOptions: AdminBroOptions = {
  resources: [views.users, views.categories, views.transactions],
  branding: {
    companyName: "NALT",
  },
  rootPath: "/admin",
};

export const adminBro = new AdminBro(adminBroOptions);

export const authenticationOptions: AuthenticationOptions = {
  cookieName: "adminBro",
  cookiePassword: "nalt",
  authenticate: async (email: string, password: string) => {
    const user = await User.findOne({ where: { email: email } });
    if (user && user.dataValues.role !== "restrict") {
      const matched = await bcrypt.compare(password, user.dataValues.password);
      if (matched) {
        return user;
      }
    }
    return false;
  },
};
