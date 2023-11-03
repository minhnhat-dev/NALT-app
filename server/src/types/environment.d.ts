export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      SECRET_KEY: string;
      ACCESS_KEY: string;
      REFRESH_KEY: string;
      PORT?: number;
    }
  }
}
