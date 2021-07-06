describe("Test our inputs and submit our form", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/form/");
  });
  it("Add test to inputs and submit form", function() {
    cy.get("input[name='name']")
      .type("Wayne")
      .should("have.value", "Wayne");
    cy.get("select[name='size']");
    cy.get("input[name='pepperoni']");
    cy.get("input[name='onions']");
    cy.get("input[name='peppers']");
    cy.get("input[name='tomatoes']");
    cy.get("textarea[name='textarea']");
    cy.get("button[name='button']");
  });
});
