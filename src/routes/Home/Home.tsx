import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from 'components/Logo';
import { Button } from 'components/Button';

import { routesMap } from 'routes/routesMap';
import { messages } from './messages';

export const Home: FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(routesMap.accountants);
  };

  return (
    <>
      <Logo />
      <Button onClick={handleButtonClick} text={messages.buttonText} />
    </>
  );
};
