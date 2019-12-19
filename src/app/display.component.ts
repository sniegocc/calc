import { Component, Input } from '@angular/core';

@Component({
  selector: 'display',
  template: `<input type="text" readonly="readonly" value="{{ expr }}" />`,
  styles: [``]
})
export class DisplayComponent  {
  @Input() expr: string;
}
