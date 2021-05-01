import DishShow from "./DishShow";

const Dish = ({dishes}) => {

    return (
        <>
            {
                dishes?.map((dish) => (
                    !dish.hidden ? (<DishShow key={dish.id} {...dish}/>) : ("")
                ))
            }
        </>
    )
}

export default Dish