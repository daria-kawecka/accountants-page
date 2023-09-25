import { styled } from 'styled-components';

export const StyledButton = styled.button`
  min-width: 150px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
`;
