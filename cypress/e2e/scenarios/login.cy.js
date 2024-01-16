import * as objects from "../objects/page.js";

before(() => {
  cy.config("defaultCommandTimeout", 20000);
});

describe("Orange HR - Login", () => {
  it("should success login", () => {
    cy.login("Admin", "admin123");
    cy.get(objects.img_logo).should("be.visible");
  });
});
