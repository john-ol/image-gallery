import React, { Fragment } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { motion } from 'framer-motion'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import { useFireStore } from '../../hooks/useFirestore'
import { AlertMessage } from './../Alert/Alert'
import { Loader } from './../Loader/Loader'
export const ListImages = ({ setSelectedImage }) => {
  const classes = useStyles()
  const { images, loading } = useFireStore('images')

  if (loading) {
    return <Loader />
  }
  if (images?.length === 0) {
    return <AlertMessage text={'There are no pictures yet'} />
  }

  return (
    <Fragment>
      {images && (
        <Grid container spacing={1}>
          {images.map((image) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={image.id}
              component={motion.div}
              layout
              whileHover={{ opacity: 1 }}
              style={{ opacity: 0.8 }}
            >
              <LazyLoadImage
                height={250}
                width='100%'
                alt={image.name}
                src={image.url}
                effect='blur'
                className={classes.item}
                onClick={() => setSelectedImage(image.url)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Fragment>
  )
}
