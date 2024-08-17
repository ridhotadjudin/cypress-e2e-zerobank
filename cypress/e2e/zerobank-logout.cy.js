/// <reference types="cypress" />

describe('Working with inputs', () => {
	beforeEach('Visit the website', () => {
		cy.visit('zero.webappsecurity.com/login.html', { timeout: 30000 })
		cy.url().should('include', 'login.html')
	})

	// it('Should fail to login with invalid credentials', () => {
	//     cy.fixture('dataLogin').then(dataLogin => {
	//         const localUsername = dataLogin.invalid.username
	//         const localPassword = dataLogin.invalid.password
	//         cy.loginToZerobank(localUsername, localPassword)
	//         cy.get('div[class="alert alert-error"]').contains('Login and/or password are wrong')
	//         cy.screenshot('invalid data login')
	//     })
	// })

	it('Should login successfully with valid credentials and then logout', () => {
		cy.fixture('dataLogin').then(dataLogin => {
			const localUsername = dataLogin.valid.username
			const localPassword = dataLogin.valid.password
			cy.loginToZerobank(localUsername, localPassword)
			cy.get('a').contains('Zero Bank').should('be.visible')

			cy.contains('username').click()
			// cy.get('#logout_link').click()
			cy.get('#logout_link').debug()

			cy.get('strong').should('contain.text', 'Home')
			cy.get('#signin_button')
				.should('be.visible')
				.and('contain.text', 'Signin')
			cy.screenshot('success logout')
		})
	})
})
