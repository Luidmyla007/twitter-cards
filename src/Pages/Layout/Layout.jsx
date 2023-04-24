import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link, Title } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { AiOutlineHome } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";


export const Layout = () => {
  return (
    <Container>      
      <Header><Title><FaGrinStars />FollowUs</Title>
        <nav>
          <Link to="/"><AiOutlineHome/> Home</Link>
          <Link to="/tweets"><FaRegAddressCard/> Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>      
    </Container>
  );
};