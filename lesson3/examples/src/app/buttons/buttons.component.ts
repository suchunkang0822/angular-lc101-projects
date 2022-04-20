import { Component, OnInit } from '@angular/core';
import { count } from 'console';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive_gold: boolean = false;
   inactive_silver: boolean = false;
   inactive_copper: boolean = false;

   inactive_frustration: boolean = false;
   counter: number = 0;

    add():void{
      if(this.counter >=2){
        this.counter = 0
      }
      this.counter+=1
      console.log(this.counter)
    }

    toggle(color:string):void{
      if(color==="gold"){
        this.inactive_gold = true;
      }else if(color==="silver"){
        this.inactive_silver = true;
      }else if(color==="copper"){
        this.inactive_copper=true;
      }else{
        this.inactive_gold = false;
        this.inactive_silver = false;
        this.inactive_copper = false;
      }
   }



   lcLightBlue: string = 'green';

   constructor() { }

   ngOnInit() { }

}
