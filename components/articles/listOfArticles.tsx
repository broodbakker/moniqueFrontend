import React from 'react'

import Link from 'next/link'

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { makeStyles, fade, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography, CardMedia } from '@material-ui/core';
import { isoDateToStandardDate } from "../../functions/dateFormating"
const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      root: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
      },
      media: {
        height: "100%",
      },
      image: {
        flex: "0 0 6em"
      },
      title: {
        marginLeft: theme.spacing(1),
        fontWeight: 600,
        margin: "auto",
        color: theme.palette.primary.dark,
        lineHeight: 1.3
      },
      test: {
        lineHeight: 0.3
      },
      article: {
        backgroundColor: theme.palette.grey[50],
        height: theme.spacing(20),
        '&:hover': {
          background: "#f1f4f8",
        },

      },
      link: {
        textDecoration: "none",
        width: "100%",

      }, time: {
        color: theme.palette.primary.dark,
        marginLeft: theme.spacing(1),
        position: "absolute",
        bottom: 0,
        width: "100%"

      },
      date: {
        fontSize: 12,
      },
      content: {
        position: "relative",
        marginRight: theme.spacing(2),
        flexGrow: 1
      }
    }))
}
);

const ListOfArticles = ({ pageIndex, articleListContent }: any) => {
  const classes = useStyles();
  return (
    <Box color="blue" className={classes.root} >
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >

        {articleListContent.map((content: any, index: any) => {
          const update = content.slug
          const link = `/posts/${update}`;
          const newDate = isoDateToStandardDate(content.attributes.date)

          return (
            <Grid container item xs={12} sm={6} key={index}>
              <Link href={link} >
                <a className={classes.link} >
                  <Box p={1} boxShadow={1} borderRadius={4} display="flex" className={classes.article} >
                    <Box className={classes.image}  >
                      <CardMedia
                        image={content.attributes.image}
                        title="Contemplative Reptile"
                        className={classes.media}
                      />
                    </Box>

                    <div className={classes.content}>
                      <Typography align="left" variant="caption" component="p" className={classes.title}>
                        {content.attributes.titel}
                      </Typography>

                      <Box className={classes.time}>
                        <AccessTimeIcon fontSize="small" className={classes.date} />
                        <Typography variant="subtitle2" component="time" display="inline" className={classes.date}>
                          {" "}{newDate}
                        </Typography>
                      </Box>
                    </div>
                  </Box>
                </a>
              </Link>
            </Grid>
          )
        })}
      </Grid >
    </Box >
  )
}


export default ListOfArticles
