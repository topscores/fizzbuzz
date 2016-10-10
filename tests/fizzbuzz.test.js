import { expect } from 'chai'
import sinon from 'sinon'
import { isFizz } from '../src/fizz'
import * as fizz from '../src/fizz'
import * as buzz from '../src/buzz'
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
    sinon.stub(fizz, 'isFizz').returns(true)
    sinon.stub(buzz, 'isBuzz').returns(true)
    expect(fizzbuzz(15)).to.equal('fizzbuzz')
    expect(fizzbuzz(45)).to.equal('fizzbuzz')
    fizz.isFizz.restore()
    buzz.isBuzz.restore()
  })
  it('Should return fizz if number % 3 equal 0', () => {
    sinon.stub(fizz, 'isFizz').returns(true)
    sinon.stub(buzz, 'isBuzz').returns(false)
    expect(fizzbuzz(3)).to.equal('fizz')
    expect(fizzbuzz(9)).to.equal('fizz')
    fizz.isFizz.restore()
    buzz.isBuzz.restore()
  })
})
