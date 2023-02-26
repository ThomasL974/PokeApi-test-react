import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function CardPokemon({pokemon}) {
  return (
    <Card sx='width: 500px;
      height:500px;'>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <NavLink to={`/pokemon/${pokemon.id}`}>{pokemon.name}</NavLink>
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="500"
        image={pokemon.sprites.front_default}
        alt="image"
      >

      </CardMedia>
    </Card>
  )
}

export default CardPokemon