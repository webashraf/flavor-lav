import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";


export const ContextProvider = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register with email and password //

    const registerEmailAndPass = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // Sign Up with google //
    const signUpWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Sign Up with GitHub //
    const signUpWithGitHub = () =>{
       return signInWithPopup(auth, gitHubProvider)
    }


    // Sign In user //
    const signInUserWithEmailPass = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    } 

    // Sign Out //
    const signOutUser = () => {
        return signOut(auth);
    }

    // Observer //
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe;
        }
    },[])








    const authInfo = {
        user,
        loading,
        signOutUser,
        registerEmailAndPass,
        signUpWithGoogle,
        signInUserWithEmailPass,
        signUpWithGitHub
    }

    return (
        <ContextProvider.Provider  value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;