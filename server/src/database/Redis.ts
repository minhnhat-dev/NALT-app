import Redis from "ioredis";
import env from "../config/env";

class Connect {
  private static instance: Connect;
  public redis: Redis;

  private constructor() {
    this.redis = new Redis({
      port: env.portRedis,
      host: env.hostRedis,
      username: env.usernameRedis,
      password: env.passwordRedis,
    });

    this.redis.status === "connecting"
      ? console.log("Connected to Redis")
      : console.error("Error connecting to Redis!");
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }
}

export const connectRedis = Connect.Instance;
