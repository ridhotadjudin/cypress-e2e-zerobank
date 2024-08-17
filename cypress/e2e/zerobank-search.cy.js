/// <reference types="cypress" />

describe('Working with inputs', () => {
	beforeEach('Visit the website', () => {
		cy.visit('zero.webappsecurity.com/login.html', { timeout: 30000 })
		cy.url().should('include', 'login.html')
		cy.fixture('dataLogin').then(dataLogin => {
			const localUsername = dataLogin.valid.username
			const localPassword = dataLogin.valid.password
			cy.loginToZerobank(localUsername, localPassword)
			cy.get('a').contains('Zero Bank')
		})
	})

	it('Doing search with valid data', () => {
		cy.visit('zero.webappsecurity.com/index.html', { timeout: 30000 })

		cy.fixture('dataSearch').then(dataSearch => {
			const localSearch = dataSearch.valid

			cy.xpath('//input[@id="searchTerm"]').clear()
			cy.xpath('//input[@id="searchTerm"]')
				.type(localSearch)
				.should('have.value', 'bank')

			cy.focused().type('{enter}')

			cy.debug()

			cy.xpath(
				'//li[.="Zero - Personal Banking - Loans - Credit Cards"]'
			).should(element => {
				const text = element.text().toLowerCase()
				expect(text).to.include(localSearch)
			})
		})
	})

	// it('Doing search with invalid data', () => {
	// 	cy.visit('zero.webappsecurity.com/index.html', { timeout: 30000 })

	// 	cy.fixture('dataSearch').then(dataSearch => {
	// 		const localSearch = dataSearch.invalid

	// 		cy.xpath('//input[@id="searchTerm"]').clear()
	// 		cy.xpath('//input[@id="searchTerm"]').type(localSearch)

	// 		cy.focused().type('{enter}')

	// 		cy.xpath('//div[@class="top_offset"]').should(element => {
	// 			const text = element.text().toLowerCase()
	// 			expect(text).to.include(localSearch)
	// 		})
	// 	})
	// })

	// it('Doing search with valid data help', () => {
	// 	cy.visit('zero.webappsecurity.com/index.html', { timeout: 30000 })

	// 	cy.fixture('dataSearch').then(dataSearch => {
	// 		const localSearch = dataSearch.help

	// 		cy.xpath('//input[@id="searchTerm"]').clear()
	// 		cy.xpath('//input[@id="searchTerm"]').type(localSearch)

	// 		cy.focused().type('{enter}')

	// 		cy.xpath('//a[.="Zero - Help"]').should('have.attr', 'href', '/help.html')
	// 		// cy.xpath('//a[.="Zero - Help"]').invoke('attr','href').should('eq','/help.html')
	// 	})
	// })
})
