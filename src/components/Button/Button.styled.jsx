import styled from 'styled-components';

export const Btn = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  z-index:5;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #EBD8FF; 
  color: #373737;
  font-weight: 500;
  font-size: 20px;
  text-align: center; 
   &:hover,
  &:focus {
    transform: scale(1.1);
    border: 1px solid rgba(31, 10, 38, 1);
    box-shadow: 0px 8px 8px 4px rgba(30, 46, 46, 1);
  }
}  
`;



