Array.range = function (min, max, step) {
  if (step === null) return
  const result = []
  let index = min

  while (index <= max) {
    result.push(parseFloat(index.toFixed(2)))
    index += step
  }
  return result
}

export function createOptions(min, max, step) {
  return Array.range(min, max, step).map(value => (
    <option key={value} value={value}>{value}</option>
  ))
}
