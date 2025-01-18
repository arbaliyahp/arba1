describe('template spec', () => {


  it('login success - success login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
    cy.get('#email').type('arbaliyah@gmail.com')
    cy.get('#pass').type('Arba123@')
    cy.get('#send2').click()
  })

  it('should fail login when email or password is incorrect', () => {
    // Buka halaman login
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    
    // Masukkan email
    cy.get('#email').type('user@example.com') // Email contoh
    
    // Masukkan password
    cy.get('#pass').type('wrongpassword123') // Password salah
    
    // Klik tombol "Sign In"
    cy.get('#send2').click()
   
  })
  
    it('should show an error when the email field is empty', () => {
        // Buka halaman login
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
        
        // Biarkan field email kosong
        cy.get('#email').clear()
        
        // Masukkan password valid
        cy.get('#pass').type('ValidPassword123'); // Ganti dengan password yang valid
        
        // Klik tombol "Sign In"
        cy.get('#send2').click()
        
        // Verifikasi pesan error untuk email yang kosong
        cy.get('#email-error').should('contain', 'This is a required field.')
    })

})