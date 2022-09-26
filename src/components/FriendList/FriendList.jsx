import PropTypes from 'prop-types';
import {List} from "components/FriendList/FriendList.styled"
import { FriendListItem } from './FriendListItem';
export const FriendList = ({friends}) => {
    return (
<List>{friends.map(({id,name, isOnline, avatar}) => 
(   <FriendListItem key={id} name={name}
    isOnline={isOnline}
    avatar={avatar}/>
))}
</List>
    )
    }
    
    
FriendList.propTypes = {
        friends: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.number.isRequired,
            }
        ))}