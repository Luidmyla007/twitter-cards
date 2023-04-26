import PropTypes from 'prop-types';
import { Btn } from "./Button.styled";

export const Button = ({ onClick, text, selected }) => {  
    return (     
        <Btn type="button" onClick={onClick} selected ={selected}>{text}</Btn>          
    );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};



