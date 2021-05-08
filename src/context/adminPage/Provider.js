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
            const userLogin = await apiCall({
                url: "http://127.0.0.1:8000/api/auth/login",
                method: "post",
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
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
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            if (media) {
                await apiCall({
                    url: `http://127.0.0.1:8000/api/section/${section.data.id}/section-picture`,
                    method: 'POST',
                    body: media,
                    headers: {
                        "Authorization": localStorage.getItem('jwtToken')
                    }
                })
            }
            return getSection(section.data.id)
        } catch (e) {
            console.log(e)
        }
    }

    const storeDish = async (data, media, section_id) => {
        try {
            const dish = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${section_id}/dishes`,
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            if (media) {
                await apiCall({
                    url: `http://127.0.0.1:8000/api/section/${section_id}/dishes/${dish.data.id}/dish-picture`,
                    method: 'POST',
                    body: media,
                    headers: {
                        "Authorization": localStorage.getItem('jwtToken')
                    }
                })
            }
            console.log(dish)
        } catch (e) {
            console.log(e)
        }
    }

    const storeDessert = async (data, media, section_id) => {
        try {
            const dessert = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${section_id}/desserts`,
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            if (media) {
                await apiCall({
                    url: `http://127.0.0.1:8000/api/section/${section_id}/desserts/${dessert.data.id}/dessert-picture`,
                    method: 'POST',
                    body: media,
                    headers: {
                        "Authorization": localStorage.getItem('jwtToken')
                    }
                })
            }
            console.log(dessert)
        } catch (e) {
            console.log(e)
        }
    }

    const storeDrink = async (data, media, section_id) => {
        console.log(data)
        try {
            const drink = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${section_id}/drinks`,
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            if (media) {
                await apiCall({
                    url: `http://127.0.0.1:8000/api/section/${section_id}/drinks/${drink.data.id}/drink-picture`,
                    method: 'POST',
                    body: media,
                    headers: {
                        "Authorization": localStorage.getItem('jwtToken')
                    }
                })
            }
            console.log(drink)
        } catch (e) {
            console.log(e)
        }
    }

    const getSection = async (id) => {
        try {
            return await apiCall({
                url: `http://127.0.0.1:8000/api/section/${id}`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const updateSection = async (data, media) => {
        try {
            const section = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${data.id}`,
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            if (media) {
                await apiCall({
                    url: `http://127.0.0.1:8000/api/section/${section.data.id}/section-picture`,
                    method: 'POST',
                    body: media,
                    headers: {
                        "Authorization": localStorage.getItem('jwtToken')
                    }
                })
            }
            return getSection(section.data.id)
        } catch (e) {
            console.log(e)
        }
    }

    const deleteSection = async (id) => {
        try {
            const section = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${id}`,
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            return await section
        } catch (e) {
            console.log(e)
        }
    }

    const updateDish = async (data, media, id) => {
        try {
            const dish = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${data.section_id}/dishes/${id}`,
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            if (media.values().next().value !== 'undefined') {
                await apiCall({
                    url: `http://127.0.0.1:8000/api/section/${data.section_id}/dishes/${id}/dish-picture`,
                    method: 'POST',
                    body: media,
                    headers: {
                        "Authorization": localStorage.getItem('jwtToken')
                    }
                })
            }
            return await dish
        } catch (e) {
            console.log(e)
        }
    }

    const deleteDish = async (section_id, id) => {
        try {
            const section = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${section_id}/dishes/${id}`,
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            console.log(section)
        } catch (e) {
            console.log(e)
        }
    }

    const updateDessert = async (data, media, id) => {
        try {
            const dessert = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${data.section_id}/desserts/${id}`,
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            if (media.values().next().value !== 'undefined') {
                await apiCall({
                    url: `http://127.0.0.1:8000/api/section/${data.section_id}/desserts/${id}/dessert-picture`,
                    method: 'POST',
                    body: media,
                    headers: {
                        "Authorization": localStorage.getItem('jwtToken')
                    }
                })
            }
            return await dessert
        } catch (e) {
            console.log(e)
        }
    }

    const deleteDessert = async (section_id, id) => {
        try {
            const dessert = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${section_id}/desserts/${id}`,
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            console.log(dessert)
        } catch (e) {
            console.log(e)
        }
    }

    const updateDrink = async (data, media, id) => {
        try {
            const drink = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${data.section_id}/drinks/${id}`,
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            if (media.values().next().value !== 'undefined') {
                await apiCall({
                    url: `http://127.0.0.1:8000/api/section/${data.section_id}/drinks/${id}/drink-picture`,
                    method: 'POST',
                    body: media,
                    headers: {
                        "Authorization": localStorage.getItem('jwtToken')
                    }
                })
            }
            return await drink
        } catch (e) {
            console.log(e)
        }
    }

    const deleteDrink = async (section_id, id) => {
        try {
            const drink = await apiCall({
                url: `http://127.0.0.1:8000/api/section/${section_id}/drinks/${id}`,
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('jwtToken')
                }
            })
            console.log(drink)
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
            storeDish,
            storeDessert,
            storeDrink,
            getSectionForm: getSection,
            updateSection,
            deleteSection,
            updateDish,
            deleteDish,
            updateDessert,
            deleteDessert,
            updateDrink,
            deleteDrink
        }}>
            {children}
        </AdminPageContext.Provider>
    )
}

export default Provider