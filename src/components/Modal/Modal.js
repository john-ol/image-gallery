import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Dialog } from '@material-ui/core'
import useStyles from './styles'

export const Modal = ({ selectedImage, setSelectedImage }) => {
  const classes = useStyles()

  const handleClose = () => {
    setSelectedImage(null)
  }

  return (
    <Dialog maxWidth='md' open={true} onClose={handleClose}>
      <LazyLoadImage
        alt={selectedImage}
        src={selectedImage}
        effect='blur'
        className={classes.modalImg}
      />
    </Dialog>
  )
}
