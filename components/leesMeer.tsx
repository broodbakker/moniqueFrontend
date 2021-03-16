import React from 'react'

import content from "../content/content.json"
import Link from 'next/link'

import { makeStyles, fade, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      root: {
        marginBottom: theme.spacing(10)
      },
      media: {
        height: "100%",
      },
      image: {
        flex: "0 0 6em"
      },
      title: {
        fontWeight: 600,

      },
      test: {
        lineHeight: 0.3
      },
      article: {
        backgroundColor: theme.palette.grey[50],
        marginBottom: theme.spacing(1),
        maxWidth: theme.spacing(100),
        height: theme.spacing(20), '&:hover': {
          background: "#f1f4f8",
        },
      },
      link: {
        textDecoration: "none",

      },
      titleArticle: {
        marginLeft: theme.spacing(1),
        fontWeight: 600,
        margin: "auto",
        color: theme.palette.primary.dark
      },
    }))
}
);


const getSameCategory = (category: string, notThisArticle: number) => {
  const test = content.main.filter((content, index) => {
    if (content.category === category && notThisArticle !== index)
      return content
  })
  return test
}




const LeesMeer = ({ nameOfCategory, notThisArticle }: any) => {
  const articles = getSameCategory(nameOfCategory, notThisArticle)
  const classes = useStyles();
  return (

    <>{articles.length !== 0 && <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.title} >
        Lees Meer
</Typography>
      {articles.map((articleData, index) => {
        if (index < 5) return <Article articleData={articleData} key={index} />
      })}
    </div>}
    </>


  )
}


const Article = ({ articleData }: any) => {
  console.log()
  const classes = useStyles();

  const id = `${articleData.id}`
  return (
    <Link href={id}>
      <a className={classes.link} >
        <Box p={1} boxShadow={1} borderRadius={4} display="flex" className={classes.article} >
          <Box className={classes.image}  >
            <CardMedia
              image={articleData.img}
              title="Contemplative Reptile"
              className={classes.media}
            />
          </Box>
          <Typography align="left" variant="caption" component="p" className={classes.titleArticle} >
            {articleData.title}
          </Typography>
        </Box>
      </a>
    </Link>
  )
}



export default LeesMeer
