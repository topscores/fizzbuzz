import * as fizz from './fizz'
import * as buzz from './buzz'

const fizzbuzz = (number) => {
  let result = ''
  if (fizz.isFizz(number) && buzz.isBuzz(number)) {
    return 'fizzbuzz'
  }
  if (fizz.isFizz(number)) {
    return 'fizz'
  }
  if (buzz.isBuzz(number)) {
    return 'buzz'
  }
  return number
}

export {fizzbuzz}