import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/app/expenses/expense.model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss']
})
export class ExpenseItemComponent implements OnInit {
  @Input() expense: Expense
  @Input() index: number
  @Input() sum: number

  constructor() { }

  ngOnInit(): void {
  }

}
