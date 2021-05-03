import SectionEdit from "./SectionEdit";
import {useState} from "react";

const Section = ({sections}) => {
    const [newSection, setNewSection] = useState(false)

    return (
        <section className="container">
            <div className="d-flex justify-content-end">
                <button onClick={() => {setNewSection(!newSection)}} className={newSection ? "btn btn-danger" : "btn btn-success"}>{newSection ? 'CANCELAR' : 'AÑADIR NUEVA SECCIÓN'}</button>
            </div>
            {
                newSection ? (
                    <form action="" className="mb-3">
                        <div className="form-group">
                            <label htmlFor="inputTitle">Título de la sección</label>
                            <input type="text" className="form-control" placeholder="Introduce el nombre de la sección"/>
                            <small className="form-text text-muted">El título no debe de ser demasiado largo</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputOrder">Orden de la sección</label>
                            <input type="number" className="form-control" placeholder="Introduce el orden de la sección"/>
                            <small className="form-text text-muted">El orden debe de ser un número entero</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPicture">Imagen de la sección</label>
                            <input type="file" className="form-control" placeholder="Introduce el orden de la sección"/>
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