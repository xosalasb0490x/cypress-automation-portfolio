describe('Basic API Test', () => {

    it.only('should get a post successfully', () => {
        cy.getPost(1).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
            expect(response.body).to.have.property('userId');
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('body');
        });
    });

});