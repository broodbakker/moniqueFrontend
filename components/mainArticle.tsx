import React from 'react'

import { Box, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import content from "../content/content.json"



const useStyles = makeStyles((theme: Theme) => {
  console.log(theme.palette.grey[50])
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


const MainArticle = () => {
  const classes = useStyles();
  return (
    <Box height="40vw" className={classes.container}>
      <Card className={classes.root}>
        <CardMedia
          image={content.img}
          title={classes.content}
          className={classes.media}
          src="test"
        >
          <CardContent className={classes.content}>
            <Box>
              <Typography variant="h6" color="secondary" align="left" component="h1" className={classes.title}>
                {content.title}
              </Typography>
            </Box>
          </CardContent>
        </CardMedia>
      </Card>
    </Box>

  )
}

export default MainArticle
