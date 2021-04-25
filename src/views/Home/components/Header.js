import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = ({contacts}) => {

    return (
        <header className="card-header text-center bg-warning">
            <h1 className="fa-5x font-weight-bolder">
                <span>C</span>
                <span>U</span>
                <span>K</span>
                <span>Y</span>
                <span>'</span>
                <span>S</span>
            </h1>
            <div className="row">
                <div className="col-sm-2 col-md-3"/>
                <div className="col-sm-8 col-md-6">
                    <a className="col" href={contacts[0]?.url} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fab", "whatsapp-square"]} size="2x"/>
                    </a>
                    <a className="col" href={contacts[1]?.url} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fas", "phone-square"]} size="2x"/>
                    </a>
                    <a className="col" href={contacts[2]?.url} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x"/>
                    </a>
                    <a className="col" href={contacts[3]?.url} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fab", "instagram-square"]} size="2x"/>
                    </a>
                    <a className="col" href={contacts[4]?.url} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={["fas", "map-marker-alt"]} size="2x"/>
                    </a>
                </div>
                <div className="col-sm-2 col-md-3"/>
            </div>
        </header>
    )
}

export default Header