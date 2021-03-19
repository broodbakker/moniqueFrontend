import React from 'react'
import Link from 'next/link'

import { Box, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {

  return (
    createStyles({
      container: {
        maxHeight: theme.spacing(100)
      },
      root: {
        height: "100%",
      },
      media: {
        height: "100%",
        position: "relative"
      },
      content: {
        position: "absolute",
        bottom: 0
      },
      title: {
        lineHeight: 1.2,
        fontWeight: 900,
        color: theme.palette.grey[50]
      }
    }))
})

const MainArticle = ({ articleContent }: any) => {



  const classes = useStyles();


  return (
    <Box height="40vw" className={classes.container}>
      {articleContent &&
        <>
          <Link href={`/posts/${articleContent.slug}`}>
            <a>
              <Card className={classes.root}>
                <CardMedia
                  image={articleContent.attributes.image}
                  title={classes.content}
                  className={classes.media}
                  src={articleContent.attributes.image}
                >
                  <CardContent className={classes.content}>
                    <Box>
                      <Typography variant="h6" color="secondary" align="left" component="h1" className={classes.title}>
                        {articleContent.attributes.titel}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardMedia>
              </Card>
            </a>
          </Link>
        </>
      }
    </Box>
  )
}

export default MainArticle
