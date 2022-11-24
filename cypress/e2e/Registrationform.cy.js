
//<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('DemoAutomation Website', () => {

  it('Registration form', () => {
    //cy.viewport(1920,1280);
    cy.viewport(1024, 768);
    cy.visit('https://demo.automationtesting.in/Register.html')

    //===============TestBox Code============//

    // FirstName and Last Name Address and phone Number //
    cy.get("[ng-model='FirstName']").type('Anitha').should('have.value', 'Anitha')
    cy.get("[ng-model='LastName']").type('Muvva').should('have.value', 'Muvva')
    cy.get("[ng-model='Adress']").type('Hyderabad')
    cy.get("[ng-model='EmailAdress']").type('Test@gmail.com')
    cy.get("[ng-model='Phone']").type('1234567898')

    //===============RadioButton Code============//

    // cy.get("[value='FeMale']").click({force:true})
    cy.get("[value='FeMale']").check("FeMale")

    //=============Checkbox Code============//

    //cy.get('#checkbox2').click({force:true}) 
    cy.get('#checkbox2').check("Movies")
    cy.get('#checkbox3').check("Hockey")
    cy.get('#checkbox1').check("Cricket")
    cy.get('#checkbox3').uncheck("Hockey")
    //cy.get('#checkbox3').click({force:true}) 
    //cy.pause()
    

    //=========Multi select Dropdown Code========//


    // cy.get('#msdd').click({force:true})        
    // cy.get('ui-corner-all').contains('Arabic').click()
    // cy.get('ui-corner-all').contains('Bulgarian').click()




    //==============DropDown Code===========//

    //Static dropdown
     cy.get('#Skills').select('Art Design').should('have.value', 'Art Design')

    //dynamic Dropdown
    
    cy.get("span[role='combobox']").click({force:true})
    cy.get("input[role='textbox']").type('ind')
    cy.get("input[role='textbox']").type('{enter}')


    // Date of Birth
    
    cy.get('#yearbox').select('1916').should('have.value', '1916')
    cy.get("[ng-model='monthbox']").select('January').should('have.value', 'January')
    cy.get('#daybox').select('1').should('have.value', '1')

    cy.get("[ng-model='Password']").type('123456')
    cy.get("[ng-model='CPassword']").type('123456') 
    cy.get('#submitbtn').click()
    cy.get("[type='button']").click()
    cy.pause()
  })

})