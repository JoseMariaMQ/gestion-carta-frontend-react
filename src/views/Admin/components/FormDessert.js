import {useForm} from "react-hook-form";
import {useContext} from "react";
import AdminPageContext from "../../../context/adminPage";

const FormDessert = (props) => {
    const {register, handleSubmit} = useForm();
    const {storeDessert, updateDessert} = useContext(AdminPageContext)

    const onSubmit = async (data) => {
        const body = {
            'name': data.name,
            'price': data.price,
            'units': data.units,
            'extra': 0,
            'hidden': 0,
            'menu': data.menu,
            'price_menu': data.price_menu,
            'ingredients': data.ingredients,
            'section_id': props.section_id,
            'allergens_id': data.allergens
        }

        if (!body.ingredients) delete body.ingredients
        if (!body.units) delete body.units
        if (!body.price_menu) delete body.price_menu
        if (!body.allergens_id > 0) delete body.allergens_id

        const media = new FormData()
        media.append('media', data.media[0])
        if (props.store) await storeDessert(body, media, props.section_id)
        if (props.update) await updateDessert(body, media, props.id)
        window.location.reload()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                <div className="form-group">
                    <label htmlFor="inputTitle">Título del postre</label>
                    <input type="text" className="form-control" placeholder="Introduce el nombre del postre" defaultValue={props.name} {...register("name", {required: true})}/>
                    <small className="form-text text-muted">El título no debe de ser demasiado largo</small>
                </div>

                <div className="form-group">
                    <label htmlFor="inputPrice">Precio del postre</label>
                    <input type="number" step=".01" className="form-control" placeholder="Introduce el precio del postre" defaultValue={props.price} {...register("price", {required: true})}/>
                    <small className="form-text text-muted"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputUnits">Unidades</label>
                    <input type="number" className="form-control" placeholder="Introduce las unidades que contiene el plato" defaultValue={props.units} {...register("units", {required: false})}/>
                    <small className="form-text text-muted"/>
                </div>

                <div><label htmlFor="inputMenu">Disponible para menú</label></div>
                <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" defaultChecked={props.menu} {...register("menu", {required: true})}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">SI</label>
                </div>
                <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0" defaultChecked={!props.menu} {...register("menu", {required: true})}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">NO</label>
                </div>

                <div className="form-group">
                    <label htmlFor="inputPriceMenu">Precio con menú</label>
                    <input type="number" step=".01" className="form-control" placeholder="Introduce el precio con menú" defaultValue={props.price_menu} {...register("price_menu", {required: false})}/>
                    <small className="form-text text-muted"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputIngredients">Ingredientes</label>
                    <input type="text" className="form-control" placeholder="Introduce los ingredientes del postre" defaultValue={props.ingredients} {...register("ingredients", {required: false})}/>
                    <small className="form-text text-muted"/>
                </div>

                <div><label htmlFor="inputMenu">Alérgenos</label></div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="1" defaultChecked={props.allergens?.some(allergen => allergen.id === 1)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Contiene gluten</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="2" defaultChecked={props.allergens?.some(allergen => allergen.id === 2)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Crustáceos</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="3" defaultChecked={props.allergens?.some(allergen => allergen.id === 3)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Huevos</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="4" defaultChecked={props.allergens?.some(allergen => allergen.id === 4)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Pescado</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="5" defaultChecked={props.allergens?.some(allergen => allergen.id === 5)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Cacahuetes</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="6" defaultChecked={props.allergens?.some(allergen => allergen.id === 6)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Soja</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="7" defaultChecked={props.allergens?.some(allergen => allergen.id === 7)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Lácteos</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="8" defaultChecked={props.allergens?.some(allergen => allergen.id === 8)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Frutos de cáscara</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox9" value="9" defaultChecked={props.allergens?.some(allergen => allergen.id === 9)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Apio</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox10" value="10" defaultChecked={props.allergens?.some(allergen => allergen.id === 10)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Mostaza</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox11" value="11" defaultChecked={props.allergens?.some(allergen => allergen.id === 11)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Granos de sésamo</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox12" value="12" defaultChecked={props.allergens?.some(allergen => allergen.id === 12)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Dioxido de azufre y sulfitos</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox13" value="13" defaultChecked={props.allergens?.some(allergen => allergen.id === 13)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Moluscos</label>
                        </div>
                        <div className="col form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox14" value="14" defaultChecked={props.allergens?.some(allergen => allergen.id === 14)} {...register("allergens", {required: false})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Altramuces</label>
                        </div>
                    </div>
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="inputPicture">Imagen del postre</label>
                    <input type="file" className="form-control" {...register("media", {required: false})}/>
                    <small className="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
                </div>
                <button type="submit" className="btn btn-primary">ACEPTAR</button>
            </form>
        </>
    )
}

export default FormDessert