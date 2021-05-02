const Drink = ({drinks}) => {

    return (
        <>

            {
                drinks?.map((drink) => (
                    <div className="row alert alert-danger p-0" key={drink.id}>
                        <span className="col-2 col-sm-1 p-0">{drink.picture ? <img className="img-thumbnail img-children" src={drink.picture.url} alt="Dish"/> : ""}</span>
                        <div className="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0">
                            <span className="d-flex justify-content-center h6 mb-1">{drink.name}</span>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-dark btn-sm ml-1 mr-1">OCULTAR</button>
                                <button className="btn btn-warning btn-sm ml-1 mr-1">EDITAR</button>
                                <button className="btn btn-danger btn-sm ml-1 mr-1">ELIMINAR</button>
                            </div>
                        </div>
                        <span className="col-2 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{drink.price}€</span>
                    </div>
                ))
            }
        </>
    )
}

export default Drink