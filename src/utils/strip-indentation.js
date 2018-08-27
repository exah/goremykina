const dedent = (strings, ...values) => {
  const lineLengths = strings.join('')
    .split('\n')
    .filter(line => line.trim().length !== 0)
    .map(line => line.length - line.trimLeft().length)

  const indentation = Math.min(...lineLengths)

  const parts = []

  for (let stringIndex = 0; stringIndex < strings.length; stringIndex++) {
    const trimmed = strings[stringIndex]
      .split('\n')
      .map((line, lineIndex) => stringIndex === 0 || lineIndex > 0 ? line.substr(indentation) : line)
      .join('\n')

    parts.push(trimmed)

    if (stringIndex < values.length) {
      parts.push(values[stringIndex])
    }
  }

  return parts.join('').trim()
}

export {
  dedent
}
