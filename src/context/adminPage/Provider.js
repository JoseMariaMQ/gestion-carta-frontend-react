import AdminPageContext from "./index";
import apiCall from '../../api'
import {useState} from 'react'

const Provider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [userLogin, setUserLogin] = useState([])

    const getUserLogin = async (credentials) => {
        credentials.remember_token = true
        try {
            setIsLoading(true)
            setErrorMessage('')
            setHasError(false)
            const userLogin = await apiCall({url: "http://127.0.0.1:8000/api/auth/login", method: "post", body: JSON.stringify(credentials)})
            setUserLogin(userLogin)

            if (userLogin.data !== "Unauthorized") {
                const {token_type, access_token} = userLogin.auth
                localStorage.setItem('jwtToken', `${token_type} ${access_token}`)
                console.log(userLogin)
                return true
            } else {
                console.log("Unauthorized")
            }
        } catch (e) {
            setUserLogin([])
            setErrorMessage('API connection error')
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AdminPageContext.Provider value={{
            isLoading,
            errorMessage,
            hasError,
            getUserLogin,
            userLogin
        }}>
            {children}
        </AdminPageContext.Provider>
    )
}

export default Provider