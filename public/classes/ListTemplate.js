/*
    1. register a list container (ul) in the constructor.
    2. create a reneder method to render a new "li" to the container
        -- accepts arguments : invoice/payment, a heading, a position
        -- create html template (li, h4, p)
        -- add the "li" template to the start/end of the list
*/
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    // since our item can be a payment or an invoice type, we only need to specify
    // that it has to be implement a HasFormatter interface
    render(item, heading, position) {
        // create a 'li' item
        const li = document.createElement("li");
        // create the heading
        const h4 = document.createElement("h4");
        // associate the heading to the h4
        h4.innerText = heading;
        // since the h4 is inside the li element we'll append it to it
        li.appendChild(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        position === "start"
            ? this.container.prepend(li)
            : this.container.append(li);
    }
}
