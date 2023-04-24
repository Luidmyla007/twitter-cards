import { Hearts } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <Hearts
 height="500"
  width="500"
  color="#bf16e0"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </StyledLoader>
  );
};