import {useState} from "react";
import FormDrink from "./FormDrink";

const FormNewDrink = ({id}) => {
    const [newDrink, setNewDrink] = useState(false)

    return (
        <>
            <div className="d-flex justify-content-end mb-2">
                <button onClick={() => {setNewDrink(!newDrink)}} className={newDrink ? "btn btn-danger btn-sm" : "btn btn-success btn-sm"}>{newDrink ? ('CANCELAR') : ('AÑADIR BEBIDA')}</button>
            </div>
            {
                newDrink ? (
                    <FormDrink section_id={id} store={true}/>
                ) : ('')
            }
        </>
    )
}

export default FormNewDrink