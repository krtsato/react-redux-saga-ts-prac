export const firstCharaUpper = (alphabet: string): string => {
  const firstChara = alphabet.charAt(0).toUpperCase()
  const restChara = alphabet.slice(1)
  return `${firstChara}${restChara}`
}
