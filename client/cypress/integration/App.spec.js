describe('MERN App E2E', () => {
  it('User should see main page ', () => {
      cy.visit('/');
      cy.url().should('include', 'http://localhost:3000/')
  });

  it('User should register', () => {
    cy.contains('Registrations').click()
    cy.url().should('include', '/register')
    cy.get('#email').type('Igor.dzyubich2@gmail.com')
    cy.get('#password').type('Qwerter123')
    cy.get('button').click()
    cy.url().should('include', '/login')
  });

  describe('Register unsuccessfull scenario', () => {

    it('User should not register with wrong email', () => {
      cy.visit('/register');
      cy.get('#email').type('Igor.dzyubich2@gmail.c')
      cy.get('#password').type('Qwerter123')
      cy.get('button').click()
      cy.contains('Incorrect email!')
    });

    it('User should not register with wrong password', () => {
      cy.visit('/register');
      cy.get('#email').type('Igor.dzyubich2@gmail.com')
      cy.get('#password').type('Qwerter')
      cy.get('button').click()
      cy.contains('Incorrect password!')
    });

    
  });

  it('User should login', () => {
    cy.get('#email').type('Igor.dzyubich2@gmail.com')
    cy.get('#password').type('Qwerter123')
    cy.get('button').click()
    cy.contains('User dashboard')
  });

  it('The user should be able to click on the shows menu button', () => {
    cy.get('.MuiList-root > :nth-child(3)').click()
    cy.url().should('include', '/dashboard/shows')
  });

  it('The user should be able to click on the peoples menu button', () => {
    cy.get('.MuiList-root > :nth-child(4)').click()
    cy.url().should('include', '/dashboard/peoples')
  });

  describe('Login unsuccessfull scenario', () => {
    it('User should not login with wrong password', () => {
      cy.visit('/login');
      cy.get('#email').type('Igor.dzyubich2@gmail.com')
      cy.get('#password').type('Qwerter')
      cy.get('button').click()
      cy.contains('Incorrect password!')
    });
  
    it('User should not login with wrong email', () => {
      cy.visit('/login');
      cy.get('#email').type('Igor.dzyubich2@gmail.c')
      cy.get('#password').type('Qwerter123')
      cy.get('button').click()
      cy.contains('Incorrect email!')
    });
  });
  
});