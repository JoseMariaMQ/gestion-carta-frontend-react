import {useContext, useEffect} from "react";
import ClientPageContext from '../../context/clientPage'
import Loading from '../../components/Loading'
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"

const Home = () => {
    const {isLoading, hasError, errorMessage, getContacts, contacts, getSections, sections, getDishes, dishes} = useContext(ClientPageContext)

    useEffect( () => {
        getContacts().catch(null)
    }, [])

    useEffect(() => {
        getSections().catch(null)
    }, [])

    useEffect(() => {
        getDishes().catch(null)
    }, [])

    if (isLoading) return <Loading title='Cargando...'/>
    return (
        <>
            <Header contacts={contacts}/>
            <Section sections={sections} dishes={dishes}/>
            <Footer/>
        </>
    )
}

export default Home