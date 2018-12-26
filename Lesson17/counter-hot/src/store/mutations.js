export const increment = state => {
  state.count+=10
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}
