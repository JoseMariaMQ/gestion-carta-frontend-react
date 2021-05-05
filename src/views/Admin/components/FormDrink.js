const FormDrink = (id) => {
    console.log(id)
    return (
        <>
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
            </form>
        </>
    )
}

export default FormDrink