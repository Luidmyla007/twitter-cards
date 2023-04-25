// import PropTypes from 'prop-types';
// import { ListItem } from './ContactItem.styled';
// import { useState } from 'react';

const ButtonFollower = (onClick) => {
    // const [color, setColor] = useState();  
    const alertStyles = { 
  backgroundColor: "red",  
};
    const handleClick = () => {
        return <button style={alertStyles}></button>
  }

    return (
        <button type="button" style={{ backgroundColor: "yellow" }} onClick={() => handleClick()} >FOLLOW</button>
        
    );
};

// Button.propTypes = {
//     id: PropTypes.string.isRequired,
//     tweets: PropTypes.number.isRequired,
//     followers: PropTypes.number.isRequired,
//     avatar: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// };


export default ButtonFollower;