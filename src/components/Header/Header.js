import React from 'react'
import { Grid, Typography, Toolbar, Avatar } from '@material-ui/core'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import useStyles from './styles'
export const Header = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12}>
        <Toolbar>
          <Avatar className={classes.avatar}>
            <PhotoSizeSelectActualIcon />
          </Avatar>
          <Typography className={classes.logo} variant='h5' color='primary'>
            Image gallery
          </Typography>
        </Toolbar>
      </Grid>
    </Grid>
  )
}
