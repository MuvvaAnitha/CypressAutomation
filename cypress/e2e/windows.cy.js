
//Cypress does not have a specific command to work with child windows. 
//It has a workaround method in jQuery through which it handles the child windows. In the html code, 
//a link or button opens to a child window, because of the attribute target.

//If the target attribute has value blank, it opens to a child window. 
//Cypress uses the jQuery method removeAttr, which is invoked by the invoke command in Cypress.

//The removeAttr deletes the attribute, which is passed as one of the parameters to the invoke method.
//Once the target=blank is removed, then a link/button opens in the parent window and after performing 
//operations on it, we can shift back to the parent URL with the go command.



///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('DemoAutomation Website', () => {
  
    beforeEach("Before", () => {
      //cy.viewport(1920,1280);
      cy.visit('https://demo.automationtesting.in/Windows.html')
      
    })

   it('Switch to new tab window', () =>{
    cy.get("a[href*='#Tabbed']").click() 
    // delete target attribute with invoke for link
    // cy.contains('button', 'click', { timeout: 10000 }).parent('a').invoke('removeAttr', 'target')
    //  cy.contains('button', 'click', { timeout: 10000 }).click()
    cy.get('a > .btn').invoke('removeAttr', 'target').click()
    // cy.wait(1000)
    // cy.go('back')    // Navigate to the backward page
   })
    
   it('Switch to child window', () =>{
    cy.get("a[href*='#Seperate']").click() 
    // delete target attribute with invoke for link
    cy.get('#Seperate > .btn').click()
    // cy.go('back')
   })

   it.only('Switch to Multiple windows', () =>{
    cy.get("a[href*='#Multiple']").click() 
    // delete target attribute with invoke for link
    cy.get('#Multiple > .btn').click()
     //cy.go('back');
     
   })
})