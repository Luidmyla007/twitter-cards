import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 380px;
  height: 460px;
border-radius: 20px;
background: linear-gradient(to bottom right, #471CA9, #5736A3, #4B2A99);
display: flex;
flex-direction: column;
justify-content: space-around;;
`;

export const CardTop = styled.div`
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
 border: 5px solid #EBD8FF;
z-index: 10;
`;