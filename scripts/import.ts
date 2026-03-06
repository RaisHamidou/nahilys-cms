import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseConfig } from "../src/firebase_config";
import products from "../src/data/products.json"; // ton fichier JSON

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function importProducts() {
  for (const product of products) {
    await setDoc(doc(db, "products", product.id), product);
    console.log(`✅ Importé : ${product.name}`);
  }
  console.log("🎉 Import terminé !");
}

importProducts();
