"use client"
import { auth, db } from '@/firebaseConfig'
import { IUserDetails } from '@/interfaces/userInterface'
import { onAuthChanged } from '@/service/Auth/AuthService'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { createContext, ReactNode, useState, useEffect } from 'react'

export interface IAppContextType {
    userDetails: object | null
    setuserDetails: React.Dispatch<React.SetStateAction<object | null>>
}

const defaultState = {
    userDetails: null,
    setuserDetails: () => { }
} as IAppContextType


export const AppContext = createContext(defaultState)



const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [userDetails, setuserDetails] = useState<object | null>(null)

    useEffect(() => {
        console.log(`useEffect hook running from AppContext.tsx`)
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            // console.log("Auth", currentuser);
            setuserDetails(currentuser)
        });

        return () => {
            unsubscribe();
        };
    }, []);



    return (
        <AppContext.Provider
            value={{
                userDetails,
                setuserDetails
            }}
        >
            {children}
        </AppContext.Provider>

    )
}


export default AppContextProvider