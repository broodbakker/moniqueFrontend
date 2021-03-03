import React from 'react'

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



import { Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Router from 'next/router'
import { useRouter } from 'next/router'



function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}



const tabNameToIndex = {
  0: "/",
  1: "/geschiedenis",
  2: "/nature",
  3: "/human",
  4: "/quirky",
  5: "/space",
  6: "/tech"
}

const indexToTabName = {
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
}));

const Nav = () => {
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
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Home"{...a11yProps(0)} />
          <Tab label="geschiedenis"{...a11yProps(1)} />
          <Tab label="nature"  {...a11yProps(2)} />
          <Tab label="human"  {...a11yProps(3)} />
          <Tab label="quirky"  {...a11yProps(4)} />
          <Tab label="space"  {...a11yProps(5)} />
          <Tab label="tech"  {...a11yProps(6)} />
        </Tabs>
      </AppBar>
    </div>
  );
}



export default Nav
