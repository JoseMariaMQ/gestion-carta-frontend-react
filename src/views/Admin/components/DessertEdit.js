import {useContext, useState} from "react";
import AdminPageContext from "../../../context/adminPage";
import FormDessert from "./FormDessert";

const DessertEdit = ({id, name, price, units, hidden, menu, price_menu, ingredients, section_id, allergens, picture}) => {
    const [editDessert, setEditDessert] = useState([false, null])
    const {updateDessert, deleteDessert} = useContext(AdminPageContext)
    const [hide, setHide] = useState(hidden)

    const setHidden = async (hidden, id, section_id) => {
        const body = {'hidden': hidden, 'section_id': section_id}
        console.log(body)
        const dessert = await updateDessert(body, null, id)
        setHide(dessert.data.hidden)
    }

    const deleteDessertId = async (section_id, id) => {
        const confirm = window.confirm('Si eliminas este postre se eliminarán también todos sus componentes')
        if (confirm) {
            await deleteDessert(section_id, id)
            window.location.reload()
        }
    }

    return (
        <div key={id}>
            <div className="row alert alert-danger p-0 mb-2">
                <span className="col-2 col-sm-1 p-0">{picture ? <img className="img-thumbnail img-children" src={picture.url} alt="dessert"/> : ""}</span>
                <div className="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0">
                    <span className="d-flex justify-content-center h6 mb-1">{name}</span>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => {setHidden(!hide, id, section_id)}} className={hide ? "btn btn-success btn-sm ml-1 mr-1" : "btn btn-dark btn-sm ml-1 mr-1"}>{hide ? 'MOSTRAR' : 'OCULTAR'}</button>
                        <button onClick={() => {setEditDessert([!editDessert[0], id])}} className="btn btn-warning btn-sm ml-1 mr-1">{editDessert[0] ? ('CANCELAR') : ('EDITAR')}</button>
                        <button onClick={() => {deleteDessertId(section_id, id)}} className="btn btn-danger btn-sm ml-1 mr-1">ELIMINAR</button>
                    </div>
                </div>
                <span className="col-2 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{price}€</span>
            </div>
            <div className="d-flex justify-content-center">
                {
                    editDessert[0] && editDessert[1] === id ? (
                        <FormDessert id={id} name={name} price={price} units={units} menu={menu} price_menu={price_menu} ingredients={ingredients} section_id={section_id} allergens={allergens} update={true}/>
                    ) : ('')
                }
            </div>
        </div>
    )
}

export default DessertEdit