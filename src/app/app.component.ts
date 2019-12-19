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
      "val": 1,
      "class": ""
   },
   {
      "val": 2,
      "class": ""
   }, 
   {
      "val": 3,
      "class": ""
   },
   {
      "val": "+",
      "class": "btn-outline"
   },
   {
      "val": 4,
      "class": ""
   }, 
   {
      "val": 5,
      "class": ""
   },
   {
      "val": 6,
      "class": ""
   },
   {
      "val": "-",
      "class": "btn-outline"
   }, 
   {
      "val": 7,
      "class": ""
   },
   {
      "val": 8,
      "class": ""
   },
   {
      "val": 9,
      "class": ""
   },
   {
      "val": "=",
      "class": "btn-outline"
   }  
   ];

   public addToExpr(event, item) {
     if(item.val === "=") {
       this.expr = eval(this.expr);
       }
     else {this.expr += item.val;}
    
  }
}
