import React, { Fragment } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import Image from './card_image/image'
import Text from './card_text/text'
import { useNavigate } from 'react-router-dom'

const OriginalCard = () => {

  const Navigation = useNavigate();

  const linkNavigation = ()=>{Navigation('/Birth_reminder')}

  return (
    <Fragment>
      <Card sx={{ width: '300px' }}>
        <CardActionArea onClick={linkNavigation}>
          <Image
            src="https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs"
            alt="project image"
            height="80%"
          />
          <CardContent>
            <Text
              text="Birthday Reminder"
              variant="h2"
              Size="1.4rem"
              weight="800!important"
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Fragment>
  )
}

export default OriginalCard
