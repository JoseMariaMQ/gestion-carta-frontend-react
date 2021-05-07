import {useContext, useState} from "react";
import AdminPageContext from "../../../context/adminPage";
import FormDrink from "./FormDrink";

const DrinkEdit = ({id, name, price, hidden, section_id, picture}) => {
    const [editDrink, setEditDrink] = useState([false, null])
    const {updateDrink, deleteDrink} = useContext(AdminPageContext)

    const setHidden = async (hidden, id, section_id) => {
        const body = {'hidden': hidden, 'section_id': section_id}
        console.log(body)
        await updateDrink(body, null, id)
        window.location.reload()
    }

    const deleteDrinkId = async (section_id, id) => {
        const confirm = window.confirm('Si eliminas esta bebida se eliminarán también todos sus componentes')
        if (confirm) {
            await deleteDrink(section_id, id)
            window.location.reload()
        }
    }

    return (
        <div key={id}>
            <div className="row alert alert-danger p-0">
                <span className="col-2 col-sm-1 p-0">{picture ? <img className="img-thumbnail img-children" src={picture.url} alt="Dish"/> : ""}</span>
                <div className="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0">
                    <span className="d-flex justify-content-center h6 mb-1">{name}</span>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => {setHidden(!hidden, id, section_id)}} className={hidden ? "btn btn-success btn-sm ml-1 mr-1" : "btn btn-dark btn-sm ml-1 mr-1"}>{hidden ? 'MOSTRAR' : 'OCULTAR'}</button>
                        <button onClick={() => {setEditDrink([!editDrink[0], id])}} className="btn btn-warning btn-sm ml-1 mr-1">{editDrink[0] ? ('CANCELAR') : ('EDITAR')}</button>
                        <button onClick={() => {deleteDrinkId(section_id, id)}} className="btn btn-danger btn-sm ml-1 mr-1">ELIMINAR</button>
                    </div>
                </div>
                <span className="col-2 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{price}€</span>
            </div>
            <div className="d-flex justify-content-center">
                {
                    editDrink[0] && editDrink[1] === id ? (
                        <FormDrink id={id} name={name} price={price} section_id={section_id} update={true}/>
                    ) : ('')
                }
            </div>
        </div>
    )
}

export default DrinkEdit