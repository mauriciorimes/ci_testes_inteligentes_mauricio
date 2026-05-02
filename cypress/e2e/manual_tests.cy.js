describe('Manual Tests - Automation Exercise', () => {
  
  beforeEach(() => {
    // Acessa a página principal antes de cada teste
    cy.visit('https://automationexercise.com');
  });

  it('should navigate to the login/signup page', () => {
    // Clica no link do menu usando o href
    cy.get('a[href="/login"]').click();
    
    // Verifica se a URL mudou corretamente e se o formulário carregou
    cy.url().should('include', '/login');
    cy.get('.login-form').should('be.visible');
  });

  it('should display an error message for invalid login', () => {
    // Navega até a tela de login
    cy.get('a[href="/login"]').click();
    
    const invalidEmail = 'test_invalid_user_123@email.com';
    const invalidPassword = 'wrongpassword123';

    // Seleciona os campos pelo atributo "data-qa" e digita os valores
    cy.get('[data-qa="login-email"]').type(invalidEmail);
    cy.get('[data-qa="login-password"]').type(invalidPassword);
    
    // Clica no botão de login
    cy.get('[data-qa="login-button"]').click();

    // Verifica se a mensagem de erro de senha/email incorreto apareceu na tela
    cy.get('.login-form form p').should('contain', 'incorrect');
  });

});
