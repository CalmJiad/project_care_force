import initAuthentication from "../Firebase/firebase.init";
import { 
    GoogleAuthProvider, 
    getAuth, 
    signInWithPopup, 
    GithubAuthProvider, 
    signOut, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged 
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const googleSignInHandler = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
        setUser (result.user);
        setError('');
    })
    .catch(error =>{
        setError(error.message)
    })
    }

    const githubSignInHandler = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
        setUser (result.user);
        setError('');
    })
    .catch(error =>{
        setError(error.message)
    })
    }

    const handleSignOut = () => {
    signOut(auth)
    .then(() => {
        setUser({});
    })
    }

    const emailSignInHandler = (e) => {
        signInWithEmailAndPassword(auth, userEmail, userPass)
        .then((result) => {
            console.log(result.user); 
            setUser(result.user)
            setError('')
         })
        .catch((error) => {
             setError(error.message);
        })
        e.preventDefault();
    }

    const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, userEmail, userPass)
    .then(result => {
        const user = result.user;
        setUser(user);
    })
    .catch(error =>{
        setError(error.message)
    })
    e.preventDefault();
    }

    const handleEmail = (e) => {
    setUserEmail(e.target.value);
    }
    const handlePassword = (e) => {
    setUserPass(e.target.value);
    }

    const toggler = (e) => {
        setIsLogin(e.target.checked);
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);      
         }
      });
    }, [])
  
    return {
        githubSignInHandler,
        googleSignInHandler,
        handleSignOut,
        handleSubmit,
        handleEmail,
        handlePassword,
        emailSignInHandler,
        user,
        toggler,
        error,
        isLogin
    }
}

export default useFirebase;