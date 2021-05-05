import {useState} from "react";
import FormDessert from "./FormDessert";

const FormNewDessert = ({id}) => {
    const [newDessert, setNewDessert] = useState(false)

    return (
        <>
            <div className="d-flex justify-content-end mb-2">
                <button onClick={() => {setNewDessert(!newDessert)}} className={newDessert ? "btn btn-danger btn-sm" : "btn btn-success btn-sm"}>{newDessert ? ('CANCELAR') : ('AÑADIR POSTRE')}</button>
            </div>
            {
                newDessert ? (
                    <FormDessert section_id={id}/>
                ) : ('')
            }
        </>
    )
}

export default FormNewDessert