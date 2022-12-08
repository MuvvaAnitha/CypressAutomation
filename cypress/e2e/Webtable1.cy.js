///<reference types="cypress" />

const { every } = require("cypress/types/lodash");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoAutomation Website', () => {

    beforeEach("Before", () => {
        //cy.viewport(1920,1280);
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it('Check value presence anywhere in the table', () => {

        //presence anywhere in the table
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

    })
    it('Check value presence in specific row & column', () => {

        //presence in specific row & column
        cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('td', 'Selenium').should('be.visible')

    })


    it('Check value presence based on condition by iterating rows', () => {

        //Condition
        //verify Each and  every row find out the particular author and verify the Name of the book which is written by author 

        //check the book name "Master in Java" whose author is Amod
        cy.get('//tbody/tr/th[2]').each(($ele, index, $list) => {

            const text = $ele.text()
            if (text.includes("Amod")) {
                cy.get('//tbody/tr/th[1]').eq(index).then(function (BName) {
                    const BookName = BName.text()
                    expect(BookName).to.equal("Master in Java")
                })
            }
        })
    })
})