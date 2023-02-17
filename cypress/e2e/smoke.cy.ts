
describe("smoke tests", () => {

  it("should allow you to register and login", () => {

    cy.findByRole("link", { name: /leagues/i }).click();

  });

});
