import React from 'react'
import Nav from "../components/nav";
import Header from "../components/header";

import Articles from "../components/articles"
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
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };



  return (
    <>
      <Box className={classes.headerBar}>
        <Header />
        <Nav />
      </Box>
      <Container maxWidth="md" className={classes.container}>
        <Articles selectedArticles={"recent"} />
      </Container>
    </>
  )
}

export default Home
