import {useState} from "react";

const DrinkEdit = ({id, name, price, picture}) => {
    const [editDrink, setEditDrink] = useState([false, null])

    return (
        <div key={id}>
            <div className="row alert alert-danger p-0">
                <span className="col-2 col-sm-1 p-0">{picture ? <img className="img-thumbnail img-children" src={picture.url} alt="Dish"/> : ""}</span>
                <div className="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0">
                    <span className="d-flex justify-content-center h6 mb-1">{name}</span>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-dark btn-sm ml-1 mr-1">OCULTAR</button>
                        <button onClick={() => {setEditDrink([!editDrink[0], id])}} className="btn btn-warning btn-sm ml-1 mr-1">EDITAR</button>
                        <button className="btn btn-danger btn-sm ml-1 mr-1">ELIMINAR</button>
                    </div>
                </div>
                <span className="col-2 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{price}€</span>
            </div>
            <div className="d-flex justify-content-center">
                {
                    editDrink[0] && editDrink[1] === id ? (
                        <form action="" className="mb-3">
                            <div className="form-group">
                                <label htmlFor="inputTitle">Título de la bebida</label>
                                <input type="text" className="form-control" placeholder="Introduce el nombre de la bebida"/>
                                <small className="form-text text-muted">El título no debe de ser demasiado largo</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputPrice">Precio de la bebida</label>
                                <input type="number" className="form-control" placeholder="Introduce el precio de la bebida"/>
                                <small className="form-text text-muted"/>
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="inputPicture">Imagen dela bebida</label>
                                <input type="file" className="form-control"/>
                                <small className="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
                            </div>
                            <button type="submit" className="btn btn-primary">EDITAR</button>
                            <button onClick={() => {setEditDrink([!editDrink[0], id])}} className="btn btn-danger ml-2">CANCELAR</button>
                        </form>
                    ) : ('')
                }
            </div>
        </div>
    )
}

export default DrinkEdit