
describe ('Tests page', function(){
    beforeEach(function() {
        cy.visit('/bookmarks')
    })

    it('Tests page displays list of bookmarks', function() {
        cy.contains('www.facebook.com')
    })

    it('Test pages displays textbox and submit to add bookmarks', function() {
        cy.get('#add-bookmarks')
        cy.get('#submit-bookmarks')
    })

    it('Tests can add bookmarks', function() {
        cy.get('#add-bookmarks').type('www.twitter.com')
        cy.get('#submit-bookmarks').click()
        cy.contains('www.twitter.com')
    })
})