import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'formulario-reactivo',
  styleUrl: 'formulario-reactivo.css',
  shadow: true,
})
export class FormularioReactivo {
  @State() formData: { nombre: string; email: string } = { nombre: '', email: '' };

  handleNombreChange(valor: string) {
    this.formData = { ...this.formData, nombre: valor };
  }

  handleEmailChange(valor: string) {
    this.formData = { ...this.formData, email: valor };
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Datos del formulario:', this.formData);
    // Aquí podrías enviar los datos a una API o realizar otras acciones
  }

  render() {
    return (
      <form class="bg-white p-6 rounded-md shadow-md" onSubmit={(e) => this.handleSubmit(e)}>
        <input-text
          label="Nombre:"
          name="nombre"
          value={this.formData.nombre}
          onValueChanged={(e) => this.handleNombreChange(e.detail)}
        ></input-text>
        <input-email
          label="Email:"
          name="email"
          value={this.formData.email}
          onValueChanged={(e) => this.handleEmailChange(e.detail)}
        ></input-email>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    );
  }
}
