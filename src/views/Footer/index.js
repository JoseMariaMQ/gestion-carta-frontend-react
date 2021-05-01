import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <>
            <footer className="card-header alert alert-light">
                <hr/>
                <div className="text-center">
                    <p className="mb-0">© CUKY'S 2021 | Developed by JoseMariaMQ</p>
                    <a className="ml-2 mr-2" href="https://github.com/JoseMariaMQ" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "github"]} color="#666"/></a>
                    <a className="ml-2 mr-2" href="https://www.linkedin.com/in/josemariamq" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]} color="#666"/></a>
                    <a className="ml-2 mr-2" href="https://twitter.com/JoseMariaMQ" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "twitter"]} color="#666"/></a>
                </div>
            </footer>
        </>
)
}

export default Footer