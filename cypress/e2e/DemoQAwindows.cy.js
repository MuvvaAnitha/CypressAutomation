///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('DemoAutomation Website', () => {

  beforeEach("Before", () => {
    //cy.viewport(1920,1280);
    cy.visit('https://demoqa.com/browser-windows')

  })

  it('Switch to new tab ', () => {
    cy.contains('New Tab').click()
  })

  it('Switch to New window', () => {
    cy.contains('New Window').click()
  })

  it.only('Switch to New Window Message', () => {
    cy.contains('New Window Message').click()
  })

})