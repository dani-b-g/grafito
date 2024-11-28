import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'input-email',
  styleUrl: 'input-email.css',
  shadow: true,
})
export class InputEmail {
  @Prop() label: string;
  @Prop() name: string;
  @Prop() value: string = '';

  @Event() valueChanged: EventEmitter<string>;

  handleInputChange(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(valor);
  }

  render() {
    return (
      <div class="mb-4">
        <label class="block text-gray-700">{this.label}</label>
        <input
          type="email"
          name={this.name}
          value={this.value}
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          onInput={(event) => this.handleInputChange(event)}
        />
      </div>
    );
  }
}
