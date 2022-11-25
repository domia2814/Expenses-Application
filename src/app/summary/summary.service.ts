import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Expense } from "../expenses/expense.model";
import { ExpenseService } from "../expenses/expense.service";
import { SummaryDetail } from "./summary-detail.model";

@Injectable()
export class SummaryService{
    
    summaryChanged = new Subject<SummaryDetail[]>()

    
    constructor(private expenseService: ExpenseService) { }
   
    private summaries: SummaryDetail[] = [
        new SummaryDetail(
          'TRAVELS',
          this.expenseService.sumExpensesTravels()
        ),
        new SummaryDetail(
          'FOOD',
          this.expenseService.sumExpensesFood()
        ),
        new SummaryDetail(
          'BILLS',
          this.expenseService.sumExpensesBills()
        ),
        new SummaryDetail(
          'HEALTH',
          this.expenseService.sumExpensesHealth()
        ),
      ]

      getSumaries(){
        return this.summaries.slice()
      }

   
}