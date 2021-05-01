import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

const DishShow = ({id, name, price, units, extra, menu, price_menu, ingredients, picture, allergens}) => {
    const [show, setShow] = useState([false, null])

    return (
        <>
            <div onClick={() => {setShow([!show[0], id])}} className="row alert alert-danger p-0 mb-0">
                <span className="col-2 col-sm-1 p-0">{picture ? <img className="img-thumbnail img-children" src={picture.url} alt="Dish"/> : ""}</span>
                <span className="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0 d-flex align-items-center h6">{name}</span>
                <span className="col-1 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{price}€</span>
                <span className="col-1 col-sm-1 border-0 alert-danger p-0 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={show[0] && show[1] === id ? ["fas", "chevron-down"] : ["fas", "chevron-right"]}/>
                </span>
            </div>
            {
                show[0] && show[1] === id ? (
                        <div className="alert alert-light">
                            {
                                units ? (
                                    <>
                                        <div className="d-flex justify-content-center">
                                            <h5>{units} unidades</h5>
                                        </div>
                                        <hr className="mt-1 mb-1"/>
                                    </>
                                ) : ("")
                            }
                            <div className="d-flex justify-content-center">
                                <h5>Alérgenos:</h5>
                            </div>
                            <div className="d-flex justify-content-center mb-2">
                                {
                                    allergens?.map((allergen) => (
                                        <span className="pl-2 pr-2" key={allergen.id}>
                                            <img className="img-allergens" src={allergen.url} alt={allergen.name}/>
                                        </span>
                                    ))
                                }
                            </div>
                            <hr className="mt-1 mb-1"/>
                            {
                                ingredients ? (
                                    <>
                                        <div className="d-flex justify-content-center">
                                            <h5 className="mt-2">Ingredientes:</h5>
                                        </div>
                                        <div className="text-center">
                                            <p className="mb-0">{ingredients}</p>
                                        </div>
                                        <hr className="mt-1 mb-1"/>
                                    </>
                                ) : ('')
                            }
                            {
                                menu ? (
                                    <>
                                        <div className="d-flex justify-content-center">
                                            <h5 className="mt-2">Con menú:</h5>
                                        </div>
                                        <div className="text-center">
                                            <p className="mb-0">+ Patatas + Bebida</p>
                                            <p className="mb-0">{price_menu}€</p>
                                        </div>
                                        <hr className="mt-1 mb-1"/>
                                    </>
                                ) : ("")
                            }
                            {
                                picture ? (
                                    <div className="d-flex justify-content-center mt-2">
                                        <img className="img-fluid img-dish rounded" src={picture.url} alt={name}/>
                                    </div>
                                ) : ("")
                            }
                        </div>
                    ) :
                    (
                        ""
                    )
            }
        </>
    )
}

export default DishShow