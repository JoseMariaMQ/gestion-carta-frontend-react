import ClientPageContext from './index'
import apiCall from '../../api'
import {useState} from 'react'

const Provider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [contacts, setContacts] = useState([])
    const [sections, setSections] = useState([])
    const [dishes, setDishes] = useState([])

    const getContacts = async () => {
        try {
            setIsLoading(true)
            setErrorMessage('')
            setHasError(false)
            const contacts = await apiCall({url: "http://127.0.0.1:8000/api/contact"})
            setContacts(contacts)
        } catch (e) {
            setContacts([])
            setErrorMessage('Algo muy malo')
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
    }

    const getSections = async () => {
        try {
            setIsLoading(true)
            setErrorMessage('')
            setHasError(false)
            const sections = await apiCall({url: "http://127.0.0.1:8000/api/section"})
            setSections(sections)
        } catch (e) {
            setSections([])
            setErrorMessage('Algo muy malo')
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
    }

    const getDishes = async () => {
        try {
            setIsLoading(true)
            setErrorMessage('')
            setHasError(false)
            const dishes = await apiCall({url: "http://127.0.0.1:8000/api/menu/dishes"})
            setDishes(dishes)
        } catch (e) {
            setDishes([])
            setErrorMessage('Algo muy malo')
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
            getSections,
            sections,
            getDishes,
            dishes
        }}>
            {children}
        </ClientPageContext.Provider>
    )
}

export default Provider