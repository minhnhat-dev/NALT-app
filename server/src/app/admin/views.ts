import bcrypt from "bcrypt";
import constants from "../../variable/constants";
import { User } from "../users/models";
import { Category } from "../categories/models";
import { Transaction } from "../transactions/models";

const canModifyUsers = ({ currentAdmin }: { currentAdmin: any }) =>
  currentAdmin && currentAdmin.role === "admin";

export const users = {
  resource: User,
  options: {
    navigation: {
      icon: "User",
    },
    properties: {
      password: {
        type: "string",
        isVisible: {
          show: false,
          list: false,
          filter: false,
          edit: true,
        },
      },
      role: {
        type: "string",
        isVisible: {
          show: true,
          list: true,
          filter: true,
          edit: true,
        },
        actions: {
          edit: false,
        }
       
      },
    },
    actions: {
      new: {
        isAccessible: canModifyUsers,
        before: async (request: any) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              password: await bcrypt.hash(
                request.payload.password,
                constants.SALT_ROUNDS
              ),
            };
          }
          return request;
        },
      },
      show: { isAccessible: true },
      edit: {
        isAccessible: canModifyUsers,
        before: async (request: any) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              password: await bcrypt.hash(
                request.payload.password,
                constants.SALT_ROUNDS
              ),
            };
          }
          return request;
        },
      },
      delete: { isAccessible: canModifyUsers },
    },
  },
};

export const categories = {
  resource: Category,
  options: {
    navigation: {
      icon: "ChartNetwork",
    },
  },
};

export const transactions = {
  resource: Transaction,
  options: {
    navigation: {
      icon: "Account",
    },
  },
};
