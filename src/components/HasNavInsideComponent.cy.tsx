import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Component from './HasNavInside'
import { useRouterSeam as injectRouter, UseRouter } from "@/helper";

export const useRouter: UseRouter = () => {
  return {
    // mocked router methods
  } as AppRouterInstance;
};

injectRouter(useRouter);

describe('<Component />', () => {
  it('renders', () => {
    cy.mount(<Component />)
    cy.get('h2').contains('Content')
  })
})