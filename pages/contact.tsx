import React from 'react'
import { GetStaticProps } from 'next'
import Nav from "../components/nav";
import Header from "../components/header";

import Head from '../components/head'
import Articles from "../components/articles"
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {

  return (
    createStyles({
      headerBar: {
        boxShadow: "none",
        width: "100%",
        position: "fixed",
        zIndex: 10
      },
      container: {
        paddingTop: 96,
        [theme.breakpoints.up('sm')]: { paddingTop: 120, },
        maxWidth: 600,
      }, title: {
        marginBottom: theme.spacing(4)
      },
      subtitle: {
        fontWeight: 600, marginBottom: theme.spacing(4)
      },

      text: {
        marginBottom: theme.spacing(4)
      }
    })
  )
});



const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Head title="nieuws" />
      <Box className={classes.headerBar}>
        <Header />

      </Box>
      <Container maxWidth="md" className={classes.container}>


        <Typography variant="h4" component="h1" className={classes.title}>
          Contact
          </Typography>

        <Typography variant="body2" component="p" className={classes.text} >
          Cognovi is een uitgave van ICS Media, gevestigd te Duiven, Van Goghstraat 4, 6921 NJ
          </Typography>

        <Typography variant="body1" component="p" className={classes.subtitle} >
          Hoofredacteur: Monique Siemsen
          </Typography>

        <Typography variant="body2" component="p" className={classes.text}>
          Wil je de redactie tippen of heb je een interessant persbericht? Stuur deze dan alsjeblieft
          naar redactie@cognovi.nl en laat meteen weten hoe we contact met je kunnen opnemen.
          </Typography>


      </Container>
    </>
  )
}

export default Contact
