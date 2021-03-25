const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictequal')
describe('strictequal', () =>{
    it('checks if numbers are strictly true', () => {
        let a= 2
        let b= 2
        var result = strictEqual (a, b)
        expect(result).to.be.true
    })
    it('checks if numbers are strictly false', () => {
        let a= 3
        let b= 6
        var result = strictEqual (a, b)
        expect(result).to.be.false
    })
    it ('checks if numbers are strictly false', () => {
        let a= '4'
        let b= 4
        var result = strictEqual (a,b)
        expect(result).to.be.false
    })
    it ('checks if numbers are strictly false', ()=> {
        let a= '8'
        let b= '8'
        var result = strictEqual (a,b)
        expect(result).to.be.true
    })
})