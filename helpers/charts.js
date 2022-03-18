// Helper functions to improve readability of the chart
export function readableHash(hash, chars = 3) {
  return `${hash.substr(0, chars)}...${hash.substr(hash.length - chars)}`
}
export function randomRgbVal() {
  return Math.round(Math.random() * 255)
}
export function randomRgb(r = 1, g = 1, b = 1) {
  return `rgb(${r ? randomRgbVal() : 0}, ${g ? randomRgbVal() : 0}, ${
    b ? randomRgbVal() : 0
  })`
}
