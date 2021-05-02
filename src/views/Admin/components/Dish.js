import DishEdit from "./DishEdit";

const Dish = ({dishes}) => {

    return (
        <>
            {
                dishes?.map((dish) => (
                    <DishEdit key={dish.id} {...dish}/>
                ))
            }
        </>
    )
}

export default Dish