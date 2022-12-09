///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Navigating Website', () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://demo.nopcommerce.com/')

    })
    
    it('Navigating Back ', () => {
        cy.title().should('eq','nopCommerce demo store')   //Home page

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq','nopCommerce demo store. Register')   //Register page

        cy.go('back')   //Navigating page
        cy.title().should('eq','nopCommerce demo store')   //Home page

        cy.go('forward')     //Navigating page 
        cy.title().should('eq','nopCommerce demo store. Register')   //Register page

        cy.go(-1)   //back
        cy.title().should('eq','nopCommerce demo store')   //Home page

        cy.go(1)  //forward
        cy.title().should('eq','nopCommerce demo store. Register')   //Register page

        cy.reload()

    });


})