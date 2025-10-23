import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/Firebase.config";
export let AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);
let googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    let createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    let login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    let loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    let updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    };

    let logout = () => {
        setLoading(true);
        return signOut(auth)
    };

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    let authData = {
        user,
        loading,
        setUser,
        createUser,
        logout,
        login,
        updateUser,
        loginWithGoogle,

    };
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;