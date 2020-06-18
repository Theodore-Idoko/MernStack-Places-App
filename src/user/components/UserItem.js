import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.css';
import Avatar from '../../shared/components/UIElement/Avatar';
import Card from '../../shared/components/UIElement/Card';


const UserItem = props => {

  // UserItem is used to display what is passed down from the UserList
  // The Avatar is a utility specifically used for styling the image, 
  // the image gotten from the Userlist is passed down as prop to the Avatar where the styling is done
  // The link serves the puporse that when a user is clicked, it takes us to the places of the user with particular id  
  // through the link the userId is passed down t UserPlaces
  return(
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name}/>
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</h3> 
        </div>
        </Link>
      </Card>
    </li>
  )
};

export default UserItem;