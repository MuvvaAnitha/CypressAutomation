///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Drag and Drop", () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://demo.automationtesting.in/Static.html')
    })

    it('Drag and Drop function on logo', () => {
        cy.get('#angular').trigger('dragstart')
        cy.get('#droparea').trigger("drop").trigger("dragend")
    });

});

it('Drag and Drop function on original', () => {
    cy.get("//img[@id='mongo']").trigger('dragstart')
    cy.get('#droparea').trigger("drop").trigger("dragend")
});

it('Drag and Drop function on selenium', () => {
    cy.get('#node').trigger('dragstart')
    cy.get('#droparea').trigger("drop").trigger("dragend")
});

