const getIndentation = (src) => {
  const lengths = src.split('\n')
    .filter(line => line.trim().length !== 0)
    .map((str) => str.length - str.trimLeft().length)

  return Math.min(...lengths)
}

const toArray = (src) => Array.isArray(src) ? src : src ? [ src ] : []

const dedent = (strings, ...values) => {
  const indentation = getIndentation(strings.join(''))

  const parts = []

  for (let stringIndex = 0; stringIndex < strings.length; stringIndex++) {
    const trimmed = strings[stringIndex]
      .split('\n')
      .map((str, strIndex) => stringIndex === 0 || strIndex > 0 ? str.substr(indentation) : str)
      .join('\n')

    parts.push(trimmed)

    if (stringIndex < values.length) {
      parts.push(
        toArray(values[stringIndex]).join('')
      )
    }
  }

  return parts.join('').trim()
}

export {
  dedent
}
