import SectionEdit from "./SectionEdit";
import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import AdminPageContext from "../../../context/adminPage";

const Section = ({sections}) => {
    const [newSection, setNewSection] = useState(false)
    const {register, handleSubmit} = useForm();
    const {storeSection} = useContext(AdminPageContext)

    const onSubmit = async (data) => {
        const body = {'name': data.name, 'order': data.order}
        const media = {'media': data.media} // Como enviar archivos??
        console.log(body, media)
        await storeSection(body, media)
        window.location.reload()
    }

    return (
        <section className="container">
            <div className="d-flex justify-content-end">
                <button onClick={() => {setNewSection(!newSection)}} className={newSection ? "btn btn-danger" : "btn btn-success"}>{newSection ? 'CANCELAR' : 'AÑADIR NUEVA SECCIÓN'}</button>
            </div>
            {
                newSection ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                        <div className="form-group">
                            <label htmlFor="inputTitle">Título de la sección</label>
                            <input type="text" className="form-control" placeholder="Introduce el nombre de la sección" {...register("name", {required: true})}/>
                            <small className="form-text text-muted">El título no debe de ser demasiado largo</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputOrder">Orden de la sección</label>
                            <input type="number" className="form-control" placeholder="Introduce el orden de la sección" {...register("order", {required: true})}/>
                            <small className="form-text text-muted">El orden debe de ser un número entero</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPicture">Imagen de la sección</label>
                            <input type="file" className="form-control" placeholder="Introduce el orden de la sección" {...register("media", {required: false})}/>
                            <small className="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
                        </div>
                        <button type="submit" className="btn btn-primary">ACEPTAR</button>
                    </form>
                ) : ('')
            }
            {
                sections?.map((section) => (
                    <SectionEdit key={section.id} {...section}/>
                ))
            }
        </section>
    )
}

export default Section