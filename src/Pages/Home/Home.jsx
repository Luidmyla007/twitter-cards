import { ScreenSaver } from 'components/ScreenSaver/ScreenSaver';
import { HomeContainer, MainTitle } from './Home.styled';

function Home() {
  return (
      <HomeContainer>
      <ScreenSaver/>
      <MainTitle>Check out our cards <br></br> and follow us! Go!</MainTitle>            
      </HomeContainer>
  );
}

export default Home;