import { Card, Skeleton } from '@mui/material'
import React from 'react'

function CardPokemonSkeleton() {
  return (
    <Card>
      <Skeleton variant="text" width={500}/>
      <Skeleton variant="rectangular" width={500} height={500} />
    </Card>
  )
}

export default CardPokemonSkeleton