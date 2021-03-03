import React from 'react'
import Link from 'next/link'
import { Typography } from '@material-ui/core';
import { navLink } from "../variables"


import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Box from '@material-ui/core/Box';

const Nav = () =>

  <Box bgcolor="blue" color="blue" p={3}>
    <nav>
      <Link href={navLink.home}>
        <a>Home</a>
      </Link>

      <Link href={navLink.quirky}>
        <a>Quirky</a>
      </Link>

      <Link href={navLink.human}>
        <a>Human</a>
      </Link>

      <Link href={navLink.geschiedenis}>
        <a>Geschiedenis</a>
      </Link>

      <Link href={navLink.nature}>
        <a>Nature</a>
      </Link>

      <Link href={navLink.spaceTech}>
        <a>space & Tech</a>
      </Link>

    </nav>

  </Box>



// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });

// const Nav = () => {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('recents');

//   const handleChange = (event: any, newValue: any) => {
//     setValue(newValue);
//   };

//   return (
//     <BottomNavigation value={value} onChange={handleChange} className={classes.root}>


//       <BottomNavigationAction label="Recents" bgcolor="green" value="recents" icon={<RestoreIcon />} />
//       <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />

//       <Link href={navLink.nature}>
//         <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
//       </Link>

//       <Link href={navLink.geschiedenis}>
//         <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
//       </Link>





//     </BottomNavigation>
//   );
// }



export default Nav
