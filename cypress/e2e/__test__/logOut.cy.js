/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("Logging in", () => {
    it("the user can log in", () => {
      cy.visit("http://127.0.0.1:5173/");
      cy.get("button[type='submit']").click();
      cy.wait(5000)
        
      cy.contains('ul li a', 'Logout').click();
  
  
      // cy.get("button").click();
  
      // cy.get('img[alt="User Avatar"]').click();
    });
  });
  