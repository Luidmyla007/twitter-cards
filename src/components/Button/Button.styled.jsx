import styled from 'styled-components';

export const Btn = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: ${p => (p.selected ? '#5cd3a8' : '#ebd8ff')};
  color: #373737;
  font-weight: 500;
  font-size: 20px;
  text-align: center;    
}  
`;



