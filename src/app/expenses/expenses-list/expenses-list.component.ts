import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/expenses/expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss'],
})
export class ExpensesListComponent implements OnInit {
  
  expenses: Expense[]
  
  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenses = this.expenseService.getExpenses()
    this.expenseService.expenseChanged  // to jest metoda by nowe wydatki pojawiały się mimo zastosowania slice() - tablicy "kopii"
    .subscribe(
      (expenses: Expense[]) =>
      this.expenses = expenses
    )
  }

}
