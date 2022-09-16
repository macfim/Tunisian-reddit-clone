describe("navbar", () => {
  describe("large screen navbar", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      cy.viewport(1000, 600);
    });

    it("is displayed", () => {
      cy.contains("TunisiaReddit");
      cy.contains("post");
      cy.contains("wiki");
    });
  });
  describe("mobile screen navbar", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      cy.viewport(480, 600);
    });

    it("is displayed", () => {
      cy.contains("TunisiaReddit");
      cy.get("#mobile-menu").should("exist");
    });

    describe("toggle mobile menu", () => {
      beforeEach(() => {
        cy.get("#mobile-menu").click();
      });

      it("toggle mobile menu", () => {
        cy.contains("post");
        cy.contains("wiki");
      });

      it("post menu open by default", () => {
        cy.contains("hot");
        cy.contains("new");
        cy.contains("top");
        cy.contains("rising");
      });
    });
  });
});
