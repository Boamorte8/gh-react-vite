export const currencyFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;
