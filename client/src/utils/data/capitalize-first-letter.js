export function capitalizeFirstLetter(symbol) {
  if (symbol === null || typeof symbol !== "string" || symbol.length === 0) {
    return symbol;
  }

  const firstChar = symbol.charAt(0);
  if (/[a-zA-Zа-яА-Я]/.test(firstChar)) {
    return firstChar.toUpperCase() + symbol.slice(1);
  } else {
    return symbol;
  }
}
