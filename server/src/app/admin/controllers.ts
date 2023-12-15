import AdminBro from "admin-bro";
import AdminBroSequelize from "@admin-bro/sequelize";
import { User } from "../users/models";
import { Category } from "../categories/models";
import { Transaction } from "../transactions/models";

AdminBro.registerAdapter(AdminBroSequelize);

const AdminBroOptions = {
  resources: [
    {
      resource: User,
      options: {
        navigation: {
          icon: "User",
        },
        properties: {},
      },
    },
    {
      resource: Category,
      options: {
        navigation: {
          icon: "ChartNetwork",
        },
      },
    },
    {
      resource: Transaction,
      options: {
        navigation: {
          icon: "Account",
        },
      },
    },
  ],
  branding: {
    companyName: "NALT",
  },
  rootPath: "/admin",
};

const adminBro = new AdminBro(AdminBroOptions);

export { adminBro };
