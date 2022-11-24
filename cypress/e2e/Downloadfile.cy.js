///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Dowload file Test suite", () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://demoqa.com/upload-download')
    })
    
    it('Download file TestCases', () => {
        cy.get('#downloadButton').click()
        //cy.verifyDownload('archive.zip');
    })


})