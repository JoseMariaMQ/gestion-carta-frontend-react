import DessertShow from "./DessertShow";

const Dessert = ({desserts}) => {

    return (
        <>
            {
                desserts?.map((dessert) => (
                    !dessert.hidden ? (<DessertShow key={dessert.id} {...dessert}/>) : ("")
                ))
            }
        </>
    )
}

export default Dessert