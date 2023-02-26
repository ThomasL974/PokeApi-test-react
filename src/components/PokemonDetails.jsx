import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getPokemonById } from "../services/pokemon.service"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
function PokemonDetails() {
    const [pokemon, setPokemon] = useState({})
    let { id } = useParams();
    console.log(id);
    const getPoke = async (id) => {
        try {
            const pokemonData = await getPokemonById(id)
            setPokemon(pokemonData.sprites.front_default)
        } catch (error) {
            toast.error(`${id} not found`)
        }
    }
    useEffect(() => {
        getPoke(id)
    }, [])
    
    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height="500"
                    image={pokemon}
                    alt="image"
                >

                </CardMedia>
            </Card>
        </>
    )
}

export default PokemonDetails