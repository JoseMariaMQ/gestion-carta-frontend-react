import DrinkEdit from "./DrinkEdit";

const Drink = ({drinks}) => {

    return (
        <>

            {
                drinks?.map((drink) => (
                    <DrinkEdit key={drink.id} {...drink}/>
                ))
            }
        </>
    )
}

export default Drink