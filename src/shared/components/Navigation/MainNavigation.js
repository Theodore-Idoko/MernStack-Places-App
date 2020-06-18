import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElement/Backdrop';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  };

  const closeDrawerHandler= () => {
    setDrawerIsOpen(false);
  };
// The Button which has the span is used to create Hamburger menu which through the media query only appears in mobile view
// The SideDrawer is used to display the Navlinks when the hamburger menu is opened. Here the media query is used to display the navlinks as rows
// The openDrawerHAndler and closeDrawerHanler is used for opening and closing the SideDrawer
// The useState manages the opening and closing of the drawer
// Backdrop is a utility which helps in closing the drawer
  return (
  <React.Fragment>
    {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
    
    <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
      <nav className="main-navigation__drawer-nav">
      <NavLinks /> 
      </nav>
   </SideDrawer> 
            
  <MainHeader>
    <button className="main-navigation__menu-btn" onClick={openDrawerHandler}> 
      <span />
      <span />
      <span />
    </button> 
    <h1 className="main-navigation__title">
      <Link to="/"> Your Places</Link>
    </h1>
    <nav className="main-navigation__header-nav">
      <NavLinks />
    </nav>
  </MainHeader>
  </React.Fragment>
  )};

export default MainNavigation;