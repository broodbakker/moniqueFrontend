import React from 'react'

import content from "../content/content.json"


import { makeStyles, fade, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return (
    createStyles({
      root: {
        padding: theme.spacing(1)
      },
      media: {
        height: "100%",
      },
      image: {
        flex: "0 0 7.6em"
      },
      title: {
        color: fade(theme.palette.text.primary, 0.6),
        fontWeight: 600
      },
      article: {
        backgroundColor: theme.palette.grey[50],
        height: theme.spacing(20)
      },
    }))
}
);

const ListOfArticles = () => {
  const classes = useStyles();
  return (
    <Box color="blue" className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}  >
          <Box p={1} boxShadow={1} borderRadius={4} display="flex" className={classes.article} >
            <Box className={classes.image}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>
            </Box>
          </Box>


        </Grid>

        <Grid item xs={12} sm={6}  >
          <Box p={1} height="5rem" boxShadow={1} borderRadius={4} display="flex">

            <Box className={classes.test}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>

            </Box>
          </Box>


        </Grid>

        <Grid item xs={12} sm={6}  >
          <Box p={1} height="5rem" boxShadow={1} borderRadius={4} display="flex">

            <Box className={classes.test}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>

            </Box>
          </Box>


        </Grid>


        <Grid item xs={12} sm={6}  >
          <Box p={1} height="5rem" boxShadow={1} borderRadius={4} display="flex">

            <Box className={classes.test}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>

            </Box>
          </Box>


        </Grid>

        <Grid item xs={12} sm={6}  >
          <Box p={1} height="5rem" boxShadow={1} borderRadius={4} display="flex">

            <Box className={classes.test}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>

            </Box>
          </Box>


        </Grid>


        <Grid item xs={12} sm={6}  >
          <Box p={1} height="5rem" boxShadow={1} borderRadius={4} display="flex">

            <Box className={classes.test}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>

            </Box>
          </Box>


        </Grid>


        <Grid item xs={12} sm={6}  >
          <Box p={1} height="5rem" boxShadow={1} borderRadius={4} display="flex">

            <Box className={classes.test}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>

            </Box>
          </Box>


        </Grid>


        <Grid item xs={12} sm={6}  >
          <Box p={1} height="5rem" boxShadow={1} borderRadius={4} display="flex">

            <Box className={classes.test}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>

            </Box>
          </Box>


        </Grid>


        <Grid item xs={12} sm={6}  >
          <Box p={1} height="5rem" boxShadow={1} borderRadius={4} display="flex">

            <Box className={classes.test}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>

            </Box>
          </Box>


        </Grid>


        <Grid item xs={12} sm={6}  >
          <Box p={1} height="5rem" boxShadow={1} borderRadius={4} display="flex">

            <Box className={classes.test}  >
              <CardMedia
                image={content.img}
                title="Contemplative Reptile"
                className={classes.media}
              />
            </Box>

            <Box
              component="p"
              my={4}
              pl={2}
              textOverflow="ellipsis"
              overflow="hidden"
              flexShrink={2}
            >
              <Typography color="secondary" align="left" variant="caption" component="span" className={classes.title} >
                {content.title}
              </Typography>

            </Box>
          </Box>


        </Grid>




      </Grid >
    </Box >
  )
}






export default ListOfArticles
