import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Expense } from "./expense.model";

@Injectable()
export class ExpenseService {
    expenseChanged = new Subject<Expense[]>() // to zabieg aby pojawiały się składniki w tablicy "kopii"
    expense: Expense

    private expenses: Expense[] = [
        new Expense(
          'Potatoes',
          15,
          'FOOD'
        ),
        new Expense(
          'Ticket',
          10,
          'TRAVELS'
        ),
        new Expense(
          'Energy',
          800,
          'BILLS'
        ),
        new Expense(
          'Dentist',
          2000,
          'HEALTH'
        )
      ]

      getExpenses(){
        return this.expenses.slice() // slice oznacza utworzenie tablicy kopii
      }

      addExpense(expense: Expense){
        this.expenses.push(expense)
        this.expenseChanged.next(this.expenses.slice()) // to zabieg aby pojawiały się składniki w tablicy "kopii"
      }

      sumExpensesBills(){
        // if (this.expense.category === null){
        //   return 0
        // } else {
      return this.expenses
        .filter(function (el) { return el.category === 'BILLS'; })
        .map(function (el) { return el.price; })
        .reduce(function (p, c) { return (p + c); });
    } 
    

      sumExpensesFood(){
        return this.expenses
          .filter(function (el) { return el.category === 'FOOD'; })
          .map(function (el) { return el.price; })
          .reduce(function (p, c) { return (p + c); });
        }
      

        sumExpensesHealth(){
          return this.expenses
            .filter(function (el) { return el.category === 'HEALTH'; })
            .map(function (el) { return el.price; })
            .reduce(function (p, c) { return (p + c); });
          }  

          sumExpensesTravels(){
            return this.expenses
              .filter(function (el) { return el.category === 'TRAVELS'; })
              .map(function (el) { return el.price; })
              .reduce(function (p, c) { return (p + c); });
            }  
    }
