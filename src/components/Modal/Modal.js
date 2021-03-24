import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Dialog } from '@material-ui/core'
import useStyles from './styles'

export const Modal = ({ selectedImage }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(true)
  }, [selectedImage])
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog maxWidth='md' open={open} onClose={handleClose}>
      <LazyLoadImage
        alt={selectedImage}
        src={selectedImage}
        effect='blur'
        className={classes.modalImg}
      />
    </Dialog>
  )
}
