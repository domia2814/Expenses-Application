import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Expense } from 'src/app/expenses/expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss'],
})
export class ExpensesListComponent implements OnInit, OnDestroy {
  
  expenses: Expense[]
  private isChanged: Subscription

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenses = this.expenseService.getExpenses()
    this.isChanged = this.expenseService.expenseChanged  // to jest metoda by nowe wydatki pojawiały się mimo zastosowania slice() - tablicy "kopii"
    .subscribe(
      (expenses: Expense[]) =>
      this.expenses = expenses
    )
    
  }

  ngOnDestroy(): void {
    this.isChanged.unsubscribe()
  }

}
