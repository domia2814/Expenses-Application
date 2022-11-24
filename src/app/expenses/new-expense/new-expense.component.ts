import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent implements OnInit {

  constructor(private expenseService: ExpenseService ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const value = form.value
    const newExpense = new Expense(value.name, value.price, value.category)
    this.expenseService.addExpense(newExpense)
    form.reset()
  }

}
