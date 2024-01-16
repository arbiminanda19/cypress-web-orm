import * as objects from "../objects/page.js";

before(() => {
  cy.config("defaultCommandTimeout", 20000);
});

describe("Orange HR - Dashboard", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
  });

  it("open page recruitment", () => {
    cy.get('a[href*="recruitment"]').parent("li").click();
  });

  it("type search", () => {
    cy.get("input[placeholder='Search']").type("Search Word");
  });
});
