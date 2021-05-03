import DessertEdit from "./DessertEdit";

const Dessert = ({desserts}) => {

    return (
        <>
            {
                desserts?.map((dessert) => (
                    <DessertEdit key={dessert.id} {...dessert}/>
                ))
            }
        </>
    )
}

export default Dessert