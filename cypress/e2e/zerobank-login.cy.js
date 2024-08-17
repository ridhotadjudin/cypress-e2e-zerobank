/// <reference types="cypress" />

describe('Working with inputs', () => {
	beforeEach('Visit the website', () => {
		cy.visit('zero.webappsecurity.com/login.html', { timeout: 30000 })
		cy.url().should('include', 'login.html')
	})

	it('Doing login with valid credentials', () => {
		cy.fixture('dataLogin').then(dataLogin => {
			const localUsername = dataLogin.valid.username
			const localPassword = dataLogin.valid.password

			cy.loginToZerobank(localUsername, localPassword)

			cy.get('a').contains('Zero Bank')

			cy.screenshot('success login valid')
		})
	})

	it('Doing login with invalid credentials', () => {
		cy.fixture('dataLogin').then(dataLogin => {
			const localUsername = dataLogin.invalid.username
			const localPassword = dataLogin.invalid.password

			cy.loginToZerobank(localUsername, localPassword)

			cy.get('div[class="alert alert-error"]').contains(
				'Login and/or password are wrong'
			)

			cy.screenshot('invalid data login')
		})
	})
})
