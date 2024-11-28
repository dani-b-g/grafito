import { newSpecPage } from '@stencil/core/testing';
import { FormularioReactivo } from '../formulario-reactivo';

describe('formulario-reactivo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormularioReactivo],
      html: `<formulario-reactivo></formulario-reactivo>`,
    });
    expect(page.root).toEqualHtml(`
      <formulario-reactivo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </formulario-reactivo>
    `);
  });
});
