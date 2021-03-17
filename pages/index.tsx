import React from 'react'
import { GetStaticProps } from 'next'
import Nav from "../components/nav";
import Header from "../components/header";

import Head from '../components/head'
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



const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require.context('../src/pages/blog', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../src/pages/blog/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );

};

export async function getStaticProps(context: any) {
  const postsList = await importBlogPosts();

  //if not SerializableError: Error serializing `.postsList[0].default.react` returned from `getStaticProps` in "/".
  const json = JSON.parse(JSON.stringify(postsList));
  return {
    props: { postsList: json }, // will be passed to the page component as props
  }
}


const Home = ({ postsList }: any) => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Head title="nieuws" />
      <Box className={classes.headerBar}>
        <Header />
        <Nav />
      </Box>
      <Container maxWidth="md" className={classes.container}>
        <Articles selectedArticles={"recent"} postsList={postsList} />
      </Container>
    </>
  )
}

export default Home
