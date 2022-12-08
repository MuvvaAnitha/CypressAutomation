///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoAutomation Website', () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://demoqa.com/progress-bar')
    })

    it('progress-bar Function', () =>{
        cy.get('.startStopButton').click()
       
       

          
    })
})