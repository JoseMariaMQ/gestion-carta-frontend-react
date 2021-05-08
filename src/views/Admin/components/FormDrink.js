import {useForm} from "react-hook-form";
import {useContext} from "react";
import AdminPageContext from "../../../context/adminPage";

const FormDrink = (props) => {
    const {register, handleSubmit} = useForm();
    const {storeDrink, updateDrink} = useContext(AdminPageContext)

    const onSubmit = async (data) => {
        const body = {
            'name': data.name,
            'price': data.price,
            'section_id': props.section_id,
        }

        const media = new FormData()
        media.append('media', data.media[0])

        if (props.store) await storeDrink(body, media, props.section_id)
        if (props.update) await updateDrink(body, media, props.id)
        // window.location.reload()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                <div className="form-group">
                    <label htmlFor="inputTitle">Título de la bebida</label>
                    <input type="text" className="form-control" placeholder="Introduce el nombre de la bebida" defaultValue={props.name} {...register("name", {required: true})}/>
                    <small className="form-text text-muted">El título no debe de ser demasiado largo</small>
                </div>

                <div className="form-group">
                    <label htmlFor="inputPrice">Precio de la bebida</label>
                    <input type="number" step=".01" className="form-control" placeholder="Introduce el precio de la bebida" defaultValue={props.price} {...register("price", {required: true})}/>
                    <small className="form-text text-muted"/>
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="inputPicture">Imagen dela bebida</label>
                    <input type="file" className="form-control" {...register("media", {required: false})}/>
                    <small className="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
                </div>
                <button type="submit" className="btn btn-primary">ACEPTAR</button>
            </form>
        </>
    )
}

export default FormDrink