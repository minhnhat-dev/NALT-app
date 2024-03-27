import bcrypt from "bcrypt";
import constants from "../../variable/constants";
import { User } from "../users/models";
import { Category } from "../categories/models";
import { Transaction } from "../transactions/models";
import { UserRole } from "../../types/user.interface";

const canModify = ({ currentAdmin }: { currentAdmin: any }) =>
  currentAdmin && currentAdmin.role === UserRole.admin;

const canDeleteUser = ({
  currentAdmin,
  record,
}: {
  currentAdmin: any;
  record: any;
}) =>
  currentAdmin &&
  currentAdmin.role === UserRole.admin &&
  currentAdmin.id !== record.params.id;

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
      image: {
        type: "string",
        isVisible: {
          show: false,
          list: false,
          filter: false,
          edit: true,
        },
      },
      money: {
        type: "string",
        isVisible: {
          show: false,
          list: false,
          filter: false,
          edit: true,
        },
      },
    },
    actions: {
      show: { isAccessible: true },
      new: {
        isAccessible: canModify,
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
      edit: {
        isAccessible: canModify,
        before: async (request: any, response: any) => {
          if (
            request.payload.password &&
            request.payload.password !== response.record.params.password
          ) {
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
      delete: { isAccessible: canDeleteUser },
      bulkDelete: { isAccessible: canDeleteUser },
    },
  },
};

export const categories = {
  resource: Category,
  options: {
    navigation: {
      icon: "ChartNetwork",
    },
    properties: {
      image: {
        type: "string",
        isVisible: {
          show: false,
          list: false,
          filter: false,
          edit: true,
        },
      },
    },
    actions: {
      show: { isAccessible: true },
      new: {
        isAccessible: canModify,
      },
      edit: {
        isAccessible: canModify,
      },
      delete: {
        isAccessible: canModify,
      },
      bulkDelete: { isAccessible: canModify },
    },
  },
};

export const transactions = {
  resource: Transaction,
  options: {
    navigation: {
      icon: "Account",
    },
    properties: {
      description: {
        type: "string",
        isVisible: {
          show: true,
          list: false,
          filter: false,
          edit: true,
        },
      },
    },
    actions: {
      show: { isAccessible: true },
      new: {
        isAccessible: canModify,
      },
      edit: {
        isAccessible: canModify,
      },
      delete: {
        isAccessible: canModify,
      },
      bulkDelete: { isAccessible: canModify },
    },
  },
};
