import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Category } from "../expenses/expense.model";
import { ExpenseService } from "../expenses/expense.service";
import { SummaryDetail } from "./summary-detail.model";

@Injectable()
export class SummaryService{
    
    summaryChanged = new Subject<SummaryDetail[]>()
    private summaries: SummaryDetail[]
    
    constructor(private expenseService: ExpenseService) { 
      expenseService.expenseChanged.subscribe((e) => {
        this.summaries = this.countSummaries()
      })
    }

      countSummaries(): SummaryDetail[] {
        return [
          new SummaryDetail(
            Category.travels,
            this.expenseService.sumExpenses(Category.travels)
          ),
          new SummaryDetail(
            Category.food,
            this.expenseService.sumExpenses(Category.food)
          ),
          new SummaryDetail(
            Category.bills,
            this.expenseService.sumExpenses(Category.bills)
          ),
          new SummaryDetail(
            Category.health,
            this.expenseService.sumExpenses(Category.health)
          ),
        ]
      }

      getSumaries(){
        return this.summaries
      }

   
}