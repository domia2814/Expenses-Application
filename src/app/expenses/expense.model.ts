export class Expense {
    constructor(
        public name: string,
        public price: number,
        public category: Category
    )
 {}

 }
enum Category {
    TRAVELS,
    FOOD,
    BILLS,
    HOUSE
}