describe( 'Visit front end', () => {
	before( () => {
		cy.setPermalink();
	} );

	it( 'Open hello-world', () => {
		cy.visitAdminPage( 'edit.php' );
		cy.visit( '/hello-world', {
			timeout: 3000000,
			failOnStatusCode: false,
		} );
		cy.contains( 'Hello' );
	} );
} );