import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(null);
//    create user 
const Register = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

// login user 
const LoginUser = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

// current user 
// onAuthStateChanged()






    const userInfo = {
        Register,
        LoginUser,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;