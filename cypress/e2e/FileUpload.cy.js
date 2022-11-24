///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("File Uplaod Test suite", () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://demoqa.com/upload-download')
        //cy.visit('https://fineuploader.com/demos.html')
    })

    it('fileupload TestCases', () => {

        // cy.get('#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-button-selector > input').click({ force: true })
        //     .attachFile("Logo.png")

        const imagefile ='Logo.png';
        cy.get('#uploadFile').attachFile(imagefile);
    })


})