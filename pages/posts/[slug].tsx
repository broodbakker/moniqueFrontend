import React from 'react'
import ContentPost from "../../components/contentArticle"
import Header from "../../components/header";

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

export default function DynamicPage(props: any) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerBar}>
        <Header />
      </Box>
      <Container maxWidth="md" className={classes.container}>
        <ContentPost blogpost={props.blogpost} />
      </Container>
    </>
  )
}

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require.context('../../src/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../src/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export async function getStaticPaths() {
  const blogPosts = await importBlogPosts()
  const slugs = blogPosts.map((blogPost: any) => { return `/posts/${blogPost.slug}` })

  return {
    paths: [
      // String variant:
      ...slugs,
      // Object variant:

    ],
    fallback: false,
  }
}



export async function getStaticProps(context: any) {

  const blogpost = await import(`../../src/posts/${context.params.slug}.md`).catch(error => null);
  const json = JSON.parse(JSON.stringify(blogpost));


  return {
    props: { blogpost: json }, // will be passed to the page component as props
  }
}






