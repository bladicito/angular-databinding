import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges {

  @Input() result: number;

  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      if (changes.hasOwnProperty(change)) {
        const element = changes[change];
        console.log('Alter Wert: ' + element.previousValue);
        console.log('Neuer Wert: ' + element.currentValue);
      }
    }
  }

}
