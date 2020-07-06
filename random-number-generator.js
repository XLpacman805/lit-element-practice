var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, html } from 'lit-element';
let RandomNumberGenerator = class RandomNumberGenerator extends LitElement {
    constructor() {
        super(...arguments);
        this.number = 0;
    }
    render() {
        return html `
        <h3> RANDOM NUMBER GENERATOR!!! </h3>
        <button @click="${this.randomNumber}">Generate Random Number</button> <b> Number (1-10):  ${this.number} </b>
    `;
    }
    randomNumber() {
        this.number = Math.round(Math.random() * 10);
    }
};
__decorate([
    property({ type: Number })
], RandomNumberGenerator.prototype, "number", void 0);
RandomNumberGenerator = __decorate([
    customElement('random-number-generator')
], RandomNumberGenerator);
export { RandomNumberGenerator };
//# sourceMappingURL=random-number-generator.js.map