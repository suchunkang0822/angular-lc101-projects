import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Blah Blah Blah, Let\'s Go';
  image1 = 'https://www.gannett-cdn.com/presto/2020/01/16/PNJM/1d076419-c075-4f59-a808-b2630d2b5d39-Bentley.jpg?crop=1919,1080,x0,y97&width=1600&height=800&format=pjpg&auto=webp';
  image2 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/porsche-cayenne-turbo-gt-6-jpg-1628785027.jpg?crop=0.775xw:0.516xh;0.00163xw,0.315xh&resize=1200:*';
  image3 = 'https://di-uploads-pod15.dealerinspire.com/porscheoffarmingtonhills/uploads/2021/10/2022-Porsche-Cayenne-Turbo-GT.jpg';

  constructor() { }

  ngOnInit() {
  }

}
