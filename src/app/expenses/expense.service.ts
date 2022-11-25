import { BehaviorSubject, Subject } from "rxjs";
import { Category, Expense } from "./expense.model";

export class ExpenseService{

    private expenses: Expense[] = [
        new Expense(
          'Potatoes',
          15,
          Category.food
        ),
        new Expense(
          'Ticket',
          10,
          Category.travels
        ),
        new Expense(
          'Energy',
          800,
          Category.bills
        ),
        new Expense(
          'Dentist',
          2000,
          Category.health
        )
      ]
      
      expenseChanged = new BehaviorSubject<Expense[]>(this.expenses) // to zabieg aby pojawiały się składniki w tablicy "kopii"

      getExpenses(){
        return this.expenses.slice() // slice oznacza utworzenie tablicy kopii
      }

      addExpense(expense: Expense){
        this.expenses.push(expense)
        this.expenseChanged.next(this.expenses.slice()) // to zabieg aby pojawiały się składniki w tablicy "kopii"
      }

      sumExpenses(category: Category){
      return this.expenses
        .filter(function (el) { return el.category === category; })
        .map(function (el) { return el.price; })
        .reduce(function (p, c) { return (p + c); });
      }
    }
