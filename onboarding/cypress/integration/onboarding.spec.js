describe('Navigate to site and submit user, check that inputs match expected.', () => {

    it('can navigate to site', () => {
        cy.visit('http://localhost:3000')
    })

    it('can input first name', () => {
        cy.get('input[name="first_name"]')
            .type('Bilbo')
            .should('have.value', 'Bilbo')
    })

    it('can input last name', () => {
        cy.get('input[name="last_name"]')
            .type('Baggins')
            .should('have.value', 'Baggins')
    })

    it('can input email', () => {
        cy.get('input[name="email"]')
            .type('bilbo.baggins@shire.me')
            .should('have.value', 'bilbo.baggins@shire.me')
    })

    it('can input password', () => {
        cy.get('input[name="password"]')
            .type('RingKing123$')
            .should('have.value', 'RingKing123$')
    })

    it('can check "Agree to the Terms of Service"', () => {
        cy.get('input[name="tos"]')
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })

    it('can submit a user and verify the user exists on the page.', () => {
        cy.get('.button-submit')
            .should('not.be.disabled')
            .click()
            .wait(3000)
        cy.get('.user h3').contains('Bilbo Baggins')
    })
})