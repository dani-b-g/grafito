import { newE2EPage } from '@stencil/core/testing';

describe('input-email', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-email></input-email>');

    const element = await page.find('input-email');
    expect(element).toHaveClass('hydrated');
  });
});
