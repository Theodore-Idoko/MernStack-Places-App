import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css'

const SideDrawer = props => {
const content =(
  <CSSTransition 
  in={props.show} 
  timeout={200} 
  classNames="slide-in-left"
  mountOnEnter
  unmountOnExit
  >
    <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
   </CSSTransition>
);
// This helps in opening the hamburger menu when the in={true}
// as well as displaying the map when the in={true}
// it helps in css animation
return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
};

export default SideDrawer;