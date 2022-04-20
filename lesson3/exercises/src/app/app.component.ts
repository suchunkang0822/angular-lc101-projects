import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  handleTakeOff():void{
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
    }
  }

  handleLand(){
    let result = window.confirm("The shuttle is landing. Landing gear engaged.")
    if(result){
      this.width = 0;
      this.height = 0;
      this.color = 'green';
      this.message = "The shuttle has landed.";
    }
  }

  handleAbortMission(){
    let result = window.confirm("Do you really want to abort mission?");
    if(result){
      this.width = 0;
      this.height = 0;
      this.color = 'red';
      this.message = "Mission aborted.";
    }
  }
}
