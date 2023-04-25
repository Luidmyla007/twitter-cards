import { useLocation } from 'react-router-dom';
import {TweetsWrapper, TweetsContainer, GoBackWrapper, Link } from "./Tweets.styled";
import { FaArrowLeft } from "react-icons/fa";


function Tweets() {
  const location = useLocation(); 


  return (
      <TweetsWrapper>
      <GoBackWrapper>
        <Link to={location.state?.from ?? '/'}><FaArrowLeft/>Go back</Link>
      </GoBackWrapper>  
      <TweetsContainer> 
        <h1>Check out our cards and follow us! Go!</h1>      
      </TweetsContainer>
    </TweetsWrapper> 
  );
}

export default Tweets;