export const formatDateToLocaleString = (
    date: string,
    locales: Intl.LocalesArgument,
    options: Intl.DateTimeFormatOptions,
): string => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString(locales, options);
};

export const formatNumberToUsDollar = (value: number): string => {
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return USDollar.format(value);
};
