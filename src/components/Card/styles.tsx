import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  width: 300px;
  height: 376px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  box-shadow: 0 1px 13px 0 ${({ theme }) => theme.colors.alphaBlack};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TopContainer = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  margin-bottom: 24px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  min-height: 24px;
  align-items: flex-end;
  column-gap: 4px;
  max-width: 100%;
  word-break: break-all;
`;
