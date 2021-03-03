import React from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import content from "../content/content.json"
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  media: {
    height: "100%",
  },
  test: {
    flex: "0 0 7.6em"

  }
});


const SideStory = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="green" color="blue" p={3}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box className={classes.test} bgcolor="orange" >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={3}
            >
              {content.title}
            </Box>
          </Box>




        </Grid>

        <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid> <Grid item xs={12} sm={6} md={4} >
          <Box p={1} bgcolor="yellow" height="5rem" borderRadius={4} display="flex">

            <Box width="10rem" bgcolor="orange" >
              foto
       </Box>

            <Box
              component="p"
              my={4}
              textOverflow="ellipsis"
              overflow="hidden"
              bgcolor="background.paper"
              flexShrink={2}
            >
              Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads  Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads My Textsdfads
    </Box>
          </Box>


        </Grid>
      </Grid>
    </Box >
  )
}






export default SideStory
