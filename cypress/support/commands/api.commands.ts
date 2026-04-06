Cypress.Commands.add('getPost', (postId: number) => {
    return cy.request({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`
    });
});



declare global {
    namespace Cypress {
        interface Chainable {
            getPost(postId: number): Chainable<Cypress.Response<any>>;

        }
    }
}

export { }