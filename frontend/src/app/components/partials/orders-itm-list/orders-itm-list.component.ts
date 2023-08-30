import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'orders-itm-list',
  templateUrl: './orders-itm-list.component.html',
  styleUrls: ['./orders-itm-list.component.css']
})
export class OrdersItmListComponent implements OnInit {

  @Input() order!: Order;

  constructor() { }

  ngOnInit(): void {

  }

}
