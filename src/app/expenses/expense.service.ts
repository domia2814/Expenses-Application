import { Subject } from "rxjs";
import { Expense } from "./expense.model";

export class ExpenseService{
    
    expenseChanged = new Subject<Expense[]>() // to zabieg aby pojawiały się składniki w tablicy "kopii"

    private expenses: Expense[] = [
        new Expense(
          'Potatoes',
          15,
          1
        ),
        new Expense(
          'Ticket',
          10,
          0
        ),
        new Expense(
          'Energy',
          800,
          2
        ),
        new Expense(
          'Table',
          2000,
          3
        )
      ]

      getExpenses(){
        return this.expenses.slice() // slice oznacza utworzenie tablicy kopii
      }

      addExpense(expense: Expense){
        this.expenses.push(expense)
        this.expenseChanged.next(this.expenses.slice()) // to zabieg aby pojawiały się składniki w tablicy "kopii"
      }
}