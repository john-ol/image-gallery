import React, { Fragment, useState } from 'react'
import { SnackbarProvider } from 'notistack'
import { Container, Fade } from '@material-ui/core'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/From'
import { ListImages } from './components/ListImages/ListImages'
import { Modal } from './components/Modal/Modal'

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      TransitionComponent={Fade}
      hideIconVariant={false}
    >
      <Fragment>
        <Container maxWidth='lg'>
          {selectedImage && <Modal selectedImage={selectedImage} />}
          <Header />
          <Form />
          <ListImages setSelectedImage={setSelectedImage} />
        </Container>
      </Fragment>
    </SnackbarProvider>
  )
}
export default App
