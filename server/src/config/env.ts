export default {
  databaseUrl: process.env.DATABASE_URL!,
  secretKey: process.env.SECRET_KEY!,
  accesKey: process.env.ACCESS_KEY!,
  refeshKey: process.env.REFRESH_KEY!,
  port: process.env.PORT || 8000,
  portRedis: process.env.PORT_REDIS ? parseInt(process.env.PORT_REDIS) : 18774,
  hostRedis: process.env.HOST_REDIS!,
  usernameRedis: process.env.USERNAME_REDIS || "default",
  passwordRedis: process.env.PASSWORD_REDIS!,
  storageBucket: process.env.STORAGE_BUCKET!
};
