import { Component, Input } from '@angular/core';

@Component({
  selector: 'popup',
  template: `
    <div class="panel">
       i am panel popup
    </div>
  `,
  styles:[`
    :host {
      border: 1px solid #ddd;
      border-top: 0;
      margin-bottom: 2rem;
      display: block;
      padding: 8px;
      padding:1em 1.2em;
    }
  `]
})
export class Popup {
}