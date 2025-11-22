import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "../../../library-management-api-3018-firebase-adminsdk-fbsvc-bc1d85b812.json";

// Initialize the Firebase app with admin SDK
initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

// Create Firestore instance
const db = getFirestore();

export { db };
