import React from 'react';
import Card from '../../shared/components/UIElement/Card';
import UserItem from './UserItem';
import './UsersList.css';

const UsersList = props => {
  if(props.items.length === 0){
    return <div className="center">
      <Card>
        <h2>No users found.</h2>
      </Card>
    </div>
  } // when there is nothing passed down from props.items, above is displayed in the ui
  // props.items gotten from the users is passed down to the UserItem
  return(
  <ul className="users-list">
    {props.items.map(user => 
    <UserItem 
      key={user.id} 
      id={user.id} 
      image={user.image} 
      name={user.name} 
      placeCount={user.places}
      />
      )}
  </ul>
  )};

export default UsersList;