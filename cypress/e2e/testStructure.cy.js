/// <reference types="cypress" />

describe('Context: my First tests',()=>{
 before(()=>{
//runs once before all test cases in this describe block, like beforeclass in TestNG

 })
beforeEach(()=>{
//run before each test case, beforeMethod in TestNG

})
afterEach(()=>{
    //run after each test case, afterMethod in TestNG
    
    })
after(()=>{
    //runs once after all test cases finished in this describe block, like afterClass in TestNG
    
     })

it('Opening a web application',()=>{
    cy.visit('/registration_form');
    
    cy.get('.nav-link').click();
})
it('Test2',()=>{
expect(false).not.to.equal(true);
})
it('Test3',()=>{
    expect(false).not.to.equal(false);
    })

it('Test4',()=>{
    expect(5).to.equal(5);
    })
    it('Test5',()=>{
        expect(true).not.to.equal('5'==5);
        })
})