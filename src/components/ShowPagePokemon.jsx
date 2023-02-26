import { useState } from 'react';
import FormPokemon from './form/FormPokemon';
import CardPokemon from './CardPokemon';
import 'react-toastify/dist/ReactToastify.css';
import CardPokemonSkeleton from './CardPokemonSkeleton';

function ShowPagePokemon() {
    const [pokemon, setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
            <h1>Hello app</h1>
            <FormPokemon setIsLoading={setIsLoading} setPokemon={setPokemon} />
            {isLoading && <CardPokemonSkeleton />}
            {(pokemon.id && !isLoading) && <CardPokemon pokemon={pokemon} />}
        </>
    )
}

export default ShowPagePokemon