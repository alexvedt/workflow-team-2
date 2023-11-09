/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("Logging in", () => {
  it("the user can log in", () => {
    cy.visit("http://127.0.0.1:5173/login");
    cy.get('[id="email"]').clear();
    cy.get('[id="email"]').type("notauser@stud.noroff.no");

    cy.get('[id="password"]').clear();
    cy.get('[id="password"]').type("wrongpassword");

    cy.get("button[type='submit']").click();

    // cy.get("button").click();

    // cy.get('img[alt="User Avatar"]').click();
  });
});
