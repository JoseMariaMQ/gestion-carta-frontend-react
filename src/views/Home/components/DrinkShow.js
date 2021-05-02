const DrinkShow = ({id, name, price, picture}) => {

    return (
        <>
            <div className="row alert alert-danger p-0" key={id}>
                <span className="col-2 col-sm-1 p-0">{picture ? <img className="img-thumbnail img-children" src={picture.url} alt="Dish"/> : ""}</span>
                <span className="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0 d-flex align-items-center h6">{name}</span>
                <span className="col-1 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{price}€</span>
                <span className="col-1 col-sm-1 border-0 alert-danger p-0 d-flex justify-content-center align-items-center"/>
            </div>
        </>
    )
}

export default DrinkShow