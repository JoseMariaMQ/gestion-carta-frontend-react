import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = ({contacts}) => {

    return (
        <header className="card-header text-center alert alert-danger">
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