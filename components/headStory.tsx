import React from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Image from "material-ui-image";
import content from "../content/content.json"
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

console.log(content)


const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  media: {
    height: "100%",
  },
});


const HeadStory = () => {
  const classes = useStyles();

  return (
    <Box bgcolor="orange" color="blue" p={3}>
      <Box p={3} bgcolor="yellow" height="40vw" borderRadius={4} >

        <Card className={classes.root}>

          <CardMedia
            image={content.img}
            title="Contemplative Reptile"
            className={classes.media}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {content.title}
              </Typography>

            </CardContent>
          </CardMedia>



        </Card>
      </Box>

    </Box >)
}


export default HeadStory
