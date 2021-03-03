import React from 'react'
import Nav from "../components/nav";
import Header from "../components/header";
import HeadStory from "../components/headStory";
import SideStory from "../components/sideStory";
import { Pagination } from '@material-ui/lab';


const Home = () => (
  <div><Header />
    <Nav />
    <HeadStory />
    <SideStory />
    <Pagination count={11} defaultPage={6} siblingCount={0} />
  </div>
)



export default Home
