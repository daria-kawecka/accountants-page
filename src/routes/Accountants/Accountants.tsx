import { Card } from 'components/Card';
import { FC, useMemo, useState } from 'react';
import { CardsContainer } from './styles';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { useAccountantsData } from './hook';
import { messages } from './messages';
import { FadeLoader } from 'react-spinners';

export const Accountants: FC = () => {
  const [page, setPage] = useState(1);
  const { accountantsData, isLoading, isError } = useAccountantsData(page);
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const shouldRenderCards = useMemo(() => {
    return accountantsData.results && !isLoading && !isError;
  }, [accountantsData.results, isError, isLoading]);

  return (
    <>
      <Logo />
      {isLoading && <FadeLoader color='#1E88E5' />}
      {isError && <div>Coś poszło nie tak...</div>}
      {accountantsData && shouldRenderCards && (
        <>
          <CardsContainer>
            {accountantsData.results.map((accountant) => (
              <Card accountantInfo={accountant} key={accountant.login.uuid} />
            ))}
          </CardsContainer>
          <Button onClick={loadMore} text={messages.showMoreButton} />
        </>
      )}
    </>
  );
};
