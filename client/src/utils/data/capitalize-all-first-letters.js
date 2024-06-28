export function capitalizeAllFirstLetters(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return sentence;
  }

  return sentence
    .split(" ")
    .map((word) => {
      const firstChar = word.charAt(0);
      if (/[a-zA-Zа-яА-Я]/.test(firstChar)) {
        return firstChar.toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    .join(" ");
}
