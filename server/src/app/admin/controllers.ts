import AdminBro from "admin-bro";
import AdminBroSequelize from "@admin-bro/sequelize";
import * as views from "./views";

AdminBro.registerAdapter(AdminBroSequelize);

const AdminBroOptions = {
  resources: [views.users, views.categories, views.transactions],
  branding: {
    companyName: "NALT",
  },
  rootPath: "/admin",
};

const adminBro = new AdminBro(AdminBroOptions);

export { adminBro };
