Cypress.Commands.add('loginToZerobank', (username, password) => {
	cy.clearCookies()
	cy.clearLocalStorage()

	cy.get('#user_login').clear()
	cy.get('#user_login').type(username)

	cy.get('input[name="user_password"]').clear()
	cy.get('input[name="user_password"]').type(password)

	cy.get('input[name="submit"]').click()
})
