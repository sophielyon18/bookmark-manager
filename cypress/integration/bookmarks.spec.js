
describe ('Tests page', function(){
    it('test 1', function(){
        cy.visit('/')
        cy.contains('Hello')
    })
})