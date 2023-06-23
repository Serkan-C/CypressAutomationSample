export class NavigateTo {
  loginPage() {
    cy.visit(Cypress.env("login")); // cypress.env: takes the param from parantehesisi
  }
}

export const navigateTo = new NavigateTo();
