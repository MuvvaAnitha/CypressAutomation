///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Senecaglobal Greythr Website', () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://senecaglobal.greythr.com/')
    })

    it('Login Function ', () =>{
        cy.get('#username').type('N0811').should('have.value', 'N0811')
        cy.get('#password').type('Anitha7013@').should('have.value', 'Anitha7013@')
        cy.get('.bg-primary').click()   
        cy.wait(10000) 
        cy.get('.image-hamburger').click()  
        //cy.contains('span', 'Home').click()
        cy.get('.transform > gt-sidebar > #mainSidebar > perfect-scrollbar > .ps > .ps-content > .ng-star-inserted').click()
        //cy.get('.btn-container > [shade="primary"]').click() 
            
          // create the date in UTC so its always the same
// no matter what local timezone the browser is running in
const now = new Date(Date.UTC(2022, 12, 07)).getTime()

cy.clock(now)
cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
cy.get('#clock-div').click()
  .should('have.text', '1489449600')
    })
    // it('Sign in shift times', () =>{
    //       cy.get('.image-hamburger').click()


          
    // })
})