///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoAutomation Website', () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://demoqa.com/slider')
    })

    it('Moving slider ', () => {
        cy.get('.range-slider')
            .invoke('val', 25)
            .trigger("change")
            .get('input[type=range]').siblings('div')
            .should('have.text', '25')


    })
})