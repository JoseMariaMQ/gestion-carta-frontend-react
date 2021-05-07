import {useState} from "react";
import FormDish from "./FormDish";
import FormDessert from "./FormDessert";
import FormDrink from "./FormDrink";

const FormNewChoose = ({id}) => {
    const [newDish, setNewDish] = useState(false)
    const [newDessert, setNewDessert] = useState(false)
    const [newDrink, setNewDrink] = useState(false)

    return (
        <>
            <div className="d-flex justify-content-end">
                <div className="d-flex justify-content-end mx-1">
                    <button onClick={() => {setNewDish(!newDish)}} className={newDish ? "btn btn-danger btn-sm" : "btn btn-success btn-sm"} disabled={newDessert || newDrink}>{newDish ? ('CANCELAR') : ('AÑADIR PLATO')}</button>
                </div>
                <div className="d-flex justify-content-end mx-1">
                    <button onClick={() => {setNewDessert(!newDessert)}} className={newDessert ? "btn btn-danger btn-sm" : "btn btn-success btn-sm"} disabled={newDish || newDrink}>{newDessert ? ('CANCELAR') : ('AÑADIR POSTRE')}</button>
                </div>
                <div className="d-flex justify-content-end ml-1">
                    <button onClick={() => {setNewDrink(!newDrink)}} className={newDrink ? "btn btn-danger btn-sm" : "btn btn-success btn-sm"} disabled={newDish || newDessert}>{newDrink ? ('CANCELAR') : ('AÑADIR BEBIDA')}</button>
                </div>
            </div>
            {
                newDish ? (
                    <FormDish section_id={id} store={true}/>
                ) : newDessert ? (
                    <FormDessert section_id={id} store={true}/>
                ) : newDrink ? (
                    <FormDrink section_id={id} store={true}/>
                ) : ('')
            }
        </>
    )
}

export default FormNewChoose