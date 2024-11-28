import { newSpecPage } from '@stencil/core/testing';
import { InputEmail } from '../input-email';

describe('input-email', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputEmail],
      html: `<input-email></input-email>`,
    });
    expect(page.root).toEqualHtml(`
      <input-email>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-email>
    `);
  });
});
