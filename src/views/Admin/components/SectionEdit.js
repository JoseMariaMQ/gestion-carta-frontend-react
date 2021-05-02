import {useState} from "react";
import Dish from "./Dish";
import Dessert from "./Dessert";
import Drink from "./Drink";

const SectionEdit = (section) => {
    const [editSection, setEditSection] = useState([false, null])

    return (
            !section.hidden ? (
            <div className="container rounded-top mt-2 mb-4">
                <div className="row alert alert-primary p-0 mb-2">
                    <div className="col-9 col-sm-10 p-0">
                        <h2 className="ml-2">{section.name}</h2>
                        <div className="ml-1 d-flex justify-content-start">
                            <button className={section.hidden ? "btn btn-success btn-sm ml-1 mr-1" : "btn btn-dark btn-sm ml-1 mr-1"}>{section.hidden ? 'MOSTRAR' : 'OCULTAR'}</button>
                            <button onClick={() => {setEditSection([!editSection[0], section.id])}} className="btn btn-warning btn-sm ml-1 mr-1">EDITAR</button>
                            <button className="btn btn-danger btn-sm ml-1 mr-1">ELIMINAR</button>
                        </div>
                    </div>
                    <div className="col-3 col-sm-2 p-0">
                        {section.picture ? <img className="img-fluid img-section float-right rounded-right" src={section.picture.url} alt="Section"/> : ""}
                    </div>
                </div>
                {
                    editSection[0] && editSection[1] === section.id ? (
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
                            <button type="submit" className="btn btn-primary">EDITAR</button>
                        </form>
                    ) : ('')
                }
                <Dish {...section}/>
                <Dessert {...section}/>
                <Drink {...section}/>
            </div>
            ) : ("")
    )
}

export default SectionEdit