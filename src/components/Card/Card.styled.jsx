import styled from 'styled-components';
import * as cardImage from '../../images/card-img.png';
import * as goitLogo from '../../images/goit-logo.svg';

export const CardWrapper = styled.li`
position: relative;
width: 380px;
height: 460px;
border-radius: 20px;
background: linear-gradient(to bottom right, #471CA9, #5736A3, #4B2A99);
display: flex;
flex-direction: column;
justify-content: space-around;

::before {
    content: '';
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 224px;
    background: #ebd8ff; 
  }
`;

export const CardTop = styled.div`
 background-image: ${`url(${goitLogo.default})`}, ${`url(${cardImage.default})`};
 background-repeat: no-repeat;
 background-size: 76px 22px, 308px 168px;
 background-position: top 20px left 20px, top 28px left 36px, 100%;
 flex-grow: 1;
 flex: 1;
`;

export const CardBottom = styled.div`
color: #EBD8FF;
font-weight: 500;
font-size: 20px;
align-items: center;
text-align: center;
flex-grow: 1;
flex: 1;
display: flex;
flex-direction: column;
gap: 16px;
justify-content: center;
`;

export const Avatar = styled.img`
margin: 0 auto;
align-items: center;
border-radius: 50px;
border: 8px solid #EBD8FF;
z-index: 10;
`;