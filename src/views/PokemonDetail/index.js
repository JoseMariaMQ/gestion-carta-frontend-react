import {useParams} from 'react-router-dom'
import {useEffect, useContext} from 'react'
import ClientPageContext from '../../context/clientPage'
import PokemonStats from './components/PokemonStats'
import Loading from '../../components/Loading'
import ErrorMessage from "../../components/ErrorMessage"

const PokemonDetail = () => {
    const {id} = useParams()
    const {getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage} = useContext(ClientPageContext)

    useEffect(() => {
        /**
         * When the screen loads or change the id,
         * request the pokemon detail
         */
        getPokemonDetail(id).catch(null)
    }, [])

    if (isLoading) return <Loading title='Cargando pokemon...'/>

    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage}/> : (
                <>
                    <h3 style={{marginTop: 15, marginBottom: 15}}>Infomación General:</h3>
                    <p>{`Name: ${pokemonDetail?.name}`}</p>
                    <p>{`Weight: ${pokemonDetail?.weight} kg`}</p>
                    <p>{`Height: ${pokemonDetail?.height} cm`}</p>
                    <div>
                        <h3 style={{marginTop: 30, marginBottom: 15}}>Habilidades:</h3>
                        <PokemonStats stats={pokemonDetail?.stats ?? []}/>
                    </div>
                </>
            )}
        </div>
    )
}

export default PokemonDetail