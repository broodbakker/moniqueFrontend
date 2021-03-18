import React from 'react'
import { useRouter, NextRouter } from 'next/router'

import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, useScrollTrigger, Tabs, Tab } from '@material-ui/core';


function a11yProps(index: number) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    FontSize: "2rem",
    minHeight: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      margin: "auto",
    },
  },
  tab: {
    minHeight: theme.spacing(10),
    minWidth: theme.spacing(18),
  }
}));


function ElevationScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



const WhichRouteHighlight = (indexToTabName: { [key: string]: number }, router: NextRouter) => {
  const routeExists = router.route in indexToTabName
  if (routeExists) return indexToTabName[router.route]
  return 10

}


const Nav = (props: any) => {
  const classes = useStyles();
  const router = useRouter()

  const routeIndex = WhichRouteHighlight(indexToTabName, router)
  const [value, setValue] = React.useState(routeIndex);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    const path: string = tabNameToIndex[newValue]
    router.push(path)
  };

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar position="static" color="default" elevation={0} >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable tabs "
            className={classes.tabs}
            selectionFollowsFocus
          >
            <Tab label="Recent"{...a11yProps(0)} className={classes.tab} />
            <Tab label="History"{...a11yProps(1)} className={classes.tab} />
            <Tab label="Nature"  {...a11yProps(2)} className={classes.tab} />
            <Tab label="Human"  {...a11yProps(3)} className={classes.tab} />
            <Tab label="Quirky"  {...a11yProps(4)} className={classes.tab} />
            <Tab label="Space"  {...a11yProps(5)} className={classes.tab} />
            <Tab label="Tech"  {...a11yProps(6)} className={classes.tab} />
          </Tabs>
        </AppBar>
      </ElevationScroll>
    </div >
  );
}



export default Nav
