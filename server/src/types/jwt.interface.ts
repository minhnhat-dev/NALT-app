export interface JwtData {
  id: string;
  name: string;
  email: string;
  role: string;
  jti: string;
}

export interface JwtDecodedData extends JwtData {
  iat: number;
  exp: number;
}
