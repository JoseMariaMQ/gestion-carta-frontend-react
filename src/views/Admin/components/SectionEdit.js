import {useContext, useState} from "react";
import Dish from "./Dish";
import Dessert from "./Dessert";
import Drink from "./Drink";
import {useForm} from "react-hook-form";
import AdminPageContext from "../../../context/adminPage";
import FormNewDish from "./FormNewDish";
import FormNewDessert from "./FormNewDessert";
import FormNewDrink from "./FormNewDrink";
import FormNewChoose from "./FormNewChoose";

const SectionEdit = (section) => {
    const [editSection, setEditSection] = useState([false, null])
    const {register, handleSubmit} = useForm()
    const {updateSection, deleteSection} = useContext(AdminPageContext)
    const [sectionShow, setSectionShow] = useState({...section})
    const [hide, setHide] = useState(section.hidden)

    const onSubmit = async (data) => {
        const body = {'name': data.name, 'order': data.order}
        body.id = editSection[1]

        const media = new FormData()
        media.append('media', data.media[0])

        const section = await updateSection(body, media.values().next().value !== 'undefined' ? media : false)
        console.log(section)
        setSectionShow({...section})
        setEditSection(!editSection[0])
    }

    const setHidden = async (hidden, id) => {
        const body = {'hidden': hidden, 'id': id}
        console.log(body)
        const section = await updateSection(body)
        setHide(section.hidden)
    }

    const deleteSectionId = async (id) => {
        const confirm = window.confirm('Si eliminas esta sección se eliminarán también todos sus componentes')
        if (confirm) {
            const section = await deleteSection(id)
            console.log(section)
            // window.location.reload()
        }
    }

    return (
        <div className="container rounded-top mt-2 mb-4">
            <div className="row alert alert-primary p-0 mb-2">
                <div className="col-9 col-sm-10 p-0">
                    <h2 className="ml-2">{sectionShow.name}</h2>
                    <div className="ml-1 d-flex justify-content-start">
                        <button onClick={() => {setHidden(!hide, section.id)}} className={hide ? "btn btn-success btn-sm ml-1 mr-1" : "btn btn-dark btn-sm ml-1 mr-1"}>{hide ? 'MOSTRAR' : 'OCULTAR'}</button>
                        <button onClick={() => {setEditSection([!editSection[0], sectionShow.id])}} className="btn btn-warning btn-sm ml-1 mr-1">EDITAR</button>
                        <button onClick={() => {deleteSectionId(sectionShow.id)}} className="btn btn-danger btn-sm ml-1 mr-1">ELIMINAR</button>
                    </div>
                </div>
                <div className="col-3 col-sm-2 p-0">
                    {sectionShow.picture ? <img className="img-fluid img-section float-right rounded-right" src={sectionShow.picture.url} alt="Section"/> : ""}
                </div>
            </div>
            {
                section.dishes.length > 0 ? (
                    <FormNewDish {...section}/>
                ) : section.desserts.length > 0 ? (
                    <FormNewDessert {...section}/>
                ) : section.drinks.length > 0 ? (
                    <FormNewDrink {...section}/>
                ) : section.dishes.length < 1 && section.desserts.length < 1 && section.drinks.length < 1 ? (
                    <FormNewChoose {...section}/>
                ) : ('')
            }
            {
                editSection[0] && editSection[1] === section.id ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                        <div className="form-group">
                            <label htmlFor="inputTitle">Título de la sección</label>
                            <input type="text" name="name" defaultValue={sectionShow.name} className="form-control" placeholder="Introduce el nombre de la sección" {...register("name", {required: true})}/>
                            <small className="form-text text-muted">El título no debe de ser demasiado largo</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputOrder">Orden de la sección</label>
                            <input type="number" name="order" defaultValue={sectionShow.order} className="form-control" placeholder="Introduce el orden de la sección" {...register("order", {required: true})}/>
                            <small className="form-text text-muted">El orden debe de ser un número entero</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPicture">Imagen de la sección</label>
                            <input type="file" name="media" className="form-control" placeholder="Introduce el orden de la sección" {...register("media", {required: false})}/>
                            <small className="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
                        </div>
                        <button type="submit" className="btn btn-primary">EDITAR</button>
                        <button onClick={() => {setEditSection([!editSection[0], sectionShow.id])}} className="btn btn-danger ml-2">CANCELAR</button>
                    </form>
                ) : ('')
            }
            <Dish {...section}/>
            <Dessert {...section}/>
            <Drink {...section}/>
        </div>
    )
}

export default SectionEdit