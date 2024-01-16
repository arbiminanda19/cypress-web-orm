// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import * as objects from "../e2e/objects/page.js";

Cypress.Commands.add("login", (username, password) => {
  cy.visit(Cypress.env("baseUrl"));
  cy.get(objects.input_username).type("Admin");
  cy.get(objects.input_password).type("admin123");
  cy.get(objects.btn_submit).click();
  cy.get(objects.img_logo).should("be.visible");
});
