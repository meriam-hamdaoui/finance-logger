import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

/* when we use a querySelector with a tag name the ts compiler will
    now exactly the html element name
    but what if we have multiple element with the same tag
    in this case we can use the class name
    another thing we need to consider it is that the ts compiler will
    only assigned as an element without specifing what html element is
    we can fix this by the following lines
*/
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log("form children, the element inside it => ", form.children);

// the form children are the inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// grabe the ul element from our html file
const ul = document.querySelector("ul")!;
// list template instance
const list = new ListTemplate(ul);

// let's working on event listener
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // use the tuple to optimase our code
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  // create a var with HasFormatter interface
  let doc: HasFormatter;

  type.value === "invoice"
    ? (doc = new Invoice(...values))
    : (doc = new Payment(...values));

  list.render(doc, type.value, "end");
  // let formInputs = {
  //   type: type.value,
  //   tofrom: tofrom.value,
  //   details: details.value,
  //   amount: amount.valueAsNumber, // the js display the numbers as string on the console so we force it to see it as a number
  // };
});

/*
const anchor = document.querySelector("a")!;
 this line can cause us a problem of "anchor" is possibly "null"
 to fix it we can add an if condition or as a developer be sure and add ! in the end of the line
 console.log("anchor innerText => ", anchor.innerText);
 console.log("anchor href => ", anchor.href); */

// Classes
/*class Invoice {
  client: string;
  details: string;
  amount: number;

  // we need to initiate those parameters using a constractor
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  // we can add any other methode to manipulate those 3 parameters
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

// after declaring the class we can initiate it with different values
const InvoiceOne = new Invoice("maya", "work on her carrier", 250);
const InvoiceTwo = new Invoice("sameh", "work on her website", 550);

console.log(InvoiceOne);
console.log(InvoiceTwo);
*/
