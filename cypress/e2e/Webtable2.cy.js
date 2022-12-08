///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoAutomation Website', () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://demoqa.com/webtables')
    })
    it.skip('Add Row in the table', () => {
        cy.get('#addNewRecordButton').click()  //click Add button
        cy.get('#firstName').type('Anitha').should('have.value', 'Anitha')  //FirstName
        cy.get('#lastName').type('Muvva').should('have.value', 'Muvva')   //LastName
        cy.get('#userEmail').type('Test@gmail.com').should('have.value', 'Test@gmail.com')   //Email
        cy.get('#age').type('60').should('have.value', '60')       //Age
        cy.get('#salary').type('600').should('have.value', '600')   //Salary
        cy.get('#department').type('Computer').should('have.value', 'Computer')   //Department
        cy.get('#submit').click()
    })

    it.skip('Delect row in the table', () => {
        cy.get('#delete-record-3>svg>path').click() //Delect Option
    })

    it.skip('Change Department Name in the table Insurance to CSE', () => {
        cy.get('#edit-record-1>svg').click()
        cy.get('#department')
            .clear()                        // Remove previous text 
            .type('CSE').should('have.value', 'CSE')   //Change Department
        cy.get('#submit').click()
    })

    it.skip('selects the total number of rows', () => {

        // cy.get('.ReactTable -striped -highlight').find('tr').should('have.length', 4)

        cy.get(".div.ReactTable -striped -highlight > .rt-tr -odd")
            .find("tr")
            .then((row) => {
                //row.length will give you the row count
                cy.log(row.length);
            })

    });

    it('sorting, the first column of names', () => {
        cy.get(':nth-child(1) > .rt-resizable-header-content').should(($cells) => {
            cy.wait(10000)
            const names = Cypress._.map($cells, ($cell) => $cell.innerText)
            expect(names).to.be.ascending
          })
    })

})