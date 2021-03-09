import React from 'react'

import { Container, Box, Button, Card, CardMedia, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CreateIcon from '@material-ui/icons/Create';

import content from "../content/content.json"
import LeesMeer from './leesMeer';

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      root: {
        height: "100%",


      },
      title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(2)
      },
      subtitle: {
        marginBottom: theme.spacing(2)
      },
      con: {
        maxHeight: theme.spacing(100),
        maxWidth: 600,
        margin: "0 auto"
      },
      margin: {
        marginRight: theme.spacing(2),
      },
      content: {
        marginTop: theme.spacing(5),
      },
      media: {
        height: "100%",
        position: "relative"
      },
      author: { marginRight: theme.spacing(2) },
      tags: { marginBottom: theme.spacing(10) },

    })
  )
});

const ContentPost = ({ slug }: any) => {
  const post = content.main[slug]
  const classes = useStyles();
  return (
    <div>
      {slug && <div>   <Box height="60vw" className={classes.con}>
        <Card className={classes.root}>
          <CardMedia
            image={post.img}
            title={classes.content}
            className={classes.media}
            src="test"
          >
          </CardMedia>
        </Card>
      </Box>
        <div>
          <Typography variant="h6" component="h1" className={classes.title}>
            {post.title}
          </Typography>
          <div className={classes.subtitle}>


            <CreateIcon fontSize="small" />
            <Typography variant="subtitle2" component="p" display="inline" className={classes.author} >
              {" "}{post.author}{" "}
            </Typography>

            <Typography component="p" display="inline" >

            </Typography>


            <AccessTimeIcon fontSize="small" />
            <Typography variant="subtitle2" component="time" display="inline"  >
              {" "}{post.datum}{" "}
            </Typography>


          </div>

          <div className={classes.tags}>
            <Button variant="contained" size="small" color="primary" className={classes.margin}>
              science
        </Button>

            <Button variant="contained" size="small" color="primary" className={classes.margin}>
              health
        </Button>

            <Button variant="contained" size="small" color="primary" className={classes.margin}>
              monique
        </Button>
          </div>
        </div>





        <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
        <LeesMeer nameOfCategory={post.category} />
      </div>}




    </div>
  )
}



export default ContentPost
