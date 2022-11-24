import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
