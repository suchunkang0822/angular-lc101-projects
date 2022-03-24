import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

  //  newMovie:string = null;
  isShow:boolean = false;


   constructor() { }

   ngOnInit() {
   }

   toggleErrorMsg(newMovie:string){
    if(!newMovie){
      this.isShow = true;
    }else{
      this.isShow = false
    }
    console.log(this.isShow)
   }

   makeVisible(){
     document.getElementById('error').style.visibility ='visible'
   }

   addMovie(newTitle:string){
     if (!this.movies.includes(newTitle) && newTitle != ""){
        this.movies.push(newTitle);
     }
   }
}
