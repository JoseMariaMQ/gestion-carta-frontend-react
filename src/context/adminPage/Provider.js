import AdminPageContext from "./index";
import apiCall from '../../api'
import {useState} from 'react'

const Provider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [userLogin, setUserLogin] = useState([])
    const [sectionForm, setSectionForm] = useState([])

    const getUserLogin = async (credentials) => {
        credentials.remember_token = true
        try {
            setIsLoading(true)
            setErrorMessage('')
            setHasError(false)
            const userLogin = await apiCall({url: "http://127.0.0.1:8000/api/auth/login", method: "post", body: JSON.stringify(credentials)})
            setUserLogin(userLogin)

            if (userLogin.data !== "Unauthorized") {
                const {token_type, access_token, expires_at} = userLogin.auth
                localStorage.setItem('jwtToken', `${token_type} ${access_token}`)
                localStorage.setItem('tokenExpires', expires_at)
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

    const storeSection = async (data, media) => {
        try {
            const section = await apiCall( {
                url: 'http://127.0.0.1:8000/api/section',
                method: 'POST',
                body: JSON.stringify(data)
            })
            const picture = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${section.data.id}/section-picture`,
                method: 'POST',
                body: media
            })
            console.log(section, picture)
        } catch (e) {
            console.log(e)
        }
    }

    const getSectionForm = async (id) => {
        try {
            const section = await apiCall({url: `http://127.0.0.1:8000/api/section/${id}`})
            setSectionForm(section)
        } catch (e) {
            console.log(e)
        }
    }

    const updateSection = async (data) => {
        try {
            const section = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${data.id}`,
                method: 'PUT',
                body: JSON.stringify(data)
            })
            console.log(section)
        } catch (e) {
            console.log(e)
        }
    }

    const deleteSection = async (id) => {
        try {
            const section = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${id}`,
                method: 'DELETE'
            })
            console.log(section)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <AdminPageContext.Provider value={{
            isLoading,
            errorMessage,
            hasError,
            getUserLogin,
            userLogin,
            sectionForm,
            storeSection,
            getSectionForm,
            updateSection,
            deleteSection
        }}>
            {children}
        </AdminPageContext.Provider>
    )
}

export default Provider