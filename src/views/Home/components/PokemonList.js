import PokemonListItem from './PokemonListItem'

const PokemonList = ({pokemons}) => {
    return (
        <>
            {pokemons?.map((pokemon, index) => (
                <PokemonListItem key={index} {...pokemon}/>
            ))}
        </>
    )
}

export default PokemonList