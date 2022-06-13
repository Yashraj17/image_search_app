import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Box } from '@mui/material';


const ImageCard = ({img,isProcess}) => {

  return (
    
    <Box component='a'  href={img} target="_blank">
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="240"
                width='auto'
                image={img}
                sx={{objectFit: 'cover'}}
                alt="green iguana"
            />
            </CardActionArea>
        </Card>
    </Box>
  )
}

export default ImageCard