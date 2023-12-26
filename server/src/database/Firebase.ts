import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import serviceAccount from "../config/serviceAccount.json";
import env from "../config/env";

class Connect {
  private static instance: Connect;

  private constructor() {
    try {
      initializeApp({
        credential: cert(serviceAccount as ServiceAccount),
        storageBucket: env.storageBucket,
      });
      console.log("Connected to Firebase");
    } catch (error) {
      console.log({ error });
    }
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }
}

export const connectFirebase = Connect.Instance;
