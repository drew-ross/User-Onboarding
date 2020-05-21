describe('Navigate to site and submit user, check that inputs match expected.', () => {

    it('can navigate to site', () => {
        cy.visit('http://localhost:3000')
    })

    //First name input
    it('can input first name', () => {
        cy.get('input[name="first_name"]')
            .type('Bilbo')
            .should('have.value', 'Bilbo')
    })

    //Last name input
    it('can input last name', () => {
        cy.get('input[name="last_name"]')
            .type('Baggins')
            .should('have.value', 'Baggins')
    })

    //Email input
    it('can input email', () => {
        cy.get('input[name="email"]')
            .type('bilbo.baggins@shire.me')
            .should('have.value', 'bilbo.baggins@shire.me')
    })

    //Password input
    it('can input password', () => {
        cy.get('input[name="password"]')
            .type('RingKing123$')
            .should('have.value', 'RingKing123$')
    })

    //TOS checkbox
    it('can check "Agree to the Terms of Service"', () => {
        cy.get('input[name="tos"]')
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })

    //Submit and verify new user exists
    it('can submit a user and verify the user exists on the page.', () => {
        cy.get('.button-submit')
            .should('not.be.disabled')
            .click()
            .wait(3000)
        cy.get('.user h3').contains('Bilbo Baggins')
    })
})

describe('Check form validation and messages. Submit button only enabled after all inputs filled.', () => {

    it('can navigate to site', () => {
        cy.visit('http://localhost:3000')
    })

    it('first name must be at least 2 characters, message appears and disappears', () => {
        cy.contains('First name must be at least 2 characters').should('not.exist')

        //Invalid, message appears after 1 character
        cy.get('input[name="first_name"]')
            .type('F')
        cy.contains('First name must be at least 2 characters')
        cy.get('input[name="first_name"]')
            .type('r')

        //Valid after 2 characters, message goes away
        cy.contains('First name must be at least 2 characters').should('not.exist')
        cy.get('input[name="first_name"]')
            .type('odo')
        cy.get('.button-submit').should('be.disabled')
    })

    it('last name must be at least 2 characters, message appears and disappears', () => {
        cy.contains('Last name must be at least 2 characters').should('not.exist')
        
        //Invalid, message appears after 1 character
        cy.get('input[name="last_name"]')
            .type('B')
        cy.contains('Last name must be at least 2 characters')
        cy.get('input[name="last_name"]')
            .type('a')

        //Valid after 2 characters, message goes away
        cy.contains('Last name must be at least 2 characters').should('not.exist')
        cy.get('input[name="last_name"]')
            .type('ggins')
        cy.get('.button-submit').should('be.disabled')
    })

    it('email must be valid, message appears and disappears', () => {
        cy.contains('Must use a valid email address').should('not.exist')
        
        //Invalid, message appears after 1 character
        cy.get('input[name="email"]')
            .type('frodo.baggins')
        cy.contains('Must use a valid email address')
        cy.get('input[name="email"]')
            .type('@bagend.me')

        //Valid after full email address, message goes away
        cy.contains('Must use a valid email address').should('not.exist')
        cy.get('.button-submit').should('be.disabled')
    })

    it('password must be at least 8 characters, message appears and disappears', () => {
        cy.contains('Password must be at least 8 characters').should('not.exist')
        
        //Invalid, message appears after <8 characters
        cy.get('input[name="password"]')
            .type('Sting')
        cy.contains('Password must be at least 8 characters')
        cy.get('input[name="password"]')
            .type('King123$')
        //Valid after 8 characters, message goes away
        cy.contains('Password must be at least 8 characters').should('not.exist')
        cy.get('.button-submit').should('be.disabled')
    })

    it('terms of service must be checked, submit button only works when checked, message appears and disappears', () => {
        cy.contains('You must agree to the Terms of Service').should('not.exist')

        //check and uncheck box to show message
        cy.get('input[name="tos"]').check().uncheck()
        cy.contains('You must agree to the Terms of Service')

        //submit should be disabled while not agreeing to tos
        cy.get('.button-submit').should('be.disabled')

        //check agree to tos, message should go away, submit button should work
        cy.get('input[name="tos"]').check()
        cy.contains('You must agree to the Terms of Service').should('not.exist')
        cy.get('.button-submit').should('not.be.disabled').click()
    })
})