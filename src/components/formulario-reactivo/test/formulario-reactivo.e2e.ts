import { newE2EPage } from '@stencil/core/testing';

describe('formulario-reactivo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<formulario-reactivo></formulario-reactivo>');

    const element = await page.find('formulario-reactivo');
    expect(element).toHaveClass('hydrated');
  });
});
