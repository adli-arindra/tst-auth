import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config";

export async function signInWithGoogle() {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}

export async function signOut() {
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}
