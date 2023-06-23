/// <reference types="cypress" />

describe("Cypress File Upload Tests", () => {
  /**
   * Step1:
   * In order tp upload files in Cypress we need to install plugin
   * we will run following command:
   * npm install -dev cypress-file-upload
   * Step2:
   * we need to import necessary command to our project
   * in our support we have commaands.js file: this file s a good place for putting our utility methods(functions)
   * add the following line
   *  import 'cypress-file-upload';
   * Step 3:
   * The file that you want to upload should be in your fixture folder
   */
  beforeEach("Navigate to upload page", () => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit("/upload");
  });

  it("Check Upload action", () => {
    // locator for choose file button
    cy.get("input#file-upload").attachFile("wandern.jpg");

    // click on uıpload button
    cy.get("#file-submit").click();
    // assert that path message is displayed
    cy.get("#uploaded-files").then(() => {
      cy.contains("wandern.jpg").should("be.visible");
    });
  });
});
