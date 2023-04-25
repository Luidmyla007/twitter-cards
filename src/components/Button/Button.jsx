import { Btn} from "./Button.styled";

export const Button = ({ onClick, text, selected }) => {  
    return (     
        <Btn type="button" onClick={onClick} selected ={selected}>{text}</Btn>          
    );
};



