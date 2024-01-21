import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`
  .logged {
      color: white;
  }
`]
})
export class DetailsComponent {
  detailsDisplayed = false; 
  log = []
  logCount = 0

  getDisplay () {
    this.log.push(this.log.length+1);
    this.logCount++;
    if (this.detailsDisplayed === false) {
      return this.detailsDisplayed = true
    }else {
      return this.detailsDisplayed = false
    }   
  }
}
