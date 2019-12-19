import { Component, Input } from '@angular/core';

@Component({
  selector: 'display',
  template: `<input type="text" readonly="readonly" value="{{ expr }}" />`,
  styles: [`input {width: 100%;height: 40px; border-color: #112d37;font-size: 30px;}`]
})
export class DisplayComponent  {
  @Input() expr: string;
}
