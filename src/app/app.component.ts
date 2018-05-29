import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first = 0;
  second = 0;
  result = 0;
  operator = '+';

  onFirstValueChange(e: Event) {
    this.first = Number((<HTMLInputElement>e.target).value);
    this.calculate();
  }

  onSecondValueChange(e: Event) {
    this.second = Number((<HTMLInputElement>e.target).value);
    this.calculate();
  }

  onOperatorChange(e: Event) {
    this.operator = (<HTMLSelectElement>e.target).value;
    this.calculate();
  }

  calculate() {
    switch (this.operator) {
      case '+': {
        this.result = this.first + this.second;
        break;
      }
      case '-': {
        this.result = this.first - this.second;
        break;
      }
    }
  }
}
