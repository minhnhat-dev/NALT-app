import { CronJob } from "cron";
import { connectRedis } from "../database/Redis";

const redis = connectRedis.redis;

export const job = CronJob.from({
  cronTime: "0 * * * * *",
  onTick: () => {
    try {
      const stream = redis.scanStream();
      stream.on("data", async (resultKeys) => {
        for (let i = 0, l = resultKeys.length; i < l; i++) {
          const exp = await redis.get(resultKeys[i]);
          const now = Date.now();
          exp && parseInt(exp) - now < 0 && (await redis.del(resultKeys[i]));
        }
      });
    } catch (error) {
      throw error;
    }
  },
  timeZone: "Asia/Ho_Chi_Minh",
});
