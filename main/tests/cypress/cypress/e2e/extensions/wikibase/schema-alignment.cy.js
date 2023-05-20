describe(__filename, function () {
  it('updates counts in the issues tab', function () {
    cy.loadAndVisitProject('food.mini');

    cy.get('#extension-bar-menu-container').contains('Wikibase').click();
    cy.get('.menu-container a').contains('Edit Wikibase schema').click();

    //original `no edit was generated` warning, so warning count = 1
    cy.get(".schema-alignment-total-warning-count").should("be.visible").and("have.text", "1");

    // click add
    cy.get('#schema-alignment-entity-add-buttons').contains('Add item').click();
    cy.get(".schema-alignment-total-warning-count").should("be.visible").and("have.text", "1");

    cy.get('.wbs-add-namedesc').click();
    cy.get('select').eq(2).select('Description');
    cy.get(".schema-alignment-total-warning-count").should("be.visible").and("have.text", "2");

    cy.get('.wbs-namedesc').contains('remove').click();
    cy.get(".schema-alignment-total-warning-count").should("be.visible").and("have.text", "1");


    cy.get('#schema-alignment-entity-add-buttons').contains('Add item').click();
    // cy.get(".schema-alignment-total-warning-count").should("be.visible").and("have.text", "3");

    cy.get('#schema-alignment-entity-add-buttons').contains('Add item').click();
    // cy.get(".schema-alignment-total-warning-count").should("be.visible").and("have.text", "4");
  });
});
