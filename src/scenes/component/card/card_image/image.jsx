import React, { Fragment } from 'react'
import { CardMedia } from '@mui/material'

const Image = ({src,height,alt}) => {
  return (
    <CardMedia
      component="img"
      height={height}
      image={src}
      alt={alt}
    />
  )
}

export default Image
