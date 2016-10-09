import { isFizz } from './fizz'
import { isBuzz } from './buzz'

const fizzbuzz = (number) => {
  let result = ''
  if (isFizz(number) && isBuzz(number)) {
    return 'fizzbuzz'
  }
  if (isFizz(number)) {
    return 'fizz'
  }
  if (isBuzz(number)) {
    return 'buzz'
  }
  return number
}

export {
  fizzbuzz,
}