/// <reference types="cypress" />

//Suite 1
describe('Carrinho de compras', () => {
// Cenário1
// - Acesse https://www.amazon.com.br/
// - Pesquise um produto de sua preferência
// - Adicione o produto no carrinho
// - Valide se o produto foi incluído no carrinho com sucesso
  before('Visitar o site da amazon e pesquisar um produto', () => {
    cy.visit('https://www.amazon.com.br/')

  })

  it('adicionar um produto ao carrinho e validar se o mesmo foi adicionado', () => {
    cy.get('nav-a  ').contains('Mais Vendidos')
      .contains('Fire TV Stick Lite | Streaming em Full HD com Alexa | Com Controle Remoto Lite por Voz com Alexa (sem controles de TV)').click()
      .get('#add-to-cart-button').contains('Adicionar ao carrinho').click()
      .get('.a-button-text').contains('Ir para o carrinho').click()
  })

  // Cenário2
  // -Acesse https://www.amazon.com.br/
  // - Adicione o 2 produto no carrinho
  // - Valide se o valor total do carrinho está correto
  it('adicionar o segundo produto ao carrinho e validar o valor total', () => {
    cy.contains('Balança Digital de Cozinha, SF-400, Até 10 kg, Escala 1 grama').click()
      .get('#add-to-cart-button').contains('Adicionar ao carrinho').click()
      .get('.a-button-text').contains('Ir para o carrinho').click()
      .get('.a-row a-spacing-mini sc-subtotal sc-subtotal-buybox sc-java-remote-feature')
  })
})

//Suite 2
describe('Cadastro', () =>{
//   Cenário1
// - Acesse https://www.amazon.com.br/
// - Acesse a página para criar uma nova conta
// - Preencha os campos
  beforeEach('visite o site da Amazon', () =>{
    cy.visit('https://www.amazon.com.br/')
  })

  it('Acessar pagina de cadastro e preencher os campos', () =>{
    cy.get('#nav-link-accountList').click()
      .get('#createAccountSubmit').click()
      .get('#ap_customer_name').type('Willian Souza')
      .get('#ap_email').type('willian.souza2007@hotmail.com')
      .get('#ap_password').type('123456')
      .get('#ap_password_check').type('123456')
  })
})
