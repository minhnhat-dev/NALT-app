import { JwtData, JwtDecodedData } from "./jwt.interface";

declare global {
  namespace Express {
    interface Request {
      jwtData: JwtData;
      JwtDecodedData: JwtDecodedData;
    }
  }
}
