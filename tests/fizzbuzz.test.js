import { expect } from 'chai'
import { isFizz } from '../src/fizz'
import { fizzbuzz } from '../src/fizzbuzz'
describe('isFizz', () => {
  it('Should return true if number % 3 equal 0', () => {
    expect(isFizz(3)).to.equal(true)
    expect(isFizz(15)).to.equal(true)
  })
  it('Should return false if number % 3 not equal 0', () => {
    expect(isFizz(2)).to.equal(false)
    expect(isFizz(22)).to.equal(false)
  })
})

describe('fizzbuzz', () => {
  it('Should return fizzbuzz if number % 15 equal 0', () => {
    expect(fizzbuzz(15)).to.equal('fizzbuzz')
    expect(fizzbuzz(45)).to.equal('fizzbuzz')
  })
  it('Should return fizz if number % 3 equal 0', () => {
    expect(fizzbuzz(3)).to.equal('fizz')
    expect(fizzbuzz(9)).to.equal('fizz')
  })
})