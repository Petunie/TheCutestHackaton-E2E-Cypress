// import lodash which is necessary for generating users
import { random } from 'lodash';

// In the beggining of each test lodash function random generate unique users for each test
function createRandomAlphanumericString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

// In the beggining of each test lodash function random generate unique users for each test
let firstName = `firstName${createRandomAlphanumericString(7)}`;
let lastName = `lastName${createRandomAlphanumericString(7)}`;
let email = `email${random(Number.MAX_SAFE_INTEGER)}@email.com`;
let password = `Tojejedno1`;

describe('register and createUser', () => {
  it('createUser', () => {
    // navigation on main page
    cy.visit('http://thecutest.czechhackitas.cz/index.php')
    // navigation to Sing in section
    cy.get('.user_login').click()
    // write down email
    cy.get('#email_create').type(email)
    cy.get('#SubmitCreate').click()
    // write down credencials for user
    cy.get('#customer_firstname').type(firstName)
    cy.get('#customer_lastname').type(lastName)
    cy.get('#passwd').type(password)
    cy.get('#submitAccount > span').click()
    cy.get('.page-heading').should('be.visible')
  })

    it('Log in user', () => {
    // navigation on main page
    cy.visit('http://thecutest.czechhackitas.cz/index.php')
    // navigation to Sing in section
    cy.get('.user_login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()
    cy.get('.page-heading').should('be.visible')
    })
  })
