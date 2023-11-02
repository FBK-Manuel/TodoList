//utils/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwrite/appwriteConfig";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        setLoading(false)
    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true)
        try {
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )
            console.log('SESSION:', response)
        } catch (err) {
            console.error(err)
        }
    }

    const logoutUser = async () => { }

    const registerUser = async (userInfo) => { }

    const checkUserStatus = async () => { }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

//Custom Hook
export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext;