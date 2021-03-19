import React from 'react'


import SearchIcon from '@material-ui/icons/Search';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Toolbar, Typography, InputBase, Hidden, IconButton, AppBar, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, useScrollTrigger } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { Menu } from '@material-ui/icons'
import clsx from 'clsx';
import { MoveToInbox, Mail } from '@material-ui/icons'
import HistoryIcon from '@material-ui/icons/History';
import ContactMail from '@material-ui/icons/ContactMail';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import NatureIcon from '@material-ui/icons/Nature';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import FlightIcon from '@material-ui/icons/Flight';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useRouter, NextRouter } from 'next/router'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) => {
  const primary = theme.palette.primary.main
  const secondary = theme.palette.secondary.main

  return (
    createStyles({
      root: {
        flexGrow: 1,
        background: `linear-gradient(90deg, ${primary} 40%, ${secondary} 100%)`
      },
      toolbar: {
        minHeight: theme.spacing(10),
        [theme.breakpoints.up('sm')]: {
          minHeight: theme.spacing(14),
        },
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
        width: 140,
        [theme.breakpoints.up('md')]: {
          width: "auto",
        },
        marginLeft: theme.spacing(1),

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
        fontSize: 16,
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
        fontSize: 12,
      },
      title: {
        fontSize: 20,
        fontWeight: 600,

        letterSpacing: 2
      },
      subtitle: {
        fontSize: 12,
        fontWeight: 100,
        fontStyle: "italic",
      },
      menuButton: {
        marginLeft: theme.spacing(2),
        color: "white"
      },
      list: {
        width: 250,
      },
      contactLink: { textDecoration: "none", },
      listItem: {
        '&:hover': {
          backgroundColor: "rgba(16,104,158,0.2)",
        },
      }
    }))
}
);

const tabNameToIndex: any = {
  0: "/",
  1: "/history",
  2: "/nature",
  3: "/human",
  4: "/quirky",
  5: "/space",
  6: "/tech"
}

const indexToTabName: { [key: string]: number } = {
  "/": 0,
  "/history": 1,
  "/nature": 2,
  "/human": 3,
  "/quirky": 4,
  "/space": 5,
  "/tech": 6
}

const WhichRouteHighlight = (indexToTabName: { [key: string]: number }, router: NextRouter) => {
  const routeExists = router.route in indexToTabName
  if (routeExists) return indexToTabName[router.route]
  return 10
}


const Header = () => {
  const router = useRouter()
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const routeIndex = WhichRouteHighlight(indexToTabName, router)
  const [value, setValue] = React.useState(routeIndex);


  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState(open)
  };




  const icons = (index: number) => {
    if (index === 0) return <AccessTimeIcon />
    if (index === 1) return <HistoryIcon />
    if (index === 2) return <NatureIcon />
    if (index === 3) return <AccessibilityIcon />
    if (index === 4) return <BrightnessHighIcon />
    if (index === 5) return <FlightIcon />
    if (index === 6) return <BatteryChargingFullIcon />


  }

  const Test = ({ index, text }: any) => {
    const link = text === "Recent" ? "/" : `/${text}`
    return (
      <Link href={link.toLowerCase()}>
        <ListItem button key={text} className={classes.listItem}>
          <ListItemIcon >{icons(index)}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    )
  }


  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ListItem button className={classes.listItem}>
        <ListItemText primary={"Menu"} />
      </ListItem>
      <Divider />
      <List>
        {['Recent', 'history', 'Nature', 'Human', 'Quirky', 'Space', 'Tech'].map((text, index) => (
          <Test text={text} index={index} />
        ))}
      </List>
      <Divider />
      <List>
        {['Contact'].map((text, index) => (
          <ListItem button key={text} className={classes.listItem}>
            <ListItemIcon>{index % 2 === 0 ? <ContactMail /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div >
  );

  return (
    <>
      <Box color="white" className={classes.root} >
        <Toolbar className={classes.toolbar} >
          <Link href="/" >
            <a className={classes.logoTitle} >
              <span className={classes.title}>Cognovi</span>{" "}
              <Hidden xsDown>
                <span className={classes.subtitle} >het beste wetenschappelijke nieuws</span>
              </Hidden>
            </a>
          </Link>
          <Hidden xsDown>
            <Link href="/contact" >
              <a className={classes.contactLink}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ContactPhoneIcon />}
                  className={classes.button}
                >
                  Contact
      </Button>
              </a>
            </Link>
          </Hidden>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon fontSize="small" />
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

          <Hidden smUp>
            <IconButton className={classes.menuButton} onClick={toggleDrawer(true)}>
              <Menu fontSize="small" />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Box>

      <Drawer open={state} onClose={toggleDrawer(false)}>
        <nav>
          {list()}
        </nav>
      </Drawer>
    </>
  )
}

export default Header
