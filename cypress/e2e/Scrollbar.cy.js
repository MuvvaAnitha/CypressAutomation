///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoAutomation Website', () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://amp.dev/documentation/examples/visual-effects/scroll_to_top/preview/')
    })

    it('Scroll-bar Function', () =>{
        // cy.get('#scroll-vertical button')
        // .should('not.be.visible')
      
      // Cypress handles the scroll direction needed
      cy.get('.i-amphtml-fill-content').scrollIntoView()
        .should('be.visible')
       
       

          
    })
})