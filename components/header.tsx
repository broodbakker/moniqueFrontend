import React from 'react'
import Link from 'next/link'

import SearchIcon from '@material-ui/icons/Search';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Toolbar, Typography, InputBase } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const useStyles = makeStyles((theme: Theme) => {
  const primary = theme.palette.primary.main
  const secondary = theme.palette.secondary.main

  return (
    createStyles({
      root: {
        flexGrow: 1,
        background: `linear-gradient(90deg, ${primary} 2%, ${secondary} 100%)`
      },
      toolbar: {
        minHeight: theme.spacing(10),
        [theme.breakpoints.up('sm')]: {
          minHeight: theme.spacing(14),
        },
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
      logoTitle: {
        flexGrow: 1,
        display: 'block',
        textDecoration: "none",
        color: "white",
        [theme.breakpoints.up('sm')]: {
          fontSize: "1.2rem",
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '12ch',
        '&:focus': {
          width: '20ch',
        }
      },
      button: {
        marginRight: theme.spacing(4),
        borderRadius: theme.spacing(1),
        textTransform: "none",
        color: "white",
        borderColor: "white",
        fontSize: 14,
        [theme.breakpoints.up('sm')]: {
          fontSize: 16,
        },
      }

    }))
}
);


const Header = () => {
  const classes = useStyles();
  return (
    <Box color="white" className={classes.root} >
      <Toolbar className={classes.toolbar} >


        <Link href="/" >
          <a className={classes.logoTitle} >
            Logo
          </a>
        </Link>



        <Button
          variant="outlined"

          size="small"
          startIcon={<ContactPhoneIcon />}
          className={classes.button}
        >
          Contact
      </Button>



        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </Box>
  )
}

export default Header
