import AdminPageContext from "./index";
import apiCall from '../../api'
import {useState} from 'react'

const Provider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [userLogin, setUserLogin] = useState([])

    const getUserLogin = async (credentials) => {
        try {
            setIsLoading(true)
            setErrorMessage('')
            setHasError(false)
            const userLogin = await apiCall({url: "http://127.0.0.1:8000/api/auth/login", method: "post", body: credentials})
            setUserLogin(userLogin)
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