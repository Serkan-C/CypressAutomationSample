
describe('Spartan Api Test',{baseUrl:'http://100.25.141.59:8000'},()=>{

it('Get a single Spartan',()=>{
    cy.request('GET','api/spartans/100').then((response)=>{
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('Terence');
    })
})
it('POST one spartan test',()=>{
cy.request({
    method:'POST',
    url:'api/spartans',
    body:{
        
        gender: 'Male',
        name: 'serk',
        phone: 1345234522,

    }
}
).then((response)=>{
    expect(response.status).to.equal(201);
    expect(response.body.success).to.equal('A Spartan is Born!');
    expect(response.body.data.name).to.equal('serk');
})

})

})