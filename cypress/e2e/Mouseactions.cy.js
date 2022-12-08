///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
}); 

describe('DemoAutomation Website', () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://demoqa.com/buttons')
    })

    
    it.only('MouseActions Function', () =>{
        cy.get('#doubleClickBtn').dblclick().should('be.visible')  //double click
        cy.get('#rightClickBtn').rightclick().should('be.visible')  //right click
        

        //  cy.get('#doubleClickBtn').parent('div').siblings('div').eq(0).find("button:contains('Click Me')").click()
        cy.xpath("//button[text()='Click Me']").click()  //dynamic click
        cy.pause()
                    
          
    })
})