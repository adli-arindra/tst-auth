import { addDoc, getFirestore } from "firebase/firestore";
import { app } from "./config"


const db = getFirestore(app);

// const getKey = async (email: string) => {
//     try {
//         const docRef = await addDoc(db, "users")
//     }
//     catch (err) {
//         console.error(err);
//     }
// }


export default db;
