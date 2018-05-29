import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  @Output() resultChange = new EventEmitter<number>();

  first = 0;
  second = 0;
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
        this.resultChange.emit(this.first + this.second);
        break;
      }
      case '-': {
        this.resultChange.emit(this.first - this.second);
        break;
      }
    }
  }
}
