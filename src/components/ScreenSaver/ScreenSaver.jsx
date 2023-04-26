import { Img } from "./ScreenSaver.styled";

export const ScreenSaver = () => {
  return (
   <Img src="https://media.giphy.com/media/2tSodgDfwCjIMCBY8h/giphy.gif"       
        sizes="(max-width: 600px) 100vw, 600px" 
        alt="cat in love" loading="lazy"></Img>  
  );
};