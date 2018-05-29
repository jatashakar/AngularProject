import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-startcomponent',
  templateUrl: './startcomponent.component.html',
  styleUrls: ['./startcomponent.component.css']
})
export class StartcomponentComponent implements OnChanges {
@Input() rating: number;
starWidth : number;
  ngOnChanges(): void {
  this.starWidth = this.rating*86/5;
  console.log("StartWidth="+this.starWidth);
  }
  constructor() { }
get(): number{
  return 0;
}


}
