import PropTypes from 'prop-types';
import {Item, Span,Img, Text} from "components/FriendList/FriendListItem.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
<Item status={isOnline}>
    <Span status={isOnline}></Span> 
    <Img src={avatar} alt={name}></Img>
    <Text>{name}</Text>
  </Item>)
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  };