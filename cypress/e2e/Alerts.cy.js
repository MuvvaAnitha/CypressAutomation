//Cypress can work with alerts by default. The pop-up can be an alert or confirmation popup
//Cypress has the ability to fire the browser events.

// An alert is triggered by window:alert event. 
// This is by default handled by Cypress and the OK button on the alert gets clicked,
// without being visible during execution.



///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('DemoAutomation Website', () => {

  beforeEach("Before", () => {
    //cy.viewport(1920,1280);
    cy.visit('https://demo.automationtesting.in/Alerts.html')
  })


  it('Alert Function', () => {
    cy.get("a[href*='#OKTab']").click()
    cy.get("[onclick='alertbox()']").click()
      //Mocha  Implementation Alert text verification

      //Cypress has the ability to fire the window:alert event by utilising the method on. Then, we can verify the alert text.
    cy.on('window:alert', (str) => {     
      expect(str).to.equal("I am an alert box!")
    })

    //Confirm type Alert function

    cy.get("a[href*='#CancelTab']").click()
    cy.get("[onclick='confirmbox()']").click()
    //  Implementation Alert text verification
    cy.on('window:confirm', (str) => {    
      expect(str).to.equal("Press a Button !") //mocha
    })

    //Prompt type Alert functions

    cy.get("a[href*='#Textbox']").click()  //Anchor tags
    // Implementation Alert text verification
    cy.window().then(($win) => {      
         //Stub command =>Replace a function, record its usage and control its behavior.
      cy.stub($win, 'prompt').returns('Anitha')  
      cy.get("[onclick='promptbox()']").click()
      //cy.pause()
    })
  })
}) 