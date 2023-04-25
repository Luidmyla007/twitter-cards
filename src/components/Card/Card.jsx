// import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { CardWrapper, CardTop, CardBottom, Avatar } from './Card.styled';


const Card = ({ id, tweets, followers, avatar, user }) => {
    return (   
        <CardWrapper key={id}>
            <CardTop>
                <p>123</p>
            </CardTop>     
             <Avatar src={avatar} alt={user} width={62} height={62}/>
            <CardBottom>
                <span>{tweets} TWEETS </span>
                <span>{followers} FOLLOWERS </span> 
            {/* <Button />     */}
            </CardBottom>
        </CardWrapper>        
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired    
};


export default Card;

