import { error, log } from "console";
import Redis from "ioredis";

class Connect {
  private static instance: Connect;
  public redis: Redis;

  private constructor() {
    this.redis = new Redis({
      port: 18774,
      host: "redis-18774.c1.asia-northeast1-1.gce.cloud.redislabs.com",
      username: "default",
      password: "lD8CIY4pkERyeCHG3AVG06nBlflagYsS",
    });

    this.redis.status === "connecting"
      ? console.log("Connected to Redis")
      : console.error("Error connecting to Redis:", error);
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }
}

export const connectRedis = Connect.Instance;
