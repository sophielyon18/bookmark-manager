
describe ('Tests page', function(){
    beforeEach(function() {
        cy.visit('/bookmarks')
    })

    it('Tests page displays list of bookmarks', function() {
        cy.contains('www.facebook.com')
    })
})