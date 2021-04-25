const Section = ({sections, dishes}) => {

    return (
        <section className="container">
            {
                sections?.map((section, index) => (
                    // console.log(index)
                    <div key={index} className="border rounded-top mt-2 mb-2 bg-primary">
                        <h3 className="ml-2">{section.name}</h3>
                        <div className="border bg-light">
                            {
                                dishes?.map((dish, index) => (
                                    dish.section.id === section.id ? <div className="border" key={index}>{dish.name}</div> : ""
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Section