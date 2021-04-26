import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Section = ({sections}) => {

    return (
        <section className="container">
            {
                sections?.map((section, index) => (
                    <div key={index} className="container rounded-top mt-2 mb-2">
                        <div className="row bg-primary p-0">
                            <div className="col-9 col-sm-10 p-0">
                                <h3 className="ml-2">{section.name}</h3>
                            </div>
                            <div className="col-3 col-sm-2 p-0">
                                {section.picture ? <img className="img-fluid img-section float-right" src={section.picture.url} alt="Section"/> : ""}
                            </div>
                        </div>
                            {
                                section.dishes?.map((dish, index) => (
                                    <div className="row border-bottom bg-light p-0" key={index}>
                                        <span className="col-2 p-0">{dish.picture ? <img className="img-thumbnail img-children" src={dish.picture.url} alt="Dish"/> : ""}</span>
                                        <span className="col-8 p-0 d-flex align-items-center">{dish.name}</span>
                                        <span className="col-1 p-0 d-flex justify-content-end align-items-center">{dish.price}€</span>
                                        <span className="col-1 p-0 d-flex justify-content-end align-items-center pr-2"><FontAwesomeIcon icon={["fas", "chevron-right"]}/></span>
                                    </div>
                                ))
                            }
                            {
                                section.desserts?.map((dessert, index) => (
                                    <div className="row border-bottom bg-light p-0" key={index}>
                                        <span className="col-2 p-0">{dessert.picture ? <img className="img-thumbnail img-children" src={dessert.picture.url} alt="Dish"/> : ""}</span>
                                        <span className="col-8 p-0 d-flex align-items-center">{dessert.name}</span>
                                        <span className="col-1 p-0 d-flex justify-content-end align-items-center">{dessert.price}€</span>
                                        <span className="col-1 p-0 d-flex justify-content-end align-items-center pr-2"><FontAwesomeIcon icon={["fas", "chevron-right"]}/></span>
                                    </div>
                                ))
                            }
                            {
                                section.drinks?.map((drink, index) => (
                                    <div className="row border-bottom bg-light p-0" key={index}>
                                        <span className="col-2 p-0">{drink.picture ? <img className="img-thumbnail img-children" src={drink.picture.url} alt="Dish"/> : ""}</span>
                                        <span className="col-8 p-0 d-flex align-items-center">{drink.name}</span>
                                        <span className="col-1 p-0 d-flex justify-content-end align-items-center">{drink.price}€</span>
                                        <span className="col-1 p-0 d-flex justify-content-end align-items-center pr-2"><FontAwesomeIcon icon={["fas", "chevron-right"]}/></span>
                                    </div>
                                ))
                            }
                    </div>
                ))
            }
        </section>
    )
}

export default Section