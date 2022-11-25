import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category, Expense } from '../expenses/expense.model';
import { ExpenseService } from '../expenses/expense.service';
import { SummaryDetail } from './summary-detail.model';
import { SummaryService } from './summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {

  summaries: SummaryDetail[]
  expenses: Expense[]
  Category = Category

  private isSumming: Subscription

  constructor(private summaryService: SummaryService, private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.summaries = this.summaryService.getSumaries()
    this.isSumming = this.expenseService.expenseChanged 
    .subscribe(
      (expenses: Expense[]) =>{
        console.log(expenses);
        this.expenses = expenses
      }
      
    )
  }

  ngOnDestroy(): void {
    this.isSumming.unsubscribe()
  }

}
