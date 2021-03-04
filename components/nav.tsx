import React from 'react'
import { useRouter } from 'next/router'

import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, useScrollTrigger, Tabs, Tab, Props } from '@material-ui/core';


function a11yProps(index: number) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const tabNameToIndex: any = {
  0: "/",
  1: "/geschiedenis",
  2: "/nature",
  3: "/human",
  4: "/quirky",
  5: "/space",
  6: "/tech"
}

const indexToTabName: any = {
  "/": 0,
  "/geschiedenis": 1,
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
    minHeight: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      margin: "auto",
    },
  },
  tab: {
    minHeight: theme.spacing(10),
    minWidth: theme.spacing(32)
  }
}));


function ElevationScroll(props: Props) {
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

const Nav = (props: Props) => {
  const classes = useStyles();
  const router = useRouter()
  const num: number = indexToTabName[router.route]

  const [value, setValue] = React.useState(num);

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
            aria-label="scrollable  tabs "
            className={classes.tabs}
          >
            <Tab label="Home"{...a11yProps(0)} className={classes.tab} />
            <Tab label="geschiedenis"{...a11yProps(1)} className={classes.tab} />
            <Tab label="nature"  {...a11yProps(2)} className={classes.tab} />
            <Tab label="human"  {...a11yProps(3)} className={classes.tab} />
            <Tab label="quirky"  {...a11yProps(4)} className={classes.tab} />
            <Tab label="space"  {...a11yProps(5)} className={classes.tab} />
            <Tab label="tech"  {...a11yProps(6)} className={classes.tab} />
          </Tabs>
        </AppBar>
      </ElevationScroll>
    </div >
  );
}


export default Nav
