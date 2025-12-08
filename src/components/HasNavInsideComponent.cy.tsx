import Component from './HasNavInside'

describe('<Component />', () => {
  it('renders', () => {
    cy.mount(<Component />)
    cy.get('h2').contains('Content')
  })
})