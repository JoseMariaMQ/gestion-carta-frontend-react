import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

const Section = ({sections}) => {
    const [show, setShow] = useState([false, null])

    return (
        <section className="container">
            {
                sections?.map((section, index) => (
                    <div key={index} className="container rounded-top mt-2 mb-2">
                        <div className="row bg-primary p-0">
                            <div className="col-9 col-sm-10 p-0 d-flex align-items-center">
                                <h3 className="ml-2">{section.name}</h3>
                            </div>
                            <div className="col-3 col-sm-2 p-0">
                                {section.picture ? <img className="img-fluid img-section float-right" src={section.picture.url} alt="Section"/> : ""}
                            </div>
                        </div>
                            {
                                section.dishes?.map((dish) => (
                                    <div key={dish.id}>
                                        <div className="row border-bottom bg-light p-0">
                                            <span className="col-2 p-0">{dish.picture ? <img className="img-thumbnail img-children" src={dish.picture.url} alt="Dish"/> : ""}</span>
                                            <span className="col-8 p-0 d-flex align-items-center">{dish.name}</span>
                                            <span className="col-1 p-0 d-flex justify-content-end align-items-center">{dish.price}€</span>
                                            <button type="button" onClick={() => {setShow([!show[0], dish.id])}} className="col-1 border-0 bg-light p-0 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={show[0] && show[1] === dish.id ? ["fas", "chevron-down"] : ["fas", "chevron-right"]}/></button>
                                        </div>
                                        {
                                            show[0] && show[1] === dish.id ? (
                                                    <div>
                                                        <div className="d-flex justify-content-center">
                                                            <h5 className="mb-0">Alérgenos:</h5>
                                                        </div>
                                                        <div className="d-flex justify-content-center">
                                                        {
                                                            dish.allergens?.map((allergen) => (
                                                                <span className="pl-2 pr-2"><img src={allergen.url} alt={allergen.name}/></span>
                                                            ))
                                                        }
                                                        </div>
                                                        {
                                                            dish.menu ? (
                                                                <div>
                                                                    <div className="d-flex justify-content-center">
                                                                        <h5 className="mb-0">Con menú:</h5>
                                                                    </div>
                                                                    <div className="">
                                                                        <p className="text-center mb-0">{dish.name} + patatas + bebida</p>
                                                                        <p className="text-center mb-0">{dish.price_menu}€</p>
                                                                    </div>
                                                                    <div className="d-flex justify-content-center">
                                                                        <img className="img-fluid img-dish" src={dish.picture.url} alt={dish.name}/>
                                                                    </div>
                                                                </div>
                                                            ) : ("")
                                                        }
                                                    </div>
                                                    ) :
                                                    (
                                                        ""
                                                    )
                                        }
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