import Dish from "./Dish";
import Dessert from "./Dessert";
import Drink from "./Drink";

const Section = ({sections}) => {

    return (
        <section className="container">
            {
                sections?.map((section, index) => (
                    !section.hidden ? (
                        <div key={index} className="container rounded-top mt-2 mb-4">
                            <div className="row alert alert-primary p-0 mb-2">
                                <div className="col-9 col-sm-10 p-0 d-flex align-items-center">
                                    <h2 className="ml-2">{section.name}</h2>
                                </div>
                                <div className="col-3 col-sm-2 p-0">
                                    {section.picture ? <img className="img-fluid img-section float-right rounded-right" src={section.picture.url} alt="Section"/> : ""}
                                </div>
                            </div>
                            <Dish {...section}/>
                            <Dessert {...section}/>
                            <Drink {...section}/>
                        </div>
                        ) : ("")
                ))
            }
        </section>
    )
}

export default Section