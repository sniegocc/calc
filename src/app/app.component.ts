import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Magda';
  public expr = "";
  btnList: any[] = [ {
      "ID": "1",
      "val": 1
   },
   {
      "ID": "2",
      "val": 2
   }, 
   {
      "ID": "3",
      "val": 3
   } 
   ];

   public addToExpr(event, item) {
     console.log(item.val)
    this.expr += item.val;
  }
}
