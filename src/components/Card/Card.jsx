import { useState } from 'react';
import { Button } from 'components/Button/Button';
import { CardWrapper, CardTop, CardBottom, Avatar } from './Card.styled';
import { refreshUsers } from 'Fetch/fetchUsers';


export const Card = ({ id, tweets, followers, avatar, user, followed, }) => {
  const [followersCount, setFollowersCount] = useState(followers);
    const [selection, setSelection] = useState(followed);
    
    const onBtnClick = () => {
    setSelection(!selection);
    if (selection) {
      refreshUsers(id, {
        user,
        avatar,
        followed: !selection,
        tweets,
        followers: followersCount - 1,
      });
      setFollowersCount(followersCount - 1);
    }
    if (!selection) {
      refreshUsers(id, {
        user,
        avatar,
        followed: !selection,
        tweets,
        followers: followersCount + 1,
      });
      setFollowersCount(followersCount + 1);
    }
  };
    
    return (   
        <CardWrapper key={id}>
            <CardTop>             
            </CardTop>     
             <Avatar src={avatar} alt={user} width={62} height={62}/>
            <CardBottom>
                <span>{tweets} TWEETS </span>
                <span>{followersCount.toLocaleString('en-US')} FOLLOWERS </span> 
            <Button    style={{  backgroundColor: "gray" }}    text={selection ? 'FOllOWING' : 'FOLLOW'}
        onClick={onBtnClick}
        selected={selection}/>    
            </CardBottom>
        </CardWrapper>        
    );
};






