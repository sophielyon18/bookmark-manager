
describe ('Tests page', function(){
    beforeEach(function() {
        cy.visit('/')
    })
    it('test 1', function(){
        cy.contains('Hello')
    })

    it('Tests page displays list of bookmarks', function(){
        cy.contains('www.facebook.com')
        cy.contains('www.instagram.com')
    })
})