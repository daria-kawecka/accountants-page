import { useCallback, useEffect, useState } from 'react';
import { AccountantResponseType } from './types';
import { INITIAL_ACCOUNTANTS_RESPONSE } from './constants';

export const useAccountantsData = (page: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [accountantsData, setAccountantsData] =
    useState<AccountantResponseType>(INITIAL_ACCOUNTANTS_RESPONSE);

  const fetchPeopleInformation = useCallback(() => {
    setIsLoading(true);
    setIsError(false);

    fetch(
      `https://randomuser.me/api/?seed=infakt&gender=female&results=5&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAccountantsData((prevData) => ({
          ...prevData,
          results: [...prevData.results, ...data.results],
        }));

        setIsLoading(false);
      })
      .catch((error) => setIsError(true));
  }, [page]);

  useEffect(() => {
    fetchPeopleInformation();
  }, [fetchPeopleInformation]);

  return { isLoading, isError, accountantsData };
};
