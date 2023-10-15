import { StyledButton } from './BtnStyled';

export const Button = ({ onClick }) => {
  return <StyledButton onClick={() => onClick()}>Load more</StyledButton>;
};
