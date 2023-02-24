import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { auth, db } from "../../firebaseConfig"
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'


export async function SignInWithGoogleFunction() {
    const googleProvider = new GoogleAuthProvider()

    try {
        const res = await signInWithPopup(auth, googleProvider)
        const userRef = doc(db, 'users', res?.user?.uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) console.log("User Exits")
        else if (!userDoc.exists()) {
            await setDoc(doc(db, 'users', res?.user?.uid), {
                userName: res?.user?.displayName,
                res: res?.user?.photoURL,
                userEmail: res?.user?.email,
                userID: res?.user?.uid,

                completedLessonsID: [],
                userCoins: 100,
                userProfileBanner: "",

                appName: "Bharat Shakti Verse"
            })
        }

    } catch (error) {
        alert(error)
    }

}

export async function signOutUser() {
    signOut(auth)
}

export function onAuthChanged(callback: (user: Object | null) => void) {
    onAuthStateChanged(auth, callback)
}