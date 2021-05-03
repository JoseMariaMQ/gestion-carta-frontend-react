import Header from "../Header"
import Section from "./components/Section";
import {useContext, useEffect} from "react";
import ClientPageContext from "../../context/clientPage";
import Footer from "../Footer";
import Loading from "../../components/Loading";

const Admin = () => {
    const {isLoading, getContacts, contacts, getMenu, menu} = useContext(ClientPageContext)

    useEffect( () => {
        getContacts().catch(null)
    }, [])

    useEffect(() => {
        getMenu().catch(null)
    }, [])

    if (isLoading) return <Loading/>
    return (
        <>
            <Header contacts={contacts}/>
            <Section sections={menu}/>
            <Footer/>
        </>
    )
}

export default Admin