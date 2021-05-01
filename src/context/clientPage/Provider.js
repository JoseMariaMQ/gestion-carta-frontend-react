import ClientPageContext from './index'
import apiCall from '../../api'
import {useState} from 'react'

const Provider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [contacts, setContacts] = useState([])
    const [menu, setMenu] = useState([])

    const getContacts = async () => {
        try {
            setIsLoading(true)
            setErrorMessage('')
            setHasError(false)
            const contacts = await apiCall({url: "http://127.0.0.1:8000/api/contact"})
            setContacts(contacts)
        } catch (e) {
            setContacts([])
            setErrorMessage('API connection error')
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
    }

    const getMenu = async () => {
        try {
            setIsLoading(true)
            setErrorMessage('')
            setHasError(false)
            const sections = await apiCall({url: "http://127.0.0.1:8000/api/menu"})
            setMenu(sections)
        } catch (e) {
            setMenu([])
            setErrorMessage('API connection error')
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return(
        <ClientPageContext.Provider value={{
            isLoading,
            errorMessage,
            hasError,
            getContacts,
            contacts,
            getMenu,
            menu
        }}>
            {children}
        </ClientPageContext.Provider>
    )
}

export default Provider