import { newSpecPage } from '@stencil/core/testing';
import { ComponenteFormulario } from '../componente-formulario';

describe('componente-formulario', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComponenteFormulario],
      html: `<componente-formulario></componente-formulario>`,
    });
    expect(page.root).toEqualHtml(`
      <componente-formulario>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </componente-formulario>
    `);
  });
});
