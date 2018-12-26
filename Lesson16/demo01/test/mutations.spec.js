import { expect } from 'chai'
import { mutations } from './../src/store/mutations'

const { increment } = mutations

describe('mutations',()=>{
    it("INCREMENT",()=>{
        const state = { count:0 }
        increment(state)
        expect(state.count).to.equal(1)
    })
})