/// <reference types="Cypress" />

import produtosSchema from "../produtos/contracts/produtos.contract";

describe('GET Produtos', () => {

    it('Listar os produtos cadastradoss', () => {

        cy.request({
            method: 'GET',
            url: 'produtos',
            failOnStatusCode: false,
            headers: {
                "accept": 'application/json'
            },
        }).as('response')

        cy.get('@response').then(res => {

            const qtdProdutos = res.body.produtos
            cy.expect(res.status).to.be.eq(200)
            cy.expect(res.body.produtos).to.be.eq(qtdProdutos)


        })

    })

    it('Validar contrato da listagem de produtos', () => {

        cy.request({
            method: 'GET',
            url: 'produtos',
            failOnStatusCode: false,
            headers: {
                "accept": 'application/json'
            },
        }).as('response')

        cy.get('@response').then(res => {
            cy.request({
                method: 'GET',
                url: 'produtos',
                failOnStatusCode: false,
                headers: {
                    "accept": 'application/json'
                },
            }).as('resContract')

            cy.get('@resContract').then(response => {
                cy.expect(response.status).to.be.eq(200)
                produtosSchema.validateAsync(response.body)

            })


        })

    })
})

