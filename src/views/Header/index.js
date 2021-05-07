import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Header = ({contacts}) => {
    const isAuthenticated = localStorage.getItem('jwtToken')
    const tokenExpires = new Date(localStorage.getItem('tokenExpires')).getTime() > Date.now()
    const history = useHistory()

    const loginLogout = () => {
        if (!isAuthenticated || !tokenExpires) {
            history.push('/login')
        }
        if (isAuthenticated && tokenExpires) {
            localStorage.removeItem('jwtToken')
            localStorage.removeItem('tokenExpires')
            window.location.reload()
        }
    }

    const admin = () => {
        history.push('/admin')
    }

    return (
        <header className="card-header text-center alert alert-danger">
            <div className="d-flex justify-content-end">
                {isAuthenticated && tokenExpires && window.location.pathname !== '/admin' ? <button onClick={admin} className="btn"><FontAwesomeIcon icon={["fas", "user"]} color="blue" size="2x"/></button> : ''}
                <button onClick={loginLogout} className="btn">{!isAuthenticated || !tokenExpires ? <FontAwesomeIcon icon={["fas", "sign-in-alt"]} color="green" size="2x"/> : <FontAwesomeIcon icon={["fas", "sign-out-alt"]} color="red" size="2x"/>}</button>
            </div>
            <h1 className="fa-5x font-weight-bolder">
                <span>C</span>
                <span>U</span>
                <span>K</span>
                <span>Y</span>
                <span>'</span>
                <span>S</span>
            </h1>
            {
                contacts?.map((contact) => (
                    !contact.hidden && contact.name.toLowerCase() === 'whatsapp' ? (
                        <a key={contact.id} className="col" href={contact.url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "whatsapp-square"]} size="2x"/>
                        </a>
                    ) : !contact.hidden && contact.name.toLowerCase() === 'phone' ? (
                        <a key={contact.id} className="col" href={contact.url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={["fas", "phone-square"]} size="2x"/>
                        </a>
                    ) : !contact.hidden && contact.name.toLowerCase() === 'facebook' ? (
                        <a key={contact.id} className="col" href={contact.url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x"/>
                        </a>
                    ) : !contact.hidden && contact.name.toLowerCase() === 'instagram' ? (
                        <a key={contact.id} className="col" href={contact.url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "instagram-square"]} size="2x"/>
                        </a>
                    ) : !contact.hidden && contact.name.toLowerCase() === 'twitter' ? (
                        <a key={contact.id} className="col" href={contact.url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x"/>
                        </a>
                    ) : !contact.hidden && contact.name.toLowerCase() === 'google maps' ? (
                        <a key={contact.id} className="col" href={contact.url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={["fas", "map-marker-alt"]} size="2x"/>
                        </a>
                    ) : ('')
                ))
            }
        </header>
    )
}

export default Header