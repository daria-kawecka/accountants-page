import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';
import { Logo } from 'components/Logo';
import { routesMap } from 'routes/routesMap';

import { messages } from './messages';
import { StyledContainer } from './styles';

export const Home: FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(routesMap.accountants);
  };

  return (
    <>
      <Logo />
      <StyledContainer>
        <Button onClick={handleButtonClick} text={messages.buttonText} />
      </StyledContainer>
    </>
  );
};
