import React from 'react'
import ContentPost from "../../components/contentArticle"
import Header from "../../components/header";


import { Container, Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useRouter } from "next/router"


import { attributes } from "../../content/home.md"

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

export default function DynamicPage() {

  let { title, cats } = attributes;
  console.log(title, "here")
  const router: any = useRouter()
  const {
    query: { slug },
  } = router


  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerBar}>
        <Header />
      </Box>

      <Container maxWidth="md" className={classes.container}>
        <div>{title}</div>
        <ContentPost slug={slug} />
      </Container>
    </>
  )
}








