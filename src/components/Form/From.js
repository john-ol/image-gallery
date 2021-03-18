import React, { useState } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import useStyles from './styles'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { Progress } from './../Progress/Progress'

export const Form = () => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const [file, setFile] = useState(null)
  const [inputVal, setInputVal] = useState('')

  const changeHandler = (event) => {
    const types = [
      'image/png',
      'image/jpg',
      'image/jpeg',
      'image/gif',
      'image/bmp',
    ]

    const selectedFile = event.target.files[0]
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile)
    } else {
      setFile(null)
      enqueueSnackbar('You should select an image file', { variant: 'error' })
    }
  }
  return (
    <Grid container>
      <Grid item xs={12} className={classes.hero}>
        <Typography
          variant='h6'
          color='textSecondary'
          align='center'
          gutterBottom
          paragraph
        >
          Save your brightest impressions
        </Typography>
        <form>
          <input
            accept='image/*'
            className={classes.input}
            id='contained-button-file'
            type='file'
            onChange={changeHandler}
            value={inputVal}
          />
          <label htmlFor='contained-button-file'>
            <Button
              className={classes.uploadBtn}
              variant='contained'
              color='primary'
              component='span'
              startIcon={<PhotoCamera />}
              size='large'
            >
              Upload
            </Button>
          </label>
        </form>
        {file && (
          <Typography variant='body2' color='textSecondary'>
            <strong>you select:&nbsp;</strong>
            {file.name}
          </Typography>
        )}
        {file && (
          <Progress file={file} setFile={setFile} setInputVal={setInputVal} />
        )}
      </Grid>
    </Grid>
  )
}
