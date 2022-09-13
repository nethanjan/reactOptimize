function Currency(currency: string) {
  let currencySymbol = ''

  switch (currency) {
    case 'EUR':
      currencySymbol = '€'
      break
    case 'GBP':
      currencySymbol = '£'
      break
    case 'USD':
      currencySymbol = '$'
      break
    default:
      currencySymbol = '€'
      break
  }

  return currencySymbol
}

export default Currency
