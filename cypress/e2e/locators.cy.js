/// <reference types="cypress" />

describe("Find or get Elemenets by Using different Locators", () => {
  before(() => {
    // runs once before all test cases in this describe block, like beforeclass in TestNG
  });
  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit("/login");
  });

  xit("Check different locators strategies", () => {
    // By CSS Locator
    cy.get("input[name='username']").type("CydeoStudent"); // every statement creates an object to be interacted,
    //  and next command makes operation to the object created at previous statement
    cy.get("[type='text']").clear(); // clear what is typed
    cy.get("input").each((item, index, list) => {
      // assert the lenght of the list is 2
      expect(list).to.have.length(2);
      expect(item).to.have.attr("type");
    });
    // by attribute name
    cy.get("[type]");

    // by className
    cy.get(".btn.btn-primary");

    // By id
    cy.get("#wooden_spoon");

    // if I want to use text: no xpath in cypress, but it still possible with a different approach
    cy.get("button").should("contain", "Login").click();
  });

  xit("Check finding elements by travelling through DOM", () => {
    // travel to find  login button:locate username box- go to parent form -then find button
    cy
      .get('input[name="username"]')
      .parents("form")
      .find("button")
      .should("contain", "Login").click;
  });

  it("check Different type of assertions", () => {
    // Cypress itself bundles assertions provided by Chai, Sinon and jQuery libraries
    // Should Assertion: does the assertion directly on the object itself
    cy.get("#wooden_spoon")
      .should("contain", "Login")
      .and("have.class", "btn btn-primary");

    // expect assertion: creates a subject of our test, then you implement different actions
    cy.get("#wooden_spoon").then((buttonElement) => {
      expect(buttonElement).to.have.text("Login");
      expect(buttonElement).to.have.class("btn btn-primary");
    });
  });
});
