describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  }),
  it('navigate to pokemon page', function() {
    cy.visit('')
    cy.visit('/pokemon/ivysaur')
    cy.contains('ivysaur')
    cy.contains('overgrow')
    cy.contains('speed')
  })
})