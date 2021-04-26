import {useContext, useEffect} from "react";
import ClientPageContext from '../../context/clientPage'
import Loading from '../../components/Loading'
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"

const Home = () => {
    const {isLoading, hasError, errorMessage, getContacts, contacts, getSections, sections} = useContext(ClientPageContext)

    useEffect( () => {
        getContacts().catch(null)
    }, [])

    useEffect(() => {
        getSections().catch(null)
    }, [])

    if (isLoading) return <Loading title='Cargando...'/>
    return (
        <>
            <Header contacts={contacts}/>
            <Section sections={sections}/>
            <Footer/>
        </>
    )
}

export default Home