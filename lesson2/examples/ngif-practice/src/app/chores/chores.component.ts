import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Do laundry','Empty dishwasher','Complete LaunchCode prep work','Buy groceries'];

   targetImage = 'https://b.rgbimg.com/users/v/vi/vivekchugh/600/mf0uDvS.jpg';

   constructor() { }

   ngOnInit() {
   }

}
