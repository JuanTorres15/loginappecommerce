import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwBAt_aPSLmZCp4aiTKqKjbxE8yJrMbYU",
  authDomain: "loginappecommerce.firebaseapp.com",
  projectId: "loginappecommerce",
  storageBucket: "loginappecommerce.appspot.com",
  messagingSenderId: "297217411753",
  appId: "1:297217411753:web:93ae0db08c72f2469bf7b8",
  measurementId: "G-1BR3BE4BMS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getProductById = async (productId) => {
  try {
    const productRef = doc(collection(db, "productos"), productId);
    const productSnapshot = await getDoc(productRef);

    if (productSnapshot.exists()) {
      return productSnapshot.data();
    } else {
      return null;
    }
  } catch (error) {
    // No hay console.error aquí
    return null;
  }
};

export default getProductById;

export { db };