import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sales-item',
  templateUrl: 'sales-item.html'
})
export class SalesItemComponent implements OnInit{
  @Input() item: any;
  @Output() buy: EventEmitter<any> = new EventEmitter();

  private label: string;
  private cost: number;
  private info: string;
  private isAlarm: boolean;

  constructor() {}

  ngOnInit(): void {
    const item = this.item;
    this.label = item.label;
    this.cost = item.cost;
    this.info = item.info;
    this.isAlarm = item.isAlarm;
  }

  click() {
    console.log('click');
    this.buy.emit(this.item);
  }

}
