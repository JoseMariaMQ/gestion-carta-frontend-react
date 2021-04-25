import ClientPageContext from '../../context/clientPage'
import {useContext} from 'react'

const FourOFOur = () => {
    const {pokemons} = useContext(ClientPageContext)

    console.log(pokemons)

    return (
        <div>
            <p>Error 404</p>
        </div>
    )
}

export default FourOFOur;