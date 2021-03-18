import React, { Fragment } from 'react'
import { SnackbarProvider } from 'notistack'
import { Container, Fade } from '@material-ui/core'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/From'

const App = () => {
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
          <Header />
          <Form />
        </Container>
      </Fragment>
    </SnackbarProvider>
  )
}
export default App
