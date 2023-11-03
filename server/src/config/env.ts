export default {
  databaseUrl: process.env.DATABASE_URL!,
  secretKey: process.env.SECRET_KEY!,
  accesKey: process.env.ACCESS_KEY!,
  refeshKey: process.env.REFRESH_KEY!,
  port: process.env.PORT || 5000,
};
