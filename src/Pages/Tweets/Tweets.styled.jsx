import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TweetsWrapper = styled.div` 
  background-color: #AE7BE3;
  min-height: 100vh;
  padding-top: 40px;
 
`;

export const TweetsContainer = styled.div`
  padding: 30px 150px;
  background-color: #AE7BE3;
  align-items: center;
  display: flex;  
  gap 30px;
  justify-content: space-around
  flex-wrap: nowrap;
`;

export const GoBackWrapper = styled.div`
  padding: 0 150px;
  margin-bottom: 5px;
`;

export const Link = styled(NavLink)`
  margin: 0 auto;
  width: 100px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  transform: scale(1);
  box-shadow: none;
  &:first child{
  margin-right: 30px;
  box-shadow: 0px 4px 4px 2px rgba(30, 46, 46, 1);
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
    border: 1px solid rgba(31, 10, 38, 1);
    box-shadow: 0px 8px 8px 4px rgba(30, 46, 46, 1);
  }
  &.active {  
    background-color: #5CD3A8;
    &:hover,
    &:focus {
      border: none;
      color: inherit;
   }  
`;