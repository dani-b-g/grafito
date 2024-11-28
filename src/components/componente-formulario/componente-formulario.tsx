import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'componente-formulario',
  styleUrl: 'componente-formulario.css',
  shadow: true,
})
export class ComponenteFormulario {
  @State() formData: { nombre: string; email: string } = { nombre: '', email: '' };

  handleInputChange(event: Event, campo: string) {
    const valor = (event.target as HTMLInputElement).value;
    this.formData = { ...this.formData, [campo]: valor };
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Datos del formulario:', this.formData);
    // Aquí podrías enviar los datos a una API o realizar otras acciones
  }

  render() {
    return (
      <form class="bg-white p-6 rounded-md shadow-md" onSubmit={(e) => this.handleSubmit(e)}>
        <div class="mb-4">
          <label class="block text-gray-700">Nombre:</label>
          <input
            type="text"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={this.formData.nombre}
            onInput={(e) => this.handleInputChange(e, 'nombre')}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email:</label>
          <input
            type="email"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={this.formData.email}
            onInput={(e) => this.handleInputChange(e, 'email')}
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 btn-primary"
        >
          Enviar
        </button>
      </form>
    );
  }
}
