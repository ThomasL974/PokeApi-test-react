import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { AiOutlineSend } from "react-icons/ai";
import { getPokemonDitto } from '../../services/pokemon.service';
import { toast } from 'react-toastify';

function FormPokemon({ setPokemon, setIsLoading }) {

    const [pokemonName, setPokemonName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(async () => {
            try {
                const data = await getPokemonDitto(pokemonName)
                setPokemon(data)
                console.log(data)
                setIsLoading(false)
            } catch (error) {
                toast.error(`${pokemonName} not found`)
            }
        }, 2000)
    }
    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget
        setPokemonName(value)
        console.log(value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} name="name_pokemon" label="Entrez le nom du pokémon" variant="outlined" />
                <Button type="submit" variant="contained" endIcon={<AiOutlineSend />}>
                    Send
                </Button>
            </form>
        </>
    )
}

export default FormPokemon