import env from "../config/env";

export function checkEnv() {
  Object.entries(env).forEach(([key, value]) => {
    if (value === undefined) {
      throw new Error(`Env ${key}:${value} cannot be undefined`);
    }
  });
}
