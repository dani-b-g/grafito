import { newE2EPage } from '@stencil/core/testing';

describe('componente-formulario', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<componente-formulario></componente-formulario>');

    const element = await page.find('componente-formulario');
    expect(element).toHaveClass('hydrated');
  });
});
