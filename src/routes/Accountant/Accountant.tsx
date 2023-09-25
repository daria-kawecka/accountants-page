import { Button } from 'components/Button';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { messages } from './messages';
import { Text } from 'components/Text';

export const Accountant: FC = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Text
        content={`${messages.header} ${name}`}
        size={'medium'}
        color={'black'}
      />
      <Button onClick={handleButtonClick} text={messages.goBack} />
    </>
  );
};
