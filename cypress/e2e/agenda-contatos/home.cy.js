/// <reference types="cypress" />

describe('Testes para página de agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve cadastrar um contato', () => {
        cy.get('input').should('have.length', 3)
        cy.get('input[placeholder="Nome"]').type('Charles')
        cy.get('input[placeholder="E-mail"]').type('Charles@hotmail.com')
        cy.get('input[placeholder="Telefone"]').type('51 99999999')
        cy.get('.adicionar').click()
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').clear()
        cy.get('input[placeholder="Nome"]').type('Alex')
        cy.get('input[placeholder="E-mail"]').clear()
        cy.get('input[placeholder="E-mail"]').type('Alex@hotmail.com')
        cy.get('input[placeholder="Telefone"]').clear()
        cy.get('input[placeholder="Telefone"]').type('51 99999999')
        cy.get('.alterar').click()
    })

    it('Deve deletar um contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    })

    
})