///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoAutomation Website', () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://the-internet.herokuapp.com/tables')
    })

    it('Get the whole table data', () => {
        cy.get('#table1>tbody>tr').should('have.length', 4)
        cy.get('#table1>tbody>tr:eq(0)>td').should('have.length', 6) // one column data

        //Get the whole table data
        cy.get('#table1>tbody>tr')
            .each(function ($row, index, $rows) {

                cy.wrap($row).within(function () {
                    cy.get('td')
                        .each(function ($cellData, index, $columns) {
                            cy.log($cellData.text())
                        })
                })
            })
    })

    it('Get Single row data', () => {
        cy.get('#table1>tbody>tr').eq(2)
            .within(function () {
                cy.get('td').eq(3).should('contain.text', '$100.00')
            })
    });

})