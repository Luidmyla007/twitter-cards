import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0; 
  backgrownd-color: #AE7BE3;
`;

export const Header = styled.header`
background-color: rgba(178, 23, 230, 1);
background-image: linear-gradient(to right, rgba(178, 23, 230, 1), rgba(197, 185, 201, 1));
border-bottom: 8px solid #EBD8FF;
padding-left: 100px;
padding-bottom: 20px;
padding-top: 5px;
  > nav {
    display: flex;
    gap: 30px;
    justify-content: start;
    max-height: 40px;   
  }
`;

export const Title = styled.h1`
color: rgba(31, 10, 38, 1);
padding-left: 10px;
font-size: 60px;
text-shadow: 2px 2px 4px rgba(219, 191, 206, 1);
letter-spacing: 1.7;
margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
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