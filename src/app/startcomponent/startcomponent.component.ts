import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-startcomponent',
  templateUrl: './startcomponent.component.html',
  styleUrls: ['./startcomponent.component.css']
})
export class StartcomponentComponent implements OnChanges {
@Input() rating: number;
@Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

starWidth : number;
  ngOnChanges(): void {
  this.starWidth = this.rating*86/5;
  console.log("StartWidth="+this.starWidth);
  }
  constructor() { }
get(): number{
  return 0;
}
onClick() : void {
console.log(`The rating ${this.rating} was clicked`);
}

}
