import React from 'react'
import Nav from "../components/nav";
import Header from "../components/header";
import MainArticle from "../components/mainArticle";
import ListOfArticles from "../components/listOfArticles";
import { Pagination } from '@material-ui/lab';

import { Container, Box } from '@material-ui/core';
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
      }
    })
  )
});


const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerBar}>
        <Header />
        <Nav />
      </Box>
      <Container maxWidth="md" className={classes.container}>
        <MainArticle />
        <ListOfArticles />
        <Pagination count={11} defaultPage={6} siblingCount={0} />
      </Container>
    </>
  )
}

export default Home
