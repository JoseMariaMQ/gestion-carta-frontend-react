import DrinkShow from "./DrinkShow";

const Drink = ({drinks}) => {

    return (
        <>

            {
                drinks?.map((drink) => (
                    !drink.hidden ? (<DrinkShow key={drink.id} {...drink}/>) : ("")

                ))
            }
        </>
    )
}

export default Drink