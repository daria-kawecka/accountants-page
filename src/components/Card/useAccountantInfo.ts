import { messages } from 'components/Card/messages';
import { AccountantType } from 'routes/Accountants/types';

export const useAccountantInfo = (accountant: AccountantType) => {
  const yourAccountant =
    accountant.gender === 'female'
      ? messages.yourAccountantFemale
      : messages.yourAccountantMale;

  const getPrice = () => {
    const min = 20;
    const max = 50;

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (randomNumber * 10).toString();
  };

  const textData = {
    headerLabel: yourAccountant,
    headerText: accountant.name.first + ' ' + accountant.name.last,
    description: [
      {
        label: messages.accountantEmail,
        text: accountant.email,
        withUnderline: true,
      },
      {
        label: messages.accountantPhone,
        text: accountant.cell,
      },
      {
        label: messages.accountantPrice,
        text: getPrice(),
        span: 'PLN',
      },
    ],
  };

  return { textData };
};
