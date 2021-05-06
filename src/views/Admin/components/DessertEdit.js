import {useState} from "react";

const DessertEdit = ({id, name, price, units, menu, price_menu, ingredients, allergens, picture}) => {
    const [editDessert, setEditDessert] = useState([false, null])

    return (
        <div key={id}>
            <div className="row alert alert-danger p-0 mb-2">
                <span className="col-2 col-sm-1 p-0">{picture ? <img className="img-thumbnail img-children" src={picture.url} alt="dessert"/> : ""}</span>
                <div className="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0">
                    <span className="d-flex justify-content-center h6 mb-1">{name}</span>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-dark btn-sm ml-1 mr-1">OCULTAR</button>
                        <button onClick={() => {setEditDessert([!editDessert[0], id])}} className="btn btn-warning btn-sm ml-1 mr-1">EDITAR</button>
                        <button className="btn btn-danger btn-sm ml-1 mr-1">ELIMINAR</button>
                    </div>
                </div>
                <span className="col-2 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{price}€</span>
            </div>
            <div className="d-flex justify-content-center">
                {
                    editDessert[0] && editDessert[1] === id ? (
                        <form action="" className="mb-3">
                            <div className="form-group">
                                <label htmlFor="inputTitle">Título del postre</label>
                                <input type="text" defaultValue={name} className="form-control" placeholder="Introduce el nombre del postre"/>
                                <small className="form-text text-muted">El título no debe de ser demasiado largo</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputPrice">Precio del postre</label>
                                <input type="number" defaultValue={price} className="form-control" placeholder="Introduce el precio del postre"/>
                                <small className="form-text text-muted"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputUnits">Unidades</label>
                                <input type="number" defaultValue={units} className="form-control" placeholder="Introduce las unidades que contiene el plato"/>
                                <small className="form-text text-muted"/>
                            </div>

                            <div><label htmlFor="inputMenu">Disponible para menú</label></div>
                            <div className="form-check form-check-inline mb-2">
                                <input className="form-check-input" type="radio" defaultChecked={menu} name="inlineRadioOptions" id="inlineRadio1" value="true"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">SI</label>
                            </div>
                            <div className="form-check form-check-inline mb-2">
                                <input className="form-check-input" type="radio" defaultChecked={!menu} name="inlineRadioOptions" id="inlineRadio2" value="false"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">NO</label>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputPriceMenu">Precio con menú</label>
                                <input type="number" defaultValue={price_menu} className="form-control" placeholder="Introduce el precio con menú"/>
                                <small className="form-text text-muted"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputIngredients">Ingredientes</label>
                                <input type="text" defaultValue={ingredients} className="form-control" placeholder="Introduce los ingredientes del postre"/>
                                <small className="form-text text-muted"/>
                            </div>

                            <div><label htmlFor="inputMenu">Alérgenos</label></div>
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 1)} id="inlineCheckbox1" value="option1"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Contiene gluten</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 2)} id="inlineCheckbox2" value="option2"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Crustáceos</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 3)} id="inlineCheckbox3" value="option3"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Huevos</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 4)} id="inlineCheckbox4" value="option4"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Pescado</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 5)} id="inlineCheckbox5" value="option5"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Cacahuetes</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 6)} id="inlineCheckbox6" value="option6"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Soja</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 7)} id="inlineCheckbox7" value="option7"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Lácteos</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 8)} id="inlineCheckbox8" value="option8"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Frutos de cáscara</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 9)} id="inlineCheckbox9" value="option9"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Apio</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 10)} id="inlineCheckbox10" value="option10"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Mostaza</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 11)} id="inlineCheckbox11" value="option11"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Granos de sésamo</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 12)} id="inlineCheckbox12" value="option12"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Dioxido de azufre y sulfitos</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 13)} id="inlineCheckbox13" value="option13"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Moluscos</label>
                                    </div>
                                    <div className="col form-check">
                                        <input className="form-check-input" type="checkbox" defaultChecked={allergens.some(allergen => allergen.id === 14)} id="inlineCheckbox14" value="option14"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Altramuces</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="inputPicture">Imagen del postre</label>
                                <input type="file" className="form-control"/>
                                <small className="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
                            </div>
                            <button type="submit" className="btn btn-primary">EDITAR</button>
                            <button onClick={() => {setEditDessert([!editDessert[0], id])}} className="btn btn-danger ml-2">CANCELAR</button>
                        </form>
                    ) : ('')
                }
            </div>
        </div>
    )
}

export default DessertEdit