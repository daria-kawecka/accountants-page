import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardProps } from './types';
import {
  StyledContainer,
  TopContainer,
  HeaderContainer,
  DescriptionContainer,
  StyledTextContainer,
} from './styles';
import { messages } from './messages';

import { Avatar } from 'components/Avatar';
import { Text } from 'components/Text/Text';
import { useAccountantInfo } from 'components/Card/useAccountantInfo';
import { Button } from 'components/Button';

export const Card: FC<CardProps> = ({ accountantInfo }) => {
  const { textData } = useAccountantInfo(accountantInfo);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`${accountantInfo.name.first}-${accountantInfo.name.last}`);
  };

  return (
    <StyledContainer>
      <TopContainer>
        <Avatar
          imgSrc={accountantInfo.picture.medium}
          imgAlt={`${accountantInfo.name}-avatar`}
        />
        <HeaderContainer>
          <Text
            content={textData.headerLabel}
            size={'medium'}
            color={'grey800'}
          />
          <Text
            content={textData.headerText}
            size={'large'}
            color={'black'}
            weight={'bold'}
          />
        </HeaderContainer>
      </TopContainer>
      {textData.description.map((descriptionElement) => (
        <DescriptionContainer
          key={descriptionElement.label + descriptionElement.text}
        >
          <Text
            content={descriptionElement.label}
            size={'small'}
            color={'grey800'}
          />
          <StyledTextContainer>
            <Text
              content={descriptionElement.text}
              size={'medium'}
              color={'black'}
              withUnderline={descriptionElement.withUnderline}
            />
            {descriptionElement.span && (
              <Text
                content={descriptionElement.span}
                size={'xSmall'}
                color={'black'}
                withUnderline={descriptionElement.withUnderline}
              />
            )}
          </StyledTextContainer>
        </DescriptionContainer>
      ))}
      <Button onClick={handleButtonClick} text={messages.buttonText} />
    </StyledContainer>
  );
};
