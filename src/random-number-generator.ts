import { LitElement, customElement, property, html } from 'lit-element';



@customElement('random-number-generator')
export class RandomNumberGenerator extends LitElement {
  render() {
    return html`
        <h3> RANDOM NUMBER GENERATOR!!! </h3>
        <button @click="${this.randomNumber}">Generate Random Number</button> <b> Number (1-10):  ${this.number} </b>
    `;
  }

  @property({type: Number})
  number = 0;

  private randomNumber(): void {
      this.number = Math.round(Math.random() * 10);
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'random-number-generator': RandomNumberGenerator;
    }
  }