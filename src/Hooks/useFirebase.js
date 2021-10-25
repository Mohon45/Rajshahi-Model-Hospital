import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [password, setPassword] = useState({});
    const [email, setEmail] = useState({});

    const auth = getAuth();

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally(() => setIsLoading(false));
    }

    const createUserEmailAndPassword = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const loginUserEmailAndPassword = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
                clearInputs();
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(() => setIsLoading(false));

    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        password,
        setPassword,
        email,
        setEmail,
        createUserEmailAndPassword,
        loginUserEmailAndPassword
    }
}

export default useFirebase;