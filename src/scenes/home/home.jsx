import React, { Fragment } from 'react'
import { Grid } from '@mui/material'
import OriginalCard from '../component/card/card'
import Text from '../component/card/card_text/text'

const Home = () => {
  return (
    <Fragment>
      <Grid container spacing={0} sx={{margin:'50px 0'}}>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <OriginalCard />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Home
