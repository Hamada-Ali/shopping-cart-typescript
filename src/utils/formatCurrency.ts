

const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {currency: "EGP", style: "currency"}) 


export const formatCurrency = (currency: any): any => (
    CURRENCY_FORMATER.format(currency)
)