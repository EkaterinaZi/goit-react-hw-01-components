import PropTypes from 'prop-types';
import {List, Item, Span,Img, Text} from "components/FriendList/FriendList.styled"

export const FriendList = ({friends}) => {
    return (
<List>{friends.map(({avatar, name, isOnline, id}) => 
(   <Item status={isOnline} key={id}>
    <Span status={isOnline}></Span> 
    <Img src={avatar} alt={name}></Img>
    <Text>{name}</Text>
  </Item>
))}
</List>
    )
    }
    
    
FriendList.propTypes = {
        friends: PropTypes.arrayOf(
            PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,}
        ))}