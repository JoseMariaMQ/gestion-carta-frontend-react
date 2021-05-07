import {useState} from "react";
import FormDish from "./FormDish";

const FormNewDish = ({id}) => {
    const [newDish, setNewDish] = useState(false)

    return (
        <>
            <div className="d-flex justify-content-end mb-2">
                <button onClick={() => {setNewDish(!newDish)}} className={newDish ? "btn btn-danger btn-sm" : "btn btn-success btn-sm"}>{newDish ? ('CANCELAR') : ('AÑADIR PLATO')}</button>
            </div>
            {
                newDish ? (
                    <FormDish section_id={id} store={true}/>
                ) : ('')
            }
        </>
    )
}

export default FormNewDish